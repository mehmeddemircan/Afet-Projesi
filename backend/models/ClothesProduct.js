//replace modelSchema,ModelName with whatever you want
var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
var clothesProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // description: {
  //   type: String,
  //   required: true,
  // },
  brand: {
    type: ObjectId,
    ref: "Brand",
    required: true,
  },

  gender: {
    type: String,
    required: true,
    enum: ["Erkek", "Kadın", "Unisex"], // define your enum values here
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

var ClothesProduct = mongoose.model("ClothesProduct", clothesProductSchema);
module.exports = ClothesProduct;
