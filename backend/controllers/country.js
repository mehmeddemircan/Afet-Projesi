const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Country = require("../models/Country");

exports.createCountry = catchAsyncErrors(async (req, res) => {
  const newCountry = new Country(req.body);
  try {
    const savedCountry = await newCountry.save();
    res.status(200).json(savedCountry);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.getAllCountry = catchAsyncErrors(async (req, res) => {
  try {
    const countries = await Country.find().populate('cities',"_id name");
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.getSingleCountry = catchAsyncErrors(async (req, res) => {
  try {
    const country = await Country.findById(req.params.id).populate(
      "cities",
      "_id name"
    );

    res.status(200).json(country);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.deleteCountry = catchAsyncErrors(async (req, res) => {
  try {
    await Country.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Successfully deleted country",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.updateCountry = catchAsyncErrors(async (req, res) => {
  try {
    const updatedCountry = await Country.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      updatedCountry: updatedCountry,
      message: "Successfully updated country ",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});
