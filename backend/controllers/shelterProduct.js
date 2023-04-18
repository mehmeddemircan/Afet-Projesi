const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Brand = require("../models/Brand");
const ShelterProduct = require("../models/ShelterProduct");
const cloudinary = require("cloudinary");

const uploadImagesToCloudinary = async (images) => {
  const uploadedImages = await Promise.all(
    images.map(async (image) => {
      const result = await cloudinary.uploader.upload(image);
      return { public_id: result.public_id, url: result.secure_url };
    })
  );
  return uploadedImages;
};

exports.createShelterProduct = catchAsyncErrors(async (req, res) => {
  try {
    const uploadedImages = await uploadImagesToCloudinary(req.body.images);

    const newShelterProduct = new ShelterProduct({
      title: req.body.title,
      description: req.body.description,
      brand: req.body.brand,
      category: req.body.category,
      price: req.body.price,
      stock: req.body.stock,
      images: uploadedImages,
      roomNumber: req.body.roomNumber,
    });

    const savedProduct = await newShelterProduct.save();

    await Brand.findOneAndUpdate(
      { _id: req.body.brand },
      { $push: { products: savedProduct._id } },
      { new: true }
    );
    res.status(200).json({
      message: "Successfully created shelter product",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.getAllShelterProductByBrand = catchAsyncErrors(async (req, res) => {
  try {
    const shelterProducts = await ShelterProduct.find({
      brand: req.params.brandId,
    });
    res.status(200).json(shelterProducts);
  } catch (error) {
    res.status(500).json(error);
  }
});

//will be  removed object from products array
exports.deleteShelterProduct = catchAsyncErrors(async (req, res) => {
  try {
    await ShelterProduct.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Successfully deleted shelter product" });
  } catch (error) {
    res.status(500).json(error);
  }
});


exports.updateShelterProduct = catchAsyncErrors(async (req, res) => {
  try {
    const shelterProductId = req.params.id; // Assuming the shelter product ID is passed as a parameter in the URL
    const updatedFields = {
      title: req.body.title,
      description: req.body.description,
      brand: req.body.brand,
      category: req.body.category,
      price: req.body.price,
      stock: req.body.stock,
      roomNumber: req.body.roomNumber,
    };

    if (req.body.images) {
      // If there are updated images provided in the request body, upload them to cloudinary
      const uploadedImages = await uploadImagesToCloudinary(req.body.images);
      updatedFields.images = uploadedImages;
    }

    const updatedProduct = await ShelterProduct.findByIdAndUpdate(
      shelterProductId,
      updatedFields,
      { new: true } // This option returns the updated product after the update is applied
    );

    if (!updatedProduct) {
      // If the product is not found
      return res.status(404).json({ message: "Shelter product not found" });
    }

    res.status(200).json({
      message: "Successfully updated shelter product",
    
    });
  } catch (error) {
    res.status(500).json(error);
  }
});






