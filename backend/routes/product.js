var express = require("express");
const {
  createNewProduct,
  getAllProduct,
  updateProduct,
  getSingleProduct,
  deleteProduct,
  getProductsByCategory,
  getProductsByFilter,
  handleImageUpload,
  updateProductImages,
  getAllByCount,
} = require("../controllers/product");
const upload = require("../middlewares/upload");


var router = express.Router();
router.route("/create-product").post(createNewProduct);
router.route("/products").get(getAllProduct);
router.route("/products/:id/update").put(updateProduct);
// yapılacak
router.route('/products/:count').get(getAllByCount)
router.route("/product/:id").get(getSingleProduct);

router.route("/products/:id/delete").delete(deleteProduct);
router.route("/category/:categoryid/products").get(getProductsByCategory);
router.route("/products/filter").get(getProductsByFilter);
// Define a route that handles the image upload
router.put("/products/:id/images", upload.array('images'),updateProductImages);
// router.put('/products/:productId/images', upload.array('images'), uploadImages);
// router.route('/products').post(list)

module.exports = router;
