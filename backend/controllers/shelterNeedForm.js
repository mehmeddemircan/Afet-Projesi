const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ShelterNeedForm = require("../models/ShelterNeedForm");


exports.createShelterNeedForm = catchAsyncErrors(async(req,res) => {
    try {

        await ShelterNeedForm.create(req.body)
        res.status(200).json({message : "Successfully sent it "})


    } catch (error) {
        res.status(500).json(error)
    }
})


exports.getAllShelterNeedForm = catchAsyncErrors(async (req, res) => {
    const page = parseInt(req.query.page) || 1; // default to page 1
    const limit = parseInt(req.query.limit) || 10; // default to 10 items per page
    const skipIndex = (page - 1) * limit;
  
    try {
      const shelterForms = await ShelterNeedForm.find().populate('cityOptions','_id name')
        .sort({ createdAt: -1 }) // sort by creation date in descending order
        .skip(skipIndex)
        .limit(limit);
  
      const total = await ShelterNeedForm.countDocuments();
  
      res.status(200).json({
        shelterForms,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  exports.getShelterNeedFormById = catchAsyncErrors(async (req, res) => {
    try {
      const shelterNeedForm = await ShelterNeedForm.findById(req.params.id);
  
      res.status(200).json(shelterNeedForm);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  exports.updateShelterNeedForm = catchAsyncErrors(async (req, res) => {
    try {
      await ShelterNeedForm.findByIdAndUpdate(
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
  
  exports.deleteShelterNeedForm = catchAsyncErrors(async (req, res) => {
    try {
      await ShelterNeedForm.findByIdAndDelete(req.params.id);
  
      res.status(200).json({
        message: "Successfully deleted Shelter need form ",
      });
    } catch (error) {}
  });
  
  
  exports.approveShelterNeedForm = catchAsyncErrors(async(req,res) => {
    try {
         await ShelterNeedForm.findByIdAndUpdate(req.params.id, {
          $set : {
            isApproved : true ,
            ...req.body
          }
        },
          {new : true}
        )
  
        res.status(200).json({
          message : "Successfully approved Shelter form"
        })
  
    } catch (error) {
      res.status(500).json(error)    
    }
  })
  