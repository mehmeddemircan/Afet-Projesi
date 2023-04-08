var express = require('express');
const { createMealProduct, getAllMealProductByBrand, deleteMealProduct } = require('../controllers/mealProduct');


var router = express.Router();

router.route('/create-mealProduct').post(createMealProduct)
router.route('/brands/:brandId/meals').get(getAllMealProductByBrand)
router.route('/meals/:id/delete').delete(deleteMealProduct)

module.exports = router;