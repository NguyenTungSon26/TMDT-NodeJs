const moment = require("moment");
const CategoryModel = require("../models/category");
const CommentModel = require("../models/comment");
const ProductModel = require("../models/product");

const home = async (req, res) => {
  const featuredProduct = await ProductModel.find({
    featured: true,
    is_stock: true,
  })
    .sort({ _id: -1 })
    .limit(6);
  const latestProduct = await ProductModel.find({ is_stock: true })
    .sort({ _id: -1 })
    .limit(6);
  res.render("site", { featuredProduct, latestProduct });
};
const category = async (req, res) => {
  const { id } = req.params;
  const products = await ProductModel.find({ cat_id: id }).sort({ _id: -1 });
  const category = await CategoryModel.findById(id);
  const title = category.title;
  const total = products.length;
  res.render("site/category", { products, title, total });
};
const product = async (req, res) => {
  const { id } = req.params;
  const product = await ProductModel.findById(id);
  const comments = await CommentModel.find({ prd_id: id }).sort({ _id: -1 });
  // console.log(comments);
  res.render("site/product", { product, comments, moment });
};
const comment = async (req, res) => {
  const { id } = req.params;
  const { full_name, email, body } = req.body;
  const comment = {
    prd_id: id,
    full_name,
    email,
    body,
  };
  await new CommentModel(comment).save();
  res.redirect(req.path);
};
const search = async (req, res) => {
  const keyword = req.query.keyword || "";
  const filter = {};
  if (keyword) {
    filter.$text = {
      $search: keyword,
    };
  }
  // console.log(filter);
  const products = await ProductModel.find(filter);

  res.render("site/search", { keyword, products });
};
const addToCart = async (req, res) => {
  const { id, qty } = req.body;
  let cart = req.session.cart;
  let isProductExists = false;
  cart.map((item) => {
    if (item.id === id) {
      item.qty += parseInt(qty);
      isProductExists = true;
    }
    return item;
  });
  if (!isProductExists) {
    const product = await ProductModel.findById(id);
    cart.push({
      id,
      name: product.name,
      price: product.price,
      img: product.thumbnail,
      qty: parseInt(qty),
    });
  }
  req.session.cart = cart;
  res.redirect("/cart");
};
const cart = (req, res) => {
  const cart = req.session.cart;
  res.render("site/cart", { cart });
};

const updateCart = (req, res) => {
  const { products } = req.body;
  let cart = req.session.cart;
  cart.map((item) => {
    return (item.qty = parseInt(products[item.id]["qty"]));
  });
  req.session.cart = cart;
  res.redirect("/cart");
  // console.log(products);
};
const delCart = (req, res) => {
  const { id } = req.params;
  let cart = req.session.cart;
  const newCart = cart.filter((item) => {
    return item.id != id;
  });
  req.session.cart = newCart;
  res.redirect("/cart");
};
const success = (req, res) => {
  res.render("site/success");
};

module.exports = {
  home,
  category,
  product,
  comment,
  search,
  cart,
  updateCart,
  addToCart,
  delCart,
  success,
};
