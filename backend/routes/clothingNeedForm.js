var express = require('express');
const { createClothingNeedForm, getAllClothingNeedForm, getClothingNeedFormById, updateClothingNeedForm, deleteClothingNeedForm, approveClothingForm } = require('../controllers/clothingNeedForm');


var router = express.Router();

router.route('/create-clothingNeedForm').post(createClothingNeedForm)
router.route('/clothingNeedForms').get(getAllClothingNeedForm)
router.route('/clothingNeedForms/:id').get(getClothingNeedFormById)
router.route('/clothingNeedForms/:id/delete').delete(deleteClothingNeedForm)
router.route('/clothingNeedForms/:id/update').put(updateClothingNeedForm)
router.route('/clothingNeedForms/:id/approve').put(approveClothingForm)

module.exports = router;