const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ShelterNeedForm = require("../models/ShelterNeedForm");
const User = require("../models/User");

exports.createShelterNeedForm = catchAsyncErrors(async (req, res) => {
  try {
     const shelterNeedForm =  await ShelterNeedForm.create(req.body);

        // Add form ID to user model's clothingForms array
 const user = await User.findById(req.body.userId);
 if (user) {
   user.shelterForms.push(shelterNeedForm._id);
   await user.save();
 }
    res.status(200).json({ message: "Successfully sent it " });
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.getAllShelterNeedForm = catchAsyncErrors(async (req, res) => {
  const page = parseInt(req.query.page) || 1; // default to page 1
  const limit = parseInt(req.query.limit) || 10; // default to 10 items per page
  const skipIndex = (page - 1) * limit;

  try {
    const shelterForms = await ShelterNeedForm.find()
      .populate("cityOptions", "_id name")
      .sort({ createdAt: -1 }) // sort by creation date in descending order
      .skip(skipIndex)
      .limit(limit);

    const total = await ShelterNeedForm.countDocuments();

    res.status(200).json({
      shelterForms,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

exports.getShelterNeedFormById = catchAsyncErrors(async (req, res) => {
  try {
    const shelterNeedForm = await ShelterNeedForm.findById(req.params.id);

    res.status(200).json(shelterNeedForm);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.updateShelterNeedForm = catchAsyncErrors(async (req, res) => {
  try {
    await ShelterNeedForm.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      message: "Successfully updated need form ",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.deleteShelterNeedForm = catchAsyncErrors(async (req, res) => {
  try {
    await ShelterNeedForm.findByIdAndDelete(req.params.id);
    const userId = req.params.userId; // Assuming you have a middleware that sets the authenticated user in req.user
    await User.findByIdAndUpdate(userId, {
      $pull: { shelterForms: req.params.id }
    });
    res.status(200).json({
      message: "Successfully deleted Shelter need form ",
    });
  } catch (error) {}
});

exports.approveShelterNeedForm = catchAsyncErrors(async (req, res) => {
  try {
    await ShelterNeedForm.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          isApproved: true,
          ...req.body,
        },
      },
      { new: true }
    );

    res.status(200).json({
      message: "Successfully approved Shelter form",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.getUserShelterForms = catchAsyncErrors(async(req,res) => {
  try {

    const shelterForms = await ShelterNeedForm.find({userId : req.params.userId}).populate("cityOptions","name")
    

    res.status(200).json(shelterForms)
  } catch (error) {
    res.status(500).json({error : error.message})
  }
})


exports.getUserShelterFormsLength = catchAsyncErrors(async(req,res) => {
  try {

    const user = await User.findById(req.params.userId)
    res.status(200).json({ length : user.shelterForms.length})
  } catch (error) {
    res.status(500).json({error : error.message})
  }
})
