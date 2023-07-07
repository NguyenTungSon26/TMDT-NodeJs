const test =(req,res)=>{
    // res.send("Hello")
    res.render("admin/test",{data2: "Son"})
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