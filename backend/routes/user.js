var express = require("express");
const {
  updateRoleUser,
  userSearchQuery,
  deleteUser,
  updateUserLocation,
  getAllUserByPage,
  getUserLocationOnMap,
  getUsersOnMap,
  addTaskToUser,
  getTasksOfUser,
  removeTaskFromUser,
  getMyShelterNeedForms,
  getMyClothingNeedForms,
} = require("../controllers/user");

var router = express.Router();

router.route("/users").get(getAllUserByPage);
router.route("/users/:id/update-role").put(updateRoleUser);
router.route("/users/search").get(userSearchQuery);
router.route("/users/:id/deleteUser").delete(deleteUser);
router.route("/users/:userId/location").patch(updateUserLocation);
router.route("/map/users/:id").get(getUserLocationOnMap);
router.route("/map/users").get(getUsersOnMap);
router.route("/users/:userId/add-task").post(addTaskToUser);
router.route("/users/:id/tasks").get(getTasksOfUser);
router.route("/users/:id/tasks/:objectId/remove").delete(removeTaskFromUser);

//user frontend form
router.route("/users/:userId/myShelterForms").get(getMyShelterNeedForms);
router.route("/users/:userId/myClothingForms").get(getMyClothingNeedForms);

module.exports = router;
