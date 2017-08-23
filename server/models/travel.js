const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
  title: { type: String, required: '{PATH} is required!'},
  local: { type: String, required: '{PATH} is required!'},
  startDate: { type: Date, required: '{PATH} is required!'},
  endDate: { type: Date, required: '{PATH} is required!'},
  formattedStartDate: { type: String, required: '{PATH} is required!'},
  formattedEndDate: { type: String, required: '{PATH} is required!'},
  budget: { type: Object, required: '{PATH} is required!'},
  users: { type: Object, required: '{PATH} is required!'},
  createAt: { type: Date, required: '{PATH} is required!'},
  createBy: { type: String, required: '{PATH} is required!'},
},
{
  collection: 'travels',
  versionKey: false
});

module.exports = mongoose.model('travels', travelSchema);
