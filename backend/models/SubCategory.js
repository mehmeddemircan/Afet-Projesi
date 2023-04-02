const mongoose = require("mongoose");
const Category = require("./Category");
const { ObjectId } = mongoose.Schema;
const SubCategorySchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

var SubCategory = mongoose.model("SubCategory", SubCategorySchema);

SubCategorySchema.pre("deleteOne", async function (next) {
  const subCategoryId = this.getQuery()["_id"]; // get the subcategory ID

  try {
    // remove the subcategory from the 'subs' array of all categories that reference it
    await Category.updateMany(
      { subs: subCategoryId },
      { $pull: { subs: subCategoryId } }
    );

    next();
  } catch (error) {
    next(error);
  }
});

module.exports = SubCategory;
