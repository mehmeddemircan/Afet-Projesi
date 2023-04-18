var express = require('express');
const { createMealProduct, getAllMealProductByBrand, deleteMealProduct, updateMealProduct } = require('../controllers/mealProduct');


var router = express.Router();

router.route('/create-mealProduct').post(createMealProduct)
router.route('/brands/:brandId/meals').get(getAllMealProductByBrand)
router.route('/meals/:id/delete').delete(deleteMealProduct)
router.route('/meals/:id/update').put(updateMealProduct)
module.exports = router;