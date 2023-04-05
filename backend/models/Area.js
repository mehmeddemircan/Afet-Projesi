//replace modelSchema,ModelName with whatever you want
var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const priorityOptions = ["Cok Acil", "Acil", "Normal", "Acil Degil"];
const disasterTypes = ["Deprem","Sel","Heyelan","Tsunami"]
var AreaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    disaster_type : {
      type : String,
      enum : disasterTypes,
      requrired : true ,
      default : "Deprem"
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
        priorityOrder: {
          type: String,
          enum: priorityOptions,
          required: true,
          default: "Normal",
        },
      },
    ],
    requrired_people: [
      {
        Person: {
          type: ObjectId,
          ref: "Person",
        },
        quantity: Number,
        priorityOrder: {
          type: String,
          enum: priorityOptions,
          required: true,
          default: "Normal",
        },
      },
    ],
  },
  { timestamps: true }
);

var Area = mongoose.model("Area", AreaSchema);
module.exports = Area;
