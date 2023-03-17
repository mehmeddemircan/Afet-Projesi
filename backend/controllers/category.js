const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Category = require("../models/Category");
const SubCategory = require("../models/SubCategory");
const slugify = require("slugify");
exports.createNewCategory = catchAsyncErrors(async (req, res, next) => {
  try {
    const { name } = req.body;

    const _category = await Category.findOne({ name });

    if (_category) {
      res.status(400).json({
        success: false,
        error: "This category already created",
      });
    }

    const category = await Category.create({
      name,
      slug: slugify(name),
    });

    res.status(200).json({
      category,
      success: true,
      message: "Successfully added category ",
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
});
exports.getAllCategoryByPage = catchAsyncErrors(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 4;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  if (endIndex < (await Category.countDocuments().exec())) {
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
    results.categories = await Category.find()
      .populate("subs.sub")
      .limit(limit)
      .skip(startIndex)
      .exec();
    results.totalLength = (await Category.find()).length;
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  // const categories = await Category.find({})

  //   .sort({ createdAt: -1 });

  // res.status(200).json({
  //   categories,
  // });
});
exports.getSingleCategory = catchAsyncErrors(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  res.status(200).json({
    category,
  });
});
exports.updateCategory = catchAsyncErrors(async (req, res, next) => {
  const { name } = req.body;
  const updated = await Category.findByIdAndUpdate(
    req.params.id,
    { name, slug: slugify(name) },
    { new: true }
  );

  res.status(200).json({
    updated,
    success: true,
    message: "Successfully updated category",
  });
});
exports.deleteCategory = catchAsyncErrors(async (req, res, next) => {
  await Category.findByIdAndDelete(req.params.id);

  res.status(200).json({
    message: "Successfully deleted category",
  });
});

exports.getSubs = catchAsyncErrors(async (req, res, next) => {
  const subs = await SubCategory.find({ parent: req.params._id });

  res.status(200).json({
    subs,
  });
});

exports.addSubToCategory = catchAsyncErrors(async (req, res) => {
  const subOfCategory = {
    sub: req.body.sub,
  };

  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    const subcategory = await SubCategory.findById(subOfCategory.sub);

    if (!subcategory) {
      return res.status(404).json({ error: "Subcategory not found" });
    }

    category.subs.push(subOfCategory);
    const updatedCategory = await category.save();

    res.json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});


exports.getAllCategory = catchAsyncErrors(async(req,res) => {
  try {
          const categories = await Category.find()

          res.status(200).json(categories)

  } catch (error) {
      res.status(500).json(error)
  }
})
