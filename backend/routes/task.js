var express = require('express');
const { createTask, getTasksNotAssigned, deleteTask, updateTask, getAllTask } = require('../controllers/task');
// modelName should be replaced here with your choice


var router = express.Router();

router.route('/create-task').post(createTask)
router.route('/tasks').get(getAllTask)
router.route('/users/:userId/not-added-tasks').get(getTasksNotAssigned)
router.route('/tasks/:id/delete').delete(deleteTask)
router.route('/tasks/:id/update').put(updateTask)
module.exports = router;