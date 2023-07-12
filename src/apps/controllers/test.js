const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");

const test = (req, res) => {
  req.session.email = "abc@gmail.com";
  res.send("session ton tai");
};
const test1 = (req, res) => {
  if (req.session.email) {
    res.send("session co ton tai");
  } else {
    res.send("session khong ton tai");
  }
};
const test2 = (req, res) => {
  req.session.destroy();
};

module.exports = {
  test,
  test1,
  test2,
};
