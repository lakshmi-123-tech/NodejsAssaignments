const express= require("express")
const bodyparser=require("body-parser")
const employeeRoute=require("../Question1/Routes/EmployeeRoute")
const projectRoute=require("../Question1/Routes/ProjectRoute")
const getEmployeeDetails=require("../Question1/Routes/RelatedRoute")
const server= express()


server.listen(3000,()=>{
    console.log("server is listening")
});

server.use(bodyparser.json())

server.use("/employee", employeeRoute)
server.use("/project",projectRoute)
server.use("/getemployeedetails", getEmployeeDetails)
server.get("/",(req,res)=>{
res.end("hello from server you are connected");
})
