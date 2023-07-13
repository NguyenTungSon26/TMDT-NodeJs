const ProductModel = require("../models/product");
const paginate = require("../../common/paginate");

const index = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const skip = page * limit - limit;
  const total = await ProductModel.find().countDocuments();
  const totalPage = Math.ceil(total / limit);

  const products = await ProductModel.find()
    .populate({
      path: "cat_id",
    })
    .skip(skip)
    .limit(limit);
  res.render("admin/products/product", {
    data: {
      products,
      page,
      totalPage,
      pages: paginate(page, totalPage),
    },
  });
};
const create = (req, res) => {
  res.render("admin/products/add_product");
};
const edit = (req, res) => {
  res.render("admin/products/edit_product");
};
const del = (req, res) => {
  res.send("/admin/products/delete/:id");
};

module.exports = {
  index: index,
  create: create,
  edit: edit,
  del: del,
};
