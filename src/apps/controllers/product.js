const ProductModel = require("../models/product");
const paginate = require("../../common/paginate");
const CategoryModel = require("../models/category");
const slug = require("slug");
const fs = require("fs");
const path = require("path");

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
    .sort({ _id: -1 })
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
const create = async (req, res) => {
  const categories = await CategoryModel.find().sort({ _id: -1 });
  res.render("admin/products/add_product", { categories });
};
const store = (req, res) => {
  const { file, body } = req;
  const product = {
    // thumbnail: body.thumbnail,
    description: body.description,
    price: body.price,
    cat_id: body.cat_id,
    status: body.status,
    featured: body.featured == "on",
    promotion: body.promotion,
    warranty: body.warranty,
    accessories: body.accessories,
    is_stock: body.is_stock,
    name: body.name,
    slug: slug(body.name),
  };
  if (file) {
    const thumbnail = "products/" + file.originalname;
    fs.renameSync(file.path, path.resolve("src/public/images", thumbnail));
    product["thumbnail"] = thumbnail;
    new ProductModel(product).save();
    res.redirect("/admin/products");
  }
};
const edit = (req, res) => {
  res.render("admin/products/edit_product");
};
const del = async (req, res) => {
  const id = req.params.id;
  await ProductModel.deleteOne({ _id: id });
  res.redirect("/admin/products");
};

module.exports = {
  index,
  create,
  store,
  edit,
  del,
};
