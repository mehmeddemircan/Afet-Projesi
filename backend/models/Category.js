//replace modelSchema,ModelName with whatever you want
var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
      minlength: [2, "Too short"],
      maxlength: [32, "Too long"],
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },

    subs: [
      {
        sub: {
          type: ObjectId,
          ref: "SubCategory",
        },
      },
    ],
  },
  { timestamps: true }
);
var Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
