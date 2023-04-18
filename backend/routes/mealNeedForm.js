var express = require('express');
const { getAllMealNeedForm, createMealNeedForm, getSingleMealFormById, updateMealNeedForm, deleteMealNeedForm, approveMealNeedForm } = require('../controllers/mealNeedForm');


var router = express.Router();

router.route('/create-mealNeedForm').post(createMealNeedForm)
router.route('/mealNeedForms').get(getAllMealNeedForm)
router.route('/mealNeedForms/:id').get(getSingleMealFormById)
router.route('/mealNeedForms/:id/update').put(updateMealNeedForm)
router.route('/mealNeedForms/:id/delete').delete(deleteMealNeedForm)
router.route('/mealNeedForms/:id/approve').put(approveMealNeedForm)


module.exports = router;