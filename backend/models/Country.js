//replace modelSchema,ModelName with whatever you want
var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
var countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cities: [
    {
      type: ObjectId,
      ref: "City",
    },
  ],
});

var Country = mongoose.model("Country", countrySchema);
module.exports = Country;
