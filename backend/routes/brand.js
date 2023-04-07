var express = require('express');
const { createBrand, getAllBrand, getSingleBrand, updateBrand, deleteBrand, getAllBrandsByCategory } = require('../controllers/brand');
const upload = require("../middlewares/upload");

var router = express.Router();

router.route('/create-brand').post(upload.single('thumbNailImage'),createBrand)
router.route('/brands').get(getAllBrand)
router.route('/brands/:brandId').get(getSingleBrand)
router.route('/brands/:brandId/update').put(upload.single('thumbNailImage'),updateBrand)
router.route('/brands/:brandId/delete').delete(deleteBrand)
router.route('/group').get(getAllBrandsByCategory)
module.exports = router;