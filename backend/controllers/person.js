const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Person = require("../models/Person");

// roller
exports.createNewPersonType = catchAsyncErrors(async (req, res, next) => {

    try {
      
      const { name } = req.body;
  
  
      const _name = await Person.findOne({ name });
    
      if (_name) {
        res.status(400).json({
          success: false,
          error: "This person type already created",
        });
      }
    
      const person = await Person.create({
        name,
        
      })
      
      res.status(200).json({
    
        person,
      });
    } catch (error) {
      res.status(400).json({
       
        error: error
      })
    }
  
  });


  exports.getAllPersonType = catchAsyncErrors(async(req,res) => {
    try {
            const persontypes = await Person.find()

            res.status(200).json(persontypes)

    } catch (error) {
        res.status(500).json(error)
    }
  })

  exports.getSinglePersonType = catchAsyncErrors(async (req, res) => {
    try {
      const personType = await Person.findById(req.params.id)
       
  
      res.status(200).json(personType);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  exports.updatePersonType = catchAsyncErrors(async (req, res, next) => {
  
    const updated = await Person.findByIdAndUpdate(req.params.id,
        {$set : req.body},
      { new : true }
    );
  
    res.status(200).json({
        success: true ,
        updated
    })
  
  });
  exports.deletePersonType = catchAsyncErrors(async (req, res) => {
    try {
      await Person.findByIdAndDelete(req.params.id);
      res.status(200).json("Person type successfully deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  });