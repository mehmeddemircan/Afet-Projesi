//replace modelSchema,ModelName with whatever you want
var mongoose = require('mongoose');
const Country = require('./Country');
const {ObjectId} = mongoose.Schema
var citySchema = new mongoose.Schema({
    name: {
        type: String,
        required : true 
    },
    country: {
            type : ObjectId,
            ref  : 'Country',
            required : true 
    },
   
});

var City = mongoose.model('City', citySchema);

// pre-hook middleware function to remove city from the country's list of cities
citySchema.pre('remove', async function(next) {
    try {
      const country = await Country.findById(this.country);
      if (country) {
        country.cities.pull(this._id);
        await country.save();
      }
      next();
    } catch (error) {
      next(error);
    }
  });
  
module.exports = City;