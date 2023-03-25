//replace modelSchema,ModelName with whatever you want
var mongoose = require("mongoose");
// Define schema for location data
const { ObjectId } = mongoose;

const locationSchema = new mongoose.Schema(
  {
    userId: { type: ObjectId, ref: "User", required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  { timestamps: true }
);

// Define model for location data
const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
