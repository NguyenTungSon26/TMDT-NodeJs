const getLogin = (req,res)=>{
    res.render("admin/login", {data:{}})
}
const postLogin = (req,res)=>{
    const {email, password} = req.body
    let error = null
    if(email=="" || password ==""){
        error = "Tai khoan va mat khau khong duoc de trong !"
    }
    else if(email == "abc@gmail.com" && password == "123456"){
        res.redirect("/admin/dashboard")
    }
    else{
        error = "Tai khoan khong hop le !"
    }
    res.render("admin/login", {data:{error}})
}

const logout = (req,res)=>{
    res.send("logout")
}
module.exports = {
    getLogin,
    postLogin,
    logout
}