const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Brand = require("../models/Brand");
const ClothesProduct = require("../models/ClothesProduct");
const cloudinary = require("cloudinary");
exports.getAllClothesProductByBrandId = catchAsyncErrors(async (req, res) => {
  try {
    const clothes = await ClothesProduct.find({ brand: req.params.brandId });

    res.status(200).json(clothes);
  } catch (error) {
    res.status(500).json(error);
  }
});

const uploadImagesToCloudinary = async (images) => {
  const uploadedImages = await Promise.all(
    images.map(async (image) => {
      const result = await cloudinary.uploader.upload(image);
      return { public_id: result.public_id, url: result.secure_url };
    })
  );
  return uploadedImages;
};
exports.createClothesProduct = catchAsyncErrors(async (req, res) => {
  try {
    const uploadedImages = await uploadImagesToCloudinary(req.body.images);

    const newProduct = new ClothesProduct({
      title: req.body.title,
      price: req.body.price,
      brand: req.body.brand,

      gender: req.body.gender,
      stock: req.body.stock,
      images: uploadedImages,
    });

    const savedProduct = await newProduct.save();

    // Find the corresponding Brand document and update its products array
    await Brand.findOneAndUpdate(
      { _id: req.body.brand },
      { $push: { products: savedProduct._id } },
      { new: true }
    );

    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.deleteClothesProduct = catchAsyncErrors(async (req, res) => {
  try {
    await ClothesProduct.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Successfully deleted cloth area" });
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.updateClothesProduct = catchAsyncErrors(async (req, res) => {
  try {
    // Get the product to update by ID
    const product = await ClothesProduct.findById(req.params.id);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    product.title = req.body.title || product.title;
    product.price = req.body.price || product.price;
    product.brand = req.body.brand || product.brand;

    product.gender = req.body.gender || product.gender;
    product.stock = req.body.stock || product.stock;

    // Upload new images to Cloudinary if provided
    if (req.body.images && req.body.images.length > 0) {
      const uploadedImages = await uploadImagesToCloudinary(req.body.images);
      product.images = uploadedImages;
    }

    // Save the updated product
    await product.save();
    res.status(200).json({
      message: "Successfully updated clothe product",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});
