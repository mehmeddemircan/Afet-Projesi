var express = require("express");
const { getAllCity, addCityToCountry, deleteCity, updateCity } = require("../controllers/city");

var router = express.Router();

router.route("/countries/:countryId/create-city").post(addCityToCountry);
router.route("/countries/:countryId/cities").get(getAllCity);
router.route("/cities/:id/update").put(updateCity)
router.route("/cities/:id/delete").delete(deleteCity)
module.exports = router;
