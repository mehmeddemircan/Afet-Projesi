//replace modelSchema,ModelName with whatever you want
var mongoose = require("mongoose");
const { ObjectId } = mongoose;
var brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  products: [
    {
      type: ObjectId,
      ref: "Product",
    },
  ],
  image : {
    type : String,
    required : true 
  }
});

var Brand = mongoose.model("Brand", brandSchema);
module.exports = Brand;
