var express = require('express');
const { createShelterNeedForm, getAllShelterNeedForm, getShelterNeedFormById, deleteShelterNeedForm, updateShelterNeedForm, approveShelterNeedForm } = require('../controllers/shelterNeedForm');


var router = express.Router();

router.route('/create-shelterNeedForm').post(createShelterNeedForm)
router.route('/shelterNeedForms').get(getAllShelterNeedForm)
router.route('/shelterNeedForms/:id').get(getShelterNeedFormById)
router.route('/shelterNeedForms/:id/delete').delete(deleteShelterNeedForm)
router.route('/shelterNeedForms/:id/update').put(updateShelterNeedForm)
router.route('/shelterNeedForms/:id/approve').put(approveShelterNeedForm)


module.exports = router;