var express = require('express');
const { updateRoleUser, userSearchQuery, deleteUser, updateUserLocation, getAllUserByPage, getUserLocationOnMap, getUsersOnMap } = require('../controllers/user');


var router = express.Router();

router.route('/users').get(getAllUserByPage)
router.route('/users/:id/update-role').put(updateRoleUser)
router.route('/users/search').get(userSearchQuery)
router.route('/users/:id/deleteUser').delete(deleteUser)
router.route('/users/:userId/location').patch(updateUserLocation)
router.route('/map/users/:id').get(getUserLocationOnMap)
router.route('/map/users').get(getUsersOnMap)

module.exports = router;