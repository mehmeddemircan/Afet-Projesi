//replace modelSchema,ModelName with whatever you want
var mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema
var shelterProductSchema = new mongoose.Schema({
    ObjectKey1: {
        type: String,
    },
    ObjectKey2: {
        type: String,
    },
    ObjectKey3: {
        type: String,
    },
    ObjectKey4: {
        type: String,
    },
    ObjectKey5: {
        type: String,
    },
});

var ShelterProduct = mongoose.model('ShelterProduct', shelterProductSchema);
module.exports = ShelterProduct;