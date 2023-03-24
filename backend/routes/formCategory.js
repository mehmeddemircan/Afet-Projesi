var express = require('express');

const { createFormCategory, getAllFormCategory, getSingleFormCategory, deleteFormCategory,  } = require('../controllers/formCategory');

var router = express.Router();
router.route('/formCategory/create').post(createFormCategory)
router.route('/formCategories').get(getAllFormCategory)
router.route('/formCategories/:categoryId').get(getSingleFormCategory)
router.route('/formCategories/:id/delete').delete(deleteFormCategory)
module.exports = router;