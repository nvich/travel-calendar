const TravelModel = require('../../models/travel');

module.exports = (req, res) => {
  TravelModel.find({}, (err, travels) => {
    res.json(travels);
  });
};
