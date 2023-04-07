//replace modelSchema,ModelName with whatever you want
var mongoose = require("mongoose");
const { ObjectId } = mongoose;
var brandProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: ObjectId,
    ref: "Brand",
    required: true,
  },
  
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  
});

var BrandProduct = mongoose.model("BrandProduct", brandProductSchema);
module.exports = BrandProduct;
