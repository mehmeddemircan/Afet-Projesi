const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const User = require("../models/User");

exports.getAllUser = catchAsyncErrors(async (req, res) => {

    const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 4;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  if (endIndex < (await User.countDocuments().exec())) {
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
    results.users = await User.find()
      .limit(limit)
      .skip(startIndex)
      .exec();
    results.totalLength = (await User.find()).length;
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

exports.updateRoleUser = catchAsyncErrors(async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { role: "admin" },
      { new: true }
    );

    res.status(200).json({
        updatedUser,
        message : "Successfully changed role , updated as admin"
    });
  } catch (error) {
    res.status(500).json(error);
  }
});


exports.userSearchQuery = async (req, res) => {

    try {
      const searchQuery = req.query.name;
      const users = await User.find({ name: { $regex: searchQuery, $options: 'i' } });
      res.json({
        users,
        message : "Successfully searched"
      });
    } catch (error) {
      res.status(500).send({ message: 'Error searching users' });
    }

};
