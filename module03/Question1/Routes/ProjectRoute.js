const express=require("express")
const projectController=require("../controllers/projectscontroller")
const router=express.Router()


router.get("/",projectController.getData)
router.get("/:id",projectController.getById)

module.exports=router;