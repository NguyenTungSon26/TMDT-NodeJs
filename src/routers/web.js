const express = require("express")
const router = express.Router()

const TestController = require("../apps/controllers/test")
const AuthController = require("../apps/controllers/auth")
const AdminController = require("../apps/controllers/admin")
const ProductController = require("../apps/controllers/product")

//Router Admin
router.get("/",(req,res)=>{
    res.send("Hello world")
})
router.get("/test",TestController.test)
router.post("/test",TestController.test2)


router.get("/admin/login",AuthController.getLogin)
router.post("/admin/login",AuthController.postLogin)

router.get("/admin/logout",AuthController.logout)

router.get("/admin/dashboard",AdminController.index)

router.get("/admin/products",ProductController.index)
router.get("/admin/products/create",ProductController.create)
router.get("/admin/products/edit/:id",ProductController.edit)
router.get("/admin/products/delete/:id",ProductController.del)

module.exports = router