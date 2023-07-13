const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");

const test = (req, res) => {
  console.log(req.body.page1);
  console.log(req.body.page2);

  // req.session.email = "abc@gmail.com";
  // res.send("session ton tai");
};
const test1 = (req, res) => {
  // if (req.session.email) {
  //   res.send("session co ton tai");
  // } else {
  //   res.send("session khong ton tai");
  // }
};
const test2 = (req, res) => {};

module.exports = {
  test,
  test1,
  test2,
};
