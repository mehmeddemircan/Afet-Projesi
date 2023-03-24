const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const GetHelpForm = require("../models/GetHelpForm");

exports.createGetHelpForm = catchAsyncErrors(async (req, res) => {
  try {
    const form = new GetHelpForm(req.body);

    // Save the form to the database
    await form.save();
    res.status(201).json({
      success: true,
      message: "Successfully sent this form ",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});
// grouping by categoryId
exports.getHelpForms = catchAsyncErrors(async (req, res) => {
  try {
    const results = await GetHelpForm.aggregate([
      {
        $group: {
          _id: "$category",
          forms: {
            $push: {
              _id: "$_id",
              name: "$name",
              email: "$email",
              phoneNumber: "$phoneNumber",
              numberOfPerson: "$numberOfPerson",
              address: "$address",
              urgency: "$urgency",
              infoAboutPhysical: "$infoAboutPhysical",
            },
          },
        },
      },
    ]);

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.getFormsByCategoryId = catchAsyncErrors(async (req, res) => {
  try {
    const results = await GetHelpForm.find({ category: req.params.categoryId });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.searchForms = catchAsyncErrors(async (req, res) => {
  try {
    const { name, urgency, address } = req.query;

    const results = await GetHelpForm.find({category : req.params.categoryId});

    const filteredResults = results.filter((item) => {
      // Filter by name
      if (name && !item.name.includes(name)) {
        return false;
      }

      // Filter by urgency enum
      if (urgency && item.urgency !== urgency) {
        return false;
      }

      // Filter by address
      if (address && !item.address.includes(address)) {
        return false;
      }

      return true;
    });

    res.status(200).json(filteredResults);
  } catch (error) {
    res.status(500).json(error);
  }
});


exports.deleteHelpForm = catchAsyncErrors(async(req,res) => {

  try {
      await GetHelpForm.findByIdAndDelete(req.params.id)
      res.status(200).json({
        message : "Successfully deleted form"
      })

  } catch (error) {
    res.status(500).json(error)
  }

})

