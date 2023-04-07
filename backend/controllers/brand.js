const Brand = require("../models/Brand");
const cloudinary = require("cloudinary");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
exports.getAllBrand = catchAsyncErrors(async (req, res) => {
  try {
    const brands = await Brand.find();

    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.createBrand = catchAsyncErrors(async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.body.image);
    const { name ,category } = req.body;
    const image = result.secure_url;
    const brand = new Brand({ name,category,image });
    await brand.save();
    res.status(200).json({
      message: "Successfully added brand",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.getSingleBrand = catchAsyncErrors(async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.brandId).populate("products");
    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.updateBrand = catchAsyncErrors(async (req, res) => {
  try {

    const {image} = req.body

    const brand = await Brand.findById(req.params.brandId);
    if (!brand) {
      return res.status(404).json({
        message: 'Brand not found',
      });
    }
    if (image) {
      const result = await cloudinary.uploader.upload(req.body.image);
      brand.image = result.secure_url;
    }
    brand.name = req.body.name || brand.name;
    await brand.save();
    res.status(200).json({
      message: "Successfully updated brand",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.deleteBrand = catchAsyncErrors(async (req, res) => {
  try {
    await Brand.findByIdAndDelete(req.params.brandId);
    res.status(200).json({
      message: "Successfully deleted brand",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});


exports.getAllBrandsByCategory = async (req, res) => {
  try {
    const brands = await Brand.aggregate([
    
      {
        $group: {
          _id: "$category",
          brands: {
            $push: {
              _id: "$_id",
              name: "$name",
              products: "$products",
              image: "$image",
              category : "$category"
            },
          },
        },
      },
    ]);
    brands.sort((a, b) => (a._id < b._id ? 1 : -1));
    res.status(200).json(brands);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};