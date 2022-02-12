var fs= require('fs');
var filesArray ='Files.txt'
var firstTym=true
var filesNames=[]

function readcontent(callback){
    fs.readFile(filesArray,(err,data)=>{
        if(err) return callback(err)

        callback(null,data)
    })
}
if(fs.existsSync(filesArray)){
    firstTym=true
}
console.log("first tym", firstTym);
if(!firstTym){
    readcontent((err,content)=>{
        if(err) throw err;

        filesNames=content.toString().split(",")
        console.log("fNames:",filesNames);
        console.log("Enter filename:")
    })
}
var UserInput=process.stdin;
var found=false
UserInput.setEncoding('UTF-8');
UserInput.on('data',(data)=>{
    data=data.replace(/(\r\n|\n\r)/gm,"");
    found=filesNames.includes(data)
    if(found){
        console.log(data,"********Oops, Existing, Please enter different name ")
    }else{
        filesNames.push(data)
        fs.writeFile(data,'You are awesome',(err)=>{
            if(err) throw err;
        })
        fs.writeFile(filesArray,filesNames.toString(), (err)=>{
         if(err) throw err;
        })
    }
    console.log("fnames:",filesNames)
    console.log("Enter Filename:")
})
