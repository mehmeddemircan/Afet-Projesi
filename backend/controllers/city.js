const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const City = require("../models/City");
const Country = require("../models/Country");

exports.addCityToCountry = async (req, res) => {
  try {
    const country = await Country.findById(req.params.countryId);
    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }

    const city = new City(req.body);
    await city.save();

    country.cities.push(city);
    await country.save();

    res.status(201).json(city);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllCity = catchAsyncErrors(async (req, res) => {
  try {
    const cities = await City.find({ country: req.params.countryId });
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.updateCity = catchAsyncErrors(async (req, res) => {
  try {
    const updatedCity = await City.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      updatedCity: updatedCity,
      message: "Successfully updated city",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.deleteCity = catchAsyncErrors(async (req, res) => {
  try {
    await City.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Successfully deleted city" });
  } catch (error) {
    res.status(500).json(error);
  }
});
