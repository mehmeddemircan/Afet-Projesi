const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ClothingNeedForm = require("../models/ClothingNeedForm");
const GetHelpForm = require("../models/GetHelpForm");
const ShelterNeedForm = require("../models/ShelterNeedForm");
const Task = require("../models/Task");
const User = require("../models/User");

exports.getAllUserByPage = catchAsyncErrors(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 4;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  if (endIndex < (await User.countDocuments().exec())) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  try {
    results.users = await User.find().limit(limit).skip(startIndex).exec();
    results.totalLength = (await User.find()).length;
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

exports.updateRoleUser = catchAsyncErrors(async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { role: "admin" },
      { new: true }
    );

    res.status(200).json({
      updatedUser,
      message: "Successfully changed role , updated as admin",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.userSearchQuery = async (req, res) => {
  try {
    const searchQuery = req.query.name;
    const users = await User.find({
      name: { $regex: searchQuery, $options: "i" },
    });
    res.json({
      users,
      message: "Successfully searched",
    });
  } catch (error) {
    res.status(500).send({ message: "Error searching users" });
  }
};

exports.deleteUser = catchAsyncErrors(async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "User successfully deleted",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.updateUserLocation = catchAsyncErrors(async (req, res) => {
  const { lat, lng } = req.body;
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user's location fields
    user.location.lat = lat;
    user.location.lng = lng;

    // Save the updated user to the database
    await user.save();

    res.status(200).json({ message: "Location updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

exports.getUserLocationOnMap = catchAsyncErrors(async (req, res) => {
  try {
    const users = await User.findById(req.params.id, {
      name: 1,
      email: 1,
      location: 1,
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.getUsersOnMap = catchAsyncErrors(async (req, res) => {
  try {
    const users = await User.find(
      { location: { $exists: true } },
      { name: 1, email: 1, location: 1 }
    );

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.addTaskToUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const { taskId } = req.body;

    user.tasks.push(taskId);
    await user.save();
    res.status(200).json({
      message: "Successfully added task to user",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTasksOfUser = catchAsyncErrors(async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("tasks");
    const userTasks = user.tasks;
    res.status(200).json(userTasks);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.removeTaskFromUser = catchAsyncErrors(async (req, res) => {
  try {
    // Delete controller to remove product from required_products array

    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Area not found" });
    }

    // Remove product from required_products array
    user.tasks.pull({ _id: req.params.objectId });
    await user.save();

    res.json({ message: "Task removed from user successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// sayfalama şeklinde olmalı
exports.getMyShelterNeedForms = catchAsyncErrors(async (req, res) => {
  try {
    const userShelterForms = await ShelterNeedForm.find({
      userId: req.params.userId,
    });

    res.status(200).json(userShelterForms);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.getMyClothingNeedForms = catchAsyncErrors(async(req,res) => {
  try {
    const userClothingForms = await ClothingNeedForm.find({userId : req.params.userId})

    res.status(200).json(userClothingForms)
  } catch (error) {
    res.status(500).json(error)
  }
})

