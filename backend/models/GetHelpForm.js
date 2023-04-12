const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const urgencyOptions = ["Kritik", "Orta", "Normal"];
const GetHelpFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    minlength: 10,
  },
  numberOfPerson: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  urgency: {
    type: String,
    enum: urgencyOptions,
    required: true,
    default: "Normal",
  },
  location: {
    lat: {
      type: String,
    },
    lng: {
      type: String,
    },
  },
  infoAboutPhysical: {
    type: String,
  },
  //   priorityOrder
  // infoaboutphysical
  category: {
    type: ObjectId,
    ref: "FormCategory",
    required: true,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },

});

var GetHelpForm = mongoose.model("GetHelpForm", GetHelpFormSchema);
module.exports = GetHelpForm
