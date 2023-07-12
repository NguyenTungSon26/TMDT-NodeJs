const ProductModel = require("../models/product");
const UserModel = require("../models/user");

const index = async (req, res) => {
  const products = (await ProductModel.find()).length;
  const users = (await UserModel.find()).length;
  res.render("admin/dashboard", { users, products });
};

module.exports = {
  index: index,
};
