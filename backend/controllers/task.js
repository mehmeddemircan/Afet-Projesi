const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Task = require("../models/Task");
const User = require("../models/User");

// Define task controller functionse
exports.createTask = catchAsyncErrors(async (req, res) => {
  try {
    const { text, dueDate, location, city ,address } = req.body;
    const task = new Task({
      text,
      dueDate,
      city,
      location,
      address
    });
    await task.save();
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.getTasksNotAssigned = catchAsyncErrors(async (req, res) => {
  try {
    const userId = req.params.userId;

    // Get the user with the specified ID
    const user = await User.findById(userId).populate("tasks");

    // Get the IDs of the tasks that are already assigned to the user
    const assignedTaskIds = user.tasks.map((task) => task._id);

    // Find all tasks that have not been assigned to the user
    const tasks = await Task.find({ _id: { $nin: assignedTaskIds } });

    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.getAllTask = catchAsyncErrors(async (req, res) => {
  try {
    const tasks = await Task.find().populate("city");

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.deleteTask = catchAsyncErrors(async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.updateTask = catchAsyncErrors(async (req, res) => {
  try {
    await Task.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      message: "Task updated successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.searchTasks = async (req, res) => {
  try {
    const { text, dueDate } = req.query;

    let query = {};

    if (text) {
      query.text = { $regex: new RegExp(text, "i") };
    }

    if (dueDate) {
      query.dueDate = { $lte: new Date(dueDate) };
    }

    const tasks = await Task.find(query);

    res.status(200).json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getTasksByCityIds = async (req, res) => {
  try {
    const { cityIds } = req.query;

    // If no cityIds parameter is provided, return all tasks
    if (!cityIds) {
      const tasks = await Task.find();
      res.status(200).json(tasks);
      return;
    }

    const cityIdsArray = cityIds.split(",");
    const tasks = await Task.find({ city: { $in: cityIdsArray } });
    res.status(200).json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
