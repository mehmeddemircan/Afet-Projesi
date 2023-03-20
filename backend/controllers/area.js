const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Area = require("../models/Area");

exports.createArea = catchAsyncErrors(async (req, res) => {
  const newArea = new Area(req.body);
  try {
    const savedArea = await newArea.save();
    res.status(200).json(savedArea);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.getAllArea = catchAsyncErrors(async (req, res) => {
  try {
    const areas = await Area.find().populate("requrired_products.Product");
    res.status(200).json(areas);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.getSingleArea = catchAsyncErrors(async (req, res) => {
  try {
    const area = await Area.findById(req.params.id)
      .populate("requrired_products.Product")
      .populate("requrired_people.Person")
      .exec();

    res.status(200).json(area);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.deleteArea = catchAsyncErrors(async (req, res) => {
  try {
    await Area.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message : 'Area successfully deleted'
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.updateArea = catchAsyncErrors(async (req, res) => {
  try {
    const updatedArea = await Area.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedArea);
  } catch (error) {
    res.status(500).json(error);
  }
});

// POST /areas/:areaId/add-product
exports.addRequriredProductToRequriment = catchAsyncErrors(async (req, res) => {
  try {
    // Find the requirement by ID
    const area = await Area.findById(req.params.areaId);
    if (!area) {
      return res.status(404).send("area not found");
    }

    const newRequiredProduct = {
      Product: req.body.Product,
      quantity: req.body.quantity,
    };
    // Create a new RequiredProduct document

    // Add the new RequiredProduct to the requirement's required_products array
    area.requrired_products.push(newRequiredProduct);

    // Save the requirement
    await area.save();

    // Return the updated requirement
    res.json({
      message : 'Successfully added to area'
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

exports.removeProductFromRequriredProducts = catchAsyncErrors(
  // Delete controller to remove product from required_products array
  async (req, res) => {
    try {
      const area = await Area.findById(req.params.id);
      if (!area) {
        return res.status(404).json({ message: "Area not found" });
      }

      // Remove product from required_products array
      area.requrired_products.pull({ _id: req.params.objectId });
      await area.save();

      res.json({ message: "Product removed from required products array" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    }
  }
);

exports.getRequriredProducts = catchAsyncErrors( async (req, res) => {
  try {
 
    const area = await Area.findById(req.params.id).populate('requrired_products.Product');
    const requrired_products = area.requrired_products;
    res.status(200).json(requrired_products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});
