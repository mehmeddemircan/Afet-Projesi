var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const FormCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
      minlength: [2, "Too short"],
      maxlength: [32, "Too long"],
    },
    parent: {
      type: ObjectId,
      ref: "FormCategory",
      default: null,
    },
  },
  { timestamps: true }
);
var FormCategory = mongoose.model("FormCategory", FormCategorySchema);
module.exports = FormCategory;
