var express = require('express');
const { createNewPersonType, getAllPersonType, getSinglePersonType, updatePersonType, deletePersonType } = require('../controllers/person');


var router = express.Router();

router.route('/create-persontype').post(createNewPersonType)
router.route('/personTypes').get(getAllPersonType)
router.route('/personTypes/:id').get(getSinglePersonType)
router.route('/persontypes/:id/update').put(updatePersonType)
router.route('/persontypes/:id/delete').delete(deletePersonType)

module.exports = router;