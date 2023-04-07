//replace modelSchema,ModelName with whatever you want
var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
var ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 64,
      text: true,
    },
    slug: {
      type: String,
      unique: true,

      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      unique: true,
      required: true,
      maxlength: 2000,
      text: true,
    },

    category: {
      type: ObjectId,
      ref: "Category",
    },
    subs: [
      {
        type: ObjectId,
        ref: "SubCategory",
      },
    ],
    quantity: Number,
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
  },
  { timestamps: true }
);

var Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
