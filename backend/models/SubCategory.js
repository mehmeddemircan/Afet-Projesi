const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema
const SubCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true,'Name is required'],
        minlength: [2,"Too short"],
        maxlength : [32,"Too long"]


    },
 
    slug: {
        type: String,
        unique: true ,
        lowercase: true ,
        index: true 
    },
  

},{timestamps: true});

var SubCategory = mongoose.model('SubCategory', SubCategorySchema);
module.exports = SubCategory;