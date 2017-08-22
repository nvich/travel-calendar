const TravelModel = require('../../models/travel');

module.exports = (req, res) => {
  TravelModel.findById(req.params.id, (err, travel) => {
    if (err) {
      return res.send(err);
    }
    res.json(travel);
  });
};
