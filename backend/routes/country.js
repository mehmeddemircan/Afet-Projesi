var express = require("express");
const {
  getSingleCountry,
  getAllCountry,
  createCountry,
  deleteCountry,
  updateCountry,
} = require("../controllers/country");

var router = express.Router();

router.route("/create-country").post(createCountry);
router.route("/countries").get(getAllCountry);
router.route("/countries/:id").get(getSingleCountry);
router.route("/countries/:id/delete").delete(deleteCountry);
router.route("/countries/:id/update").put(updateCountry);

module.exports = router;
