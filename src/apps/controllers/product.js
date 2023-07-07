const index = (req,res)=>{
    res.send("/admin/products")
}
const create = (req,res)=>{
    res.send("/admin/products/create")
}
const edit = (req,res)=>{
    res.send("/admin/products/edit/:id")
}
const del = (req,res)=>{
    res.send("/admin/products/delete/:id")
}
module.exports = {
    index: index,
    create:create,
    edit:edit,
    del:del
}