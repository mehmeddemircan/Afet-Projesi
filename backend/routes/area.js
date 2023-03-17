var express = require('express');
const { createArea, getAllArea, getSingleArea, updateArea, deleteArea, addRequriredProductToRequriment, removeProductFromRequriredProducts, getRequriredProducts } = require('../controllers/area');


var router = express.Router();

router.route('/create-area').post(createArea)
router.route('/areas').get(getAllArea)
router.route('/areas/:id').get(getSingleArea)
router.route('/areas/:id/update').put(updateArea)
router.route('/areas/:id/delete').delete(deleteArea)
router.route('/areas/:areaId/add-product').post(addRequriredProductToRequriment)
router.route('/areas/:id/products/:objectId/remove').delete(removeProductFromRequriredProducts) 
router.route('/areas/:id/requriredProducts').get(getRequriredProducts)

module.exports = router;