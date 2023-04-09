//replace modelSchema,ModelName with whatever you want
var mongoose = require('mongoose');

var clothingNeedFormSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    clothingItems: [
        {
            productCategory : {
                type : String,
                required: true,
                enum: ["Sweatshirt", "Pantolon", "Pjima","Eşofman","Ayakkabı"],
                
            },
            productSize : {
                type : String,
                required : true ,
            },
            gender : {
                type : String , 
                required : true 
            },
            quantity : {
                type : Number ,
                required : true,
            }
        }

    ],
    additionalInfo: {
        type: String,
    }
    //isApproved 
},{timestamps : true });

var ClothingNeedForm = mongoose.model('ClothingNeedForm', clothingNeedFormSchema);
module.exports = ClothingNeedForm;