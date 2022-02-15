var fs =require('fs');
var Emplyeedata="projects.json"
exports.getData=(req,res)=>{
fs.readFile(Emplyeedata,(err,data)=>{
    if(err) console.log(err);
    res.send(JSON.parse(data))
});
}
exports.getById=(req,res)=>{
    const id=req.params.id
    let employeeArray=null
    fs.readFile(Emplyeedata,(err,result)=>{
        if(err) console.log(err);
        data=JSON.parse(result)
        for(i=0;i<data.length;i++){
            if(data[i].project_id==id){
                employeeArray=data[i]
                break
            }
        }
        if(employeeArray){
            res.send(employeeArray)
        }else{
            res.status(404).JSON({
               msg:'project Not Found' 
            })
        }

    })
}