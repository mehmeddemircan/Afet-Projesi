var express = require('express');
const { createShelterNeedForm, getAllShelterNeedForm, getShelterNeedFormById, deleteShelterNeedForm, updateShelterNeedForm, approveShelterNeedForm, getUserShelterForms, getUserShelterFormsLength } = require('../controllers/shelterNeedForm');


var router = express.Router();

router.route('/create-shelterNeedForm').post(createShelterNeedForm)
router.route('/shelterNeedForms').get(getAllShelterNeedForm)
router.route('/shelterNeedForms/:id').get(getShelterNeedFormById)
router.route('/users/:userId/shelterNeedForms/:id/delete').delete(deleteShelterNeedForm)
router.route('/shelterNeedForms/:id/update').put(updateShelterNeedForm)
router.route('/shelterNeedForms/:id/approve').put(approveShelterNeedForm)


router.route('/users/:userId/shelterForms').get(getUserShelterForms)
router.route('/users/:userId/shelterForms-length').get(getUserShelterFormsLength)

module.exports = router;