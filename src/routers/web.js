const express = require("express");
const router = express.Router();

// Import Controller
const TestController = require("../apps/controllers/test");
const AuthController = require("../apps/controllers/auth");
const AdminController = require("../apps/controllers/admin");
const ProductController = require("../apps/controllers/product");

// Controller Site
const SiteController = require("../apps/controllers/site");

// Import Middleware
const AuthMiddleware = require("../apps/middlewares/auth");
const UploadMiddleware = require("../apps/middlewares/upload");
//Router Admin
// router.get("/", (req, res) => {
//   res.send("Hello world");
// });
router.get("/test", TestController.test);
router.get("/test1", TestController.test1);
router.get("/test2", TestController.test2);

// router.post("/test",TestController.test2)

router.get("/admin/login", AuthMiddleware.checkLogin, AuthController.getLogin);
router.post(
  "/admin/login",
  AuthMiddleware.checkLogin,
  AuthController.postLogin
);

router.get("/admin/logout", AuthMiddleware.checkAdmin, AuthController.logout);

router.get(
  "/admin/dashboard",
  AuthMiddleware.checkAdmin,
  AdminController.index
);

router.get(
  "/admin/products",
  AuthMiddleware.checkAdmin,
  ProductController.index
);
router.get(
  "/admin/products/create",
  AuthMiddleware.checkAdmin,
  ProductController.create
);
router.post(
  "/admin/products/store",
  AuthMiddleware.checkAdmin,
  UploadMiddleware.single("thumbnail"),
  ProductController.store
);
router.get(
  "/admin/products/edit/:id",
  AuthMiddleware.checkAdmin,
  ProductController.edit
);
router.post(
  "/admin/products/update/:id",
  AuthMiddleware.checkAdmin,
  UploadMiddleware.single("thumbnail"),
  ProductController.update
);
router.get("/admin/products/delete/:id", ProductController.del);

// Router site
router.get("/", SiteController.home);
router.get("/category-:slug.:id", SiteController.category);
router.get("/product-:slug.:id", SiteController.product);
router.post("/product-:slug.:id", SiteController.comment);
router.get("/search", SiteController.search);
router.get("/cart", SiteController.cart);
router.post("/update-cart", SiteController.updateCart);
router.post("/add-to-cart", SiteController.addToCart);
router.get("/del-cart-:id", SiteController.delCart);
router.get("/success", SiteController.success);

module.exports = router;
