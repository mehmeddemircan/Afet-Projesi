//replace modelSchema,ModelName with whatever you want
var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
var shelterProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
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
    category: {
      type: String,
      enum: ["Ev", "Hotel"], // Restrict values to 'house' or 'hotel'
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 1,
    },
    images:  [
      {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    ],
    roomNumber: {
      type: String,
      validate: {
        validator: function (roomNumber) {
          // Only require room number if category is 'house'
          return this.category === "Ev" ? roomNumber.length > 0 : true;
        },
        message: "Room number is required for house category",
      },
    },
  },
  { timestamps: true }
);

var ShelterProduct = mongoose.model("ShelterProduct", shelterProductSchema);
module.exports = ShelterProduct;
