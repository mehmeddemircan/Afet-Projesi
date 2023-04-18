var express = require('express');
const { createShelterProduct, getAllShelterProductByBrand, deleteShelterProduct, updateShelterProduct } = require('../controllers/shelterProduct');


var router = express.Router();

router.route('/create-shelterProduct').post(createShelterProduct)
router.route('/brands/:brandId/shelters').get(getAllShelterProductByBrand)
router.route('/shelters/:id/delete').delete(deleteShelterProduct)
router.route('/shelters/:id/update').put(updateShelterProduct)
module.exports = router;