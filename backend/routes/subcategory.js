var express = require('express');
const {createNewSubCategory, getAllSubCategory, getSingleSubCategory, updateSubCategory, deleteSubCategory } = require('../controllers/subcategory');

var router = express.Router();

router.route('/create-subcategory').post( createNewSubCategory)
router.route('/subcategories').get(getAllSubCategory)
router.route('/subcategory/:slug').get(getSingleSubCategory)
router.route('/subcategory/:id/update').put(updateSubCategory)
router.route('/subcategory/:id/delete').delete(deleteSubCategory)



module.exports = router;