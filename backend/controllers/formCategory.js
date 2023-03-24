const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const FormCategory = require("../models/FormCategory");

exports.createFormCategory = catchAsyncErrors(async (req, res) => {
  const formCategory = new FormCategory({
    name: req.body.name,
    parent: req.body.parent || null,
  });

  try {
    await formCategory.save();
    res.status(200).json({
      message: "Successfully created form category",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.getAllFormCategory = catchAsyncErrors(async (req, res) => {
  try {
    const results = await FormCategory.find().populate('parent',"_id name")
      

    res.status(200).json(results)

  } catch (error) {
    res.status(500).json(error);
  }
});

exports.getSingleFormCategory = catchAsyncErrors(async (req,res) => {
  try {
    const formCategory = await FormCategory.findById(req.params.categoryId).select("_id name parent").populate('parent','_id name')

    res.status(200).json(formCategory)

  } catch (error) {
    res.status(500).json(error)
  }
})


// delete update 
