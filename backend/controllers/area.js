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
    const areas = await Area.find()
      .populate("requrired_products.Product", "_id title description")
      .populate("requrired_people.Person", "_id name");
    res.status(200).json(areas);
  } catch (error) {
    res.status(500).json(error);
  }
});

exports.getSingleArea = catchAsyncErrors(async (req, res) => {
  try {
    const area = await Area.findById(req.params.id)
      .populate("requrired_products.Product", "_id title description")
      .populate("requrired_people.Person", "_id name")
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
      message: "Area successfully deleted",
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
      priorityOrder: req.body.priorityOrder,
    };
    // Create a new RequiredProduct document

    // Add the new RequiredProduct to the requirement's required_products array
    area.requrired_products.push(newRequiredProduct);

    // Save the requirement
    await area.save();

    // Return the updated requirement
    res.json({
      message: "Successfully added to area",
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

exports.getRequriredProducts = catchAsyncErrors(async (req, res) => {
  try {
    const area = await Area.findById(req.params.id).populate(
      "requrired_products.Product"
      
    );
    const requrired_products = area.requrired_products;
    res.status(200).json(requrired_products);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// POST /areas/:areaId/add-product
exports.addRequriredPersonToRequriment = catchAsyncErrors(async (req, res) => {
  try {
    // Find the requirement by ID
    const area = await Area.findById(req.params.areaId);
    if (!area) {
      return res.status(404).send("area not found");
    }

    const newRequiredPerson = {
      Person: req.body.Person,
      quantity: req.body.quantity,
      priorityOrder: req.body.priorityOrder,
    };
    // Create a new RequiredProduct document

    // Add the new RequiredProduct to the requirement's required_products array
    area.requrired_people.push(newRequiredPerson);

    // Save the requirement
    await area.save();

    // Return the updated requirement
    res.json({
      message: "Successfully added person to area",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

exports.removePersonFromRequriredPeople = catchAsyncErrors(
  // Delete controller to remove product from required_products array
  async (req, res) => {
    try {
      const area = await Area.findById(req.params.id);
      if (!area) {
        return res.status(404).json({ message: "Area not found" });
      }

      // Remove product from required_products array
      area.requrired_people.pull({ _id: req.params.objectId });
      await area.save();

      res.json({ message: "Person removed from required people array" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    }
  }
);

exports.getRequriredPeople = catchAsyncErrors(async (req, res) => {
  try {
    const area = await Area.findById(req.params.id).populate(
      "requrired_people.Person",
      "_id name"
    );
    const requrired_people = area.requrired_people;
    res.status(200).json(requrired_people);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

exports.getFilterQueryForArea = catchAsyncErrors(async (req, res) => {
  // Controller function to filter areas based on required_products
  try {
    const priorityOrders = req.query.priorityOrders; // Get an array of priorityOrder values from the query parameter
    const areas = await Area.find()
      .populate("requrired_products.Product", "_id title description")
      .populate("requrired_people.Person", "_id name"); // Retrieve all areas from the database
    let filteredAreas = areas;
    if (priorityOrders) {
      filteredAreas = areas.filter((area) => {
        // Filter the required_products array of each area to only include products with priorityOrder values in the priorityOrders array
        area.requrired_products = area.requrired_products.filter((product) =>
          priorityOrders.includes(product.priorityOrder)
        );
        return area.requrired_products.length > 0; // Only include areas that have at least one product with a priorityOrder value in the priorityOrders array
      });
    }
    res.json(filteredAreas);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" }); // Return an error response if there is an issue with the database query
  }
});

exports.getFilterIncludesProductForArea = catchAsyncErrors(async (req, res) => {
  try {
    const filters = req.query.filters; // Get an array of priorityOrder values from the query parameter
    const areas = await Area.find()
      .populate("requrired_products.Product", "_id title description")
      .populate("requrired_people.Person", "_id name");
    let filteredAreas = areas;
    if (filters) {
      filteredAreas = areas.filter((area) => {
        // Filter the required_products array of each area to only include products with priorityOrder values in the priorityOrders array

        area.requrired_products = area.requrired_products.filter((product) =>
          filters.includes(product.Product.title)
        );
        return area.requrired_products.length > 0; // Only include areas that have at least one product with a priorityOrder value in the priorityOrders array
      });
    }
    res.json(filteredAreas);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" }); // Return an error response if there is an issue with the database query
  }
});
