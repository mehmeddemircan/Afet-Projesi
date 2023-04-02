const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Category = require("../models/Category");
const SubCategory = require("../models/SubCategory");
const slugify = require("slugify");
exports.createNewSubCategory = catchAsyncErrors(async (req, res, next) => {

    try {
      
      const { name } = req.body;
  
  
      const _sub = await SubCategory.findOne({ name });
    
      if (_sub) {
        res.status(400).json({
          success: false,
          error: "This sub category already created",
        });
      }
    
      const sub = await SubCategory.create({
          name,
          slug: slugify(name)
      })
      
      res.status(200).json({
    
        sub,
      });
    } catch (error) {
      res.status(400).json({
       
        error: error
      })
    }
  
  });
  exports.getAllSubCategory = catchAsyncErrors(async (req, res, next) => {
    const subs = await SubCategory.find({}).sort({ createdAt: -1 });
  
    res.status(200).json({
      subs,
    });
  });
  exports.getSingleSubCategory = catchAsyncErrors(async (req, res, next) => {
    const sub = await SubCategory.findOne({ slug: req.params.slug });
  
    res.status(200).json({
      sub,
    });
  });
  exports.updateSubCategory = catchAsyncErrors(async (req, res, next) => {
    const { name } = req.body;
  
    const _updated = await SubCategory.findOne({name})
  
    if (_updated) {
      res.status(400).json({
        success:false,
        error : 'This subcategory name already using '
      })
    }
  
    const updated = await SubCategory.findByIdAndUpdate(
        req.params.id,
      { name , slug: slugify(name) },
      { new : true }
    );
  
    res.status(200).json({
        success: true ,
        updated
    })
  
  });
  exports.deleteSubCategory = catchAsyncErrors(async (req, res, next) => {
    await SubCategory.findByIdAndDelete(req.params.id);
 
    res.status(200).json({
      message :  "Successfully deleted subcategory"
    });
  });

