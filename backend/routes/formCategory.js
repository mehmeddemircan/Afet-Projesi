var express = require('express');

const { createFormCategory, getAllFormCategory, getSingleFormCategory,  } = require('../controllers/formCategory');

var router = express.Router();
router.route('/formCategory/create').post(createFormCategory)
router.route('/formCategories').get(getAllFormCategory)
router.route('/formCategories/:categoryId').get(getSingleFormCategory)

module.exports = router;