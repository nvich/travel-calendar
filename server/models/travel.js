const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
  name: { type: String, required: '{PATH} is required!'}
},
{
  collection: 'travels',
  versionKey: false
});

module.exports = mongoose.model('travels', travelSchema);
