const express = require('express');



const router= express.Router();
// Controllers
const {upload, remove, uploadProductPicture }  = require('../controllers/cloudinary')

// Routes
router.route('/uploadimages').post(upload)
router.route('/removeimage').post(remove)
router.route('/uploadProductImage').post(uploadProductPicture)



module.exports = router;