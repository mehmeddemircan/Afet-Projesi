//replace modelSchema,ModelName with whatever you want
var mongoose = require("mongoose");
const User = require("./User");
const { ObjectId } = mongoose.Schema;
var taskSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      maxlength: 500,
    },
    // assignedTo: {
    //   type: ObjectId,
    //   ref: 'User',
    // },
    dueDate: {
      type: Date,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    city: {
      type : ObjectId,
      ref : 'City'
    },
    location: {
      lat: {
        type: String,
      },
      lng: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

var Task = mongoose.model("Task", taskSchema);

module.exports = Task;
