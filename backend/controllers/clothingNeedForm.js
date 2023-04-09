const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ClothingNeedForm = require("../models/ClothingNeedForm");

exports.createClothingNeedForm = catchAsyncErrors(async (req, res) => {
  try {
    const clothingNeedForm = await ClothingNeedForm.create(req.body);
    res.status(201).json({ message: "Successfully sent it and created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

exports.getAllClothingNeedForm = catchAsyncErrors(async (req, res) => {
  const page = parseInt(req.query.page) || 1; // default to page 1
  const limit = parseInt(req.query.limit) || 10; // default to 10 items per page
  const skipIndex = (page - 1) * limit;

  try {
    const clothingForms = await ClothingNeedForm.find()
      .sort({ createdAt: -1 }) // sort by creation date in descending order
      .skip(skipIndex)
      .limit(limit);

    const total = await ClothingNeedForm.countDocuments();

    res.status(200).json({
      clothingForms,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

exports.getClothingNeedFormById = catchAsyncErrors(async (req, res) => {
  try {
    const clothingNeedForm = await ClothingNeedForm.findById(req.params.id);

    res.status(200).json(clothingNeedForm);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.updateClothingNeedForm = catchAsyncErrors(async (req, res) => {
  try {
    await ClothingNeedForm.findByIdAndUpdate(
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

exports.deleteClothingNeedForm = catchAsyncErrors(async (req, res) => {
  try {
    await ClothingNeedForm.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Successfully deleted clothing need form ",
    });
  } catch (error) {}
});
