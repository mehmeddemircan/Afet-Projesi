var express = require("express");
const {
  createGetHelpForm,
  getHelpForms,
  getFormsByCategoryId,
  searchForms,
  deleteHelpForm,
} = require("../controllers/getHelpForm");
// modelName should be replaced here with your choice

var router = express.Router();

router.route("/getHelpForm/create").post(createGetHelpForm);
router.route("/getHelpForms").get(getHelpForms);
router.route("/getForms/:categoryId").get(getFormsByCategoryId);
router.route('/getHelpForms/:id/delete').delete(deleteHelpForm)
router.route("/getForms/:categoryId/search").get(searchForms);
module.exports = router;
