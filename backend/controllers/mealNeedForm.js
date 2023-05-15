const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const MealNeedForm = require("../models/MealNeedForm");
const User = require("../models/User");

exports.createMealNeedForm = catchAsyncErrors(async (req, res) => {
  try {
    const mealNeedForm = await MealNeedForm.create(req.body);

          // Add form ID to user model's clothingForms array
 const user = await User.findById(req.body.userId);
 if (user) {
   user.mealForms.push(mealNeedForm._id);
   await user.save();
 }


    res.status(200).json({ message: "Successfully sent it " });
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.getAllMealNeedForm = catchAsyncErrors(async (req, res) => {
  const page = parseInt(req.query.page) || 1; // default to page 1
  const limit = parseInt(req.query.limit) || 10; // default to 10 items per page
  const skipIndex = (page - 1) * limit;

  try {
    const mealForms = await MealNeedForm.find()

      .sort({ createdAt: -1 }) // sort by creation date in descending order
      .skip(skipIndex)
      .limit(limit);

    const total = await MealNeedForm.countDocuments();

    res.status(200).json({
      mealForms,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

exports.getSingleMealFormById = catchAsyncErrors(async (req, res) => {
  try {
    const singleMealForm = await MealNeedForm.findById(req.params.id);
    res.status(200).json(singleMealForm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.updateMealNeedForm = catchAsyncErrors(async (req, res) => {
  try {
    await MealNeedForm.findByIdAndUpdate(
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

exports.deleteMealNeedForm = catchAsyncErrors(async (req, res) => {
  try {
    await MealNeedForm.findByIdAndDelete(req.params.id);
    const userId = req.params.userId; // Assuming you have a middleware that sets the authenticated user in req.user
     await User.findByIdAndUpdate(userId, {
       $pull: { mealForms: req.params.id }
     });

    res.status(200).json({
      message: "Successfully deleted meal need form ",
    });
  } catch (error) {}
});

exports.approveMealNeedForm = catchAsyncErrors(async (req, res) => {
  try {
    await MealNeedForm.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          isApproved: true,
          ...req.body,
        },
      },
      { new: true }
    );

    res.status(200).json({
      message: "Successfully approved meal form",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});


exports.getUserMealForms = catchAsyncErrors(async(req,res) => {
  try {

    const user = await User.findById(req.params.userId).populate("mealForms")
    res.status(200).json({ mealForms : user.mealForms})
  } catch (error) {
    res.status(500).json({error : error.message})
  }
})


exports.getUserMealFormsLength = catchAsyncErrors(async(req,res) => {
  try {

    const user = await User.findById(req.params.userId)
    res.status(200).json({ length : user.mealForms.length})
  } catch (error) {
    res.status(500).json({error : error.message})
  }
})
