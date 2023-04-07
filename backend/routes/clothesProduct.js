var express = require('express');
const { getAllClothesProductByBrandId, createClothesProduct, deleteClothesProduct, updateClothesProduct } = require('../controllers/clothesProduct');
const upload = require('../middlewares/upload');


var router = express.Router();

router.route('/create-clothesProduct').post(upload.array('images'),createClothesProduct)
router.route('/brands/:brandId/clothes').get(getAllClothesProductByBrandId)
router.route('/clothesProduct/:id/delete').delete(deleteClothesProduct)
router.route('/clothesProduct/:id/update').put(updateClothesProduct)
module.exports = router;