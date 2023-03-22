var express = require("express");
const {
  createArea,
  getAllArea,
  getSingleArea,
  updateArea,
  deleteArea,
  addRequriredProductToRequriment,
  removeProductFromRequriredProducts,
  getRequriredProducts,
  addRequriredPersonToRequriment,
  removePersonFromRequriredPeople,
  getRequriredPeople,
  getFilterQueryForArea,
  getFilterIncludesProductForArea,
} = require("../controllers/area");

var router = express.Router();

router.route("/create-area").post(createArea);
router.route("/areas").get(getAllArea);
router.route("/areas/:id").get(getSingleArea);
router.route("/areas/:id/update").put(updateArea);
router.route("/areas/:id/delete").delete(deleteArea);
router
  .route("/areas/:areaId/add-product")
  .post(addRequriredProductToRequriment);
router
  .route("/areas/:id/products/:objectId/remove")
  .delete(removeProductFromRequriredProducts);

router.route("/areas/:areaId/add-person").post(addRequriredPersonToRequriment);
router
  .route("/areas/:id/people/:objectId/remove")
  .delete(removePersonFromRequriredPeople);

router.route("/areas/:id/requriredProducts").get(getRequriredProducts);
router.route("/areas/:id/requriredPeople").get(getRequriredPeople);
//by priority in requrired_products
router.route('/get-filter-areas').get(getFilterQueryForArea);
//by products name in requrired_products
router.route('/get-areas-by-productTitle').get(getFilterIncludesProductForArea)
module.exports = router;
