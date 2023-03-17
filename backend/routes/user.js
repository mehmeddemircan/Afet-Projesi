var express = require('express');
const { getAllUser, updateRoleUser, userSearchQuery } = require('../controllers/user');


var router = express.Router();

router.route('/users').get(getAllUser)
router.route('/users/:id/update-role').put(updateRoleUser)
router.route('/users/search').get(userSearchQuery)
module.exports = router;