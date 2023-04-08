const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Brand = require("../models/Brand");
const MealProduct = require("../models/MealProduct");
const cloudinary = require("cloudinary");
exports.getAllMealProductByBrand = catchAsyncErrors(async (req, res) => {
  try {
    const mealProducts = await MealProduct.find({ brand: req.params.brandId });
    res.status(200).json(mealProducts);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.createMealProduct = catchAsyncErrors(async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.body.image);
    const { title, price, brand, stock } = req.body;
    const image = result.secure_url;
    const mealProduct = new MealProduct({ title, price, brand, stock, image });
    const savedProduct =  await mealProduct.save();

    await Brand.findOneAndUpdate(
      { _id: req.body.brand },
      { $push: { products: savedProduct._id } },
      { new: true }
    );
    res.status(200).json({
      message: "Successfully added brand",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.deleteMealProduct = catchAsyncErrors(async (req, res) => {
  try {
    await MealProduct.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Successfully deleted meal product" });
  } catch (error) {
    res.status(500).json(error);
  }
});
