//replace modelSchema,ModelName with whatever you want
var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
var AreaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    coordinates: {
      longitude: Number,
      latitude: Number,
    },
    requrired_products: [
      {
        Product: {
          type: ObjectId,
          ref: "Product",
        },

        quantity: Number,
      },
    ],
    requrired_people: [
      {
        Person: {
          type: ObjectId,
          ref: "Person",
        },
        quantity: Number,
      },
    ],
  },
  { timestamps: true }
);

var Area = mongoose.model("Area", AreaSchema);
module.exports = Area;
