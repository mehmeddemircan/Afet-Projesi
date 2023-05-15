var express = require('express');
const { createClothingNeedForm, getAllClothingNeedForm, getClothingNeedFormById, updateClothingNeedForm, deleteClothingNeedForm, approveClothingForm, submitClothingNeedForm, getUserClothingForms, getUserClothingFormsLength } = require('../controllers/clothingNeedForm');


var router = express.Router();

router.route('/create-clothingNeedForm').post(createClothingNeedForm)
router.route('/clothingNeedForms').get(getAllClothingNeedForm)
router.route('/clothingNeedForms/:id').get(getClothingNeedFormById)
router.route('/users/:userId/clothingNeedForms/:id/delete').delete(deleteClothingNeedForm)
router.route('/clothingNeedForms/:id/update').put(updateClothingNeedForm)
router.route('/clothingNeedForms/:id/approve').put(approveClothingForm)

router.route('/users/:userId/clothingForms').get(getUserClothingForms)
router.route('/users/:userId/clothingForms-length').get(getUserClothingFormsLength)

module.exports = router;