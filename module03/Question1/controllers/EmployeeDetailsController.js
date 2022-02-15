const fetch=require("node-fetch");

exports.getById=async(req,res)=>{
const id=req.params.id
const employeeUrl="http://localhost:3000/employee/"+id
console.log("employeeurl",employeeUrl)
try{
    const response= await fetch(employeeUrl);
    const employee= await response.json();

    const projectUrl="http://localhost:3000/project/"+employee.project_id
    const response1= await fetch(projectUrl);
    const project= await response1.json();

    const result={
        ...employee,
        ...project,
    }
    console.log("result:",result)
    res.send(result)
}catch(error){
console.log("getting error",error)
}

}