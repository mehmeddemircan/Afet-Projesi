var express = require('express');


const { shareLocation, locationHistory, getAllLocations, deleteUserLocations, updateLiveLocation, findLocationsByUserId } = require('../controllers/location');

var router = express.Router();

router.route('/share-location').get(shareLocation)
router.route('/location-history').get(locationHistory)
router.route('/users/locations').get(getAllLocations)
router.route('/users/:userId/delete').delete(deleteUserLocations)
router.route("/users/:userId/location").put(updateLiveLocation);
router.route('/:userId/locations').get(findLocationsByUserId)
module.exports = router;