const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// Handle requests for sharing location data
exports.shareLocation = catchAsyncErrors(async(req, res) => {
    const userId = req.query.userId;
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;
  
    // Save location data to database
    const location = new Location({ userId, latitude, longitude });
     await location.save();
  
    res.send('Location data saved successfully');
  });
  
  // Handle requests for retrieving location history
 exports.locationHistory = catchAsyncErrors( async (req, res) => {
    const userId = req.query.userId;
  
    // Retrieve location history from database
    const history = await Location.find({ userId }).sort({ timestamp: -1 });
    res.send(history);
  });
  