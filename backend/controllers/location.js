const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Location = require("../models/Location");

// Handle requests for sharing location data
exports.shareLocation = catchAsyncErrors(async (req, res) => {
  const userId = req.query.userId;
  const latitude = req.query.latitude;
  const longitude = req.query.longitude;

  // Check if location data for the user already exists
  const existingLocation = await Location.findOne({ userId });

  if (existingLocation) {
    // Update the existing location data
    existingLocation.latitude = latitude;
    existingLocation.longitude = longitude;
    await existingLocation.save();
  } else {
    // Save location data to database
    const location = new Location({ userId, latitude, longitude });
    await location.save();
  }

  res.status(200).json({
    message: "Location data saved successfully",
  });
});

// Handle requests for retrieving location history
exports.locationHistory = catchAsyncErrors(async (req, res) => {
  const userId = req.query.userId;

  // Retrieve location history from database
  const history = await Location.find({ userId }).sort({ timestamp: -1 });
  res.send(history);
});

exports.getAllLocations = catchAsyncErrors(async (req, res) => {
  const locations = await Location.find().populate("userId", "_id name email");
  res.status(200).json(locations);
});

exports.deleteUserLocations = catchAsyncErrors(async (req, res) => {
  const userId = req.params.userId;

  // Find all locations associated with the user ID
  const locations = await Location.find({ userId });

  if (!locations || locations.length === 0) {
    return res.status(404).json({
      message: "No locations found for user",
    });
  }

  // Delete all locations associated with the user ID
  await Location.deleteMany({ userId });

  res.status(200).json({
    message: `Locations deleted successfully for user ${userId}`,
  });
});

exports.updateLiveLocation = async (req, res, next) => {
  const { latitude, longitude } = req.body;
  const userId  = req.params.userId
  try {
    const user = await Location.findOneAndUpdate(
      { userId },
      {
        latitude,
        longitude,
      }
    );

    await user.save();

    res.status(200).json({
      success: true,
      message: "Live location updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to update live location",
    });
  }
};

exports.findLocationsByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const locations = await Location.find({ userId }).populate(
      "userId",
      "_id name email"
    );
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to find locations",
    });
  }
};
