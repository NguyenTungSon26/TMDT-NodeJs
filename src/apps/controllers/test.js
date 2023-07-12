const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");

const test =(req,res)=>{
    
    ProductModel.find().populate({path:"cat_id"}).exec((err,docs)=>{
        console.log(docs);
    })
    // const category = {
    //     description: "Bphone description",
    //     title: "Bphone title",
    //     slug:"Bphone-slug"
    // }
    // new CategoryModel(category).save()
    // res.send("Hello")
    // res.render("admin/test",{data2: "Son"})
    // const f = (obj)=>obj;
    // const obj = {
    //     a: "JS",
    //     b: "Node",
    //     c: "React"
    // }
    // console.log(f(obj));
//     res.send(`
//         <form method="post">
//             <input type="text" name="email"/>
//             <br/>
//             <input type="text" name="password"/>
//             <br/>
//             <input type="submit" name="sbm" value="Login"/>
//         </form>
//     `);
}

const test2 = (req,res)=>{
    console.log(req.body);
}

module.exports = {
    test,
    test2
}