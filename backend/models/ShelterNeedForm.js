//replace modelSchema,ModelName with whatever you want
var mongoose = require('mongoose');
const {ObjectId} = mongoose 
var shelterNeedFormSchema = new mongoose.Schema({
    userId : {
        type : ObjectId,
        ref : 'User',
        required : true 
    },
    name: {
        type: String,
        required: true
      },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    cityOptions : [
        {
            type : ObjectId,
            ref : 'City',
            required : true 
        }  
    ],
    checkinDate: {
        type: Date,
        required: true
    },
    checkoutDate: {
        type: Date,
        required: true
    },
    numberOfAdults: {
        type: Number,
        required: true
    },
    numberOfChildren: {
        type: Number,
        required: true
    },
    additionalInfo: {
        type: String,
        
    },
    isApproved : {
        type : Boolean,
        default  : false
    }
},{timestamps : true });

var ShelterNeedForm = mongoose.model('ShelterNeedForm', shelterNeedFormSchema);
module.exports = ShelterNeedForm;
