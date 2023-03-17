const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Product = require("../models/Product");
const slugify = require("slugify");
const cloudinary = require("cloudinary");
// config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
exports.createNewProduct = catchAsyncErrors(async (req, res, next) => {
  try {
    req.body.slug = slugify(req.body.title);
    console.log(req.body);

    const product = await new Product(req.body).save();

    res.status(200).json({
      product,
      message: "Successfully added product",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

exports.getAllProduct = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find().populate("category").exec();

  res.status(200).json({
    products,
  });
});
exports.getAllByCount = catchAsyncErrors(async (req, res, next) => {
  // createdAt updatedAt, desc/asc, 3

  const { sort, order, count } = req.body;

  const products = await Product.find({})
    .populate("category")
    .populate("subs")
    // .sort([[sort, order]])
    .limit(count)
    .exec();

  res.status(200).json({
    products,
  });
});

exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id)
    .populate("category")
    .populate("subs")
    .exec();

  res.status(200).json({
    product,
  });
});

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: "Successfully product deleted",
  });
});

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  const productId = req.params.id;
  // const { title, description, category, image } = req.body;
  const { title, description, category } = req.body;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Upload the new image and get its public_id and URL
    // const uploadedImage = await uploadImage(image);
    // const newImage = {
    //   public_id: uploadedImage.public_id,
    //   url: uploadedImage.secure_url,
    // };
    // Add the new image to the product's images array
    // product.images.push(newImage);

    product.title = title || product.title;
    product.description = description || product.description;
    product.category = category || product.category;
    // product.images = product.images;

    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

exports.getProductsByCategory = catchAsyncErrors(async (req, res) => {
  try {
    const categoryId = req.params.categoryid;
    const products = await Product.find({ category: categoryId });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.getProductsByFilter = catchAsyncErrors(async (req, res) => {
  const categoryId = req.query.categoryId;
  const subcategoryId = req.query.subcategoryId;
  // const minPrice = req.query.minPrice;
  // const maxPrice = req.query.maxPrice;
  // const color = req.query.color;
  // const size = req.query.size;
  // ...

  const filter = {};
  if (categoryId) filter.category = categoryId;
  if (subcategoryId) filter.subs = subcategoryId;
  // if (minPrice || maxPrice) {
  //   filter.price = {};
  //   if (minPrice) filter.price.$gte = parseFloat(minPrice);
  //   if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
  // }
  // if (color) filter.color = color;
  // if (size) filter.size = size;
  // ...

  const products = await Product.find(filter);
  res.json(products);
});

// Function to upload an image to Cloudinary
const uploadImage = async (image) => {
  try {
    const result = await cloudinary.uploader.upload(image, {
      folder: "your_folder_name",
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

// Controller function to update a product by adding a new image
exports.updateProductImages = async (req, res) => {
  const productId = req.params.id;
  const { image } = req.body;

  try {
    // Find the product by ID
    const product = await Product.findById(productId);

    // Upload the new image and get its public_id and URL
    const uploadedImage = await uploadImage(image);
    const newImage = {
      public_id: uploadedImage.public_id,
      url: uploadedImage.secure_url,
    };

    // Add the new image to the product's images array
    product.images.push(newImage);

    // Save the updated product to the database
    const savedProduct = await product.save();
    res.status(200).json({
      message: "Successfully added image",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
