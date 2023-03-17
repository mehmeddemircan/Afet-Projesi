

var express = require('express');

const { getSubs, createNewCategory, getAllCategory, updateCategory, deleteCategory, getSingleCategory, addSubToCategory, getAllCategoryByPage } = require('../controllers/category');

var router = express.Router();
router.route('/create-category').post(createNewCategory)
router.route('/categories').get(getAllCategoryByPage)
router.route('/categories/:id').get(getSingleCategory)
router.route('/get-all-category').get(getAllCategory)
router.route('/category/:id/update').put(updateCategory)
router.route('/category/:id/delete').delete(deleteCategory)
router.route('/category/subs/:_id').get(getSubs)
router.route('/categories/:id/add-sub').put(addSubToCategory)


module.exports = router;