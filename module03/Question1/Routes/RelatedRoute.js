const express=require("express")
const DetailController=require("../controllers/EmployeeDetailsController")
const router=express.Router()



router.get("/:id",DetailController.getById)

module.exports=router;