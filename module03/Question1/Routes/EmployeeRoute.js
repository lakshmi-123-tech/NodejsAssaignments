const express=require("express")
const emplyeeController=require("../controllers/Employeecontroller")
const router=express.Router()


router.get("/",emplyeeController.getData)
router.get("/:id",emplyeeController.getById)

module.exports=router;