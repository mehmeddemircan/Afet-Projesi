var express = require('express');


const { shareLocation, locationHistory } = require('../controllers/location');

var router = express.Router();

router.route('/share-location').get(shareLocation)
router.route('/location-history').get(locationHistory)
module.exports = router;