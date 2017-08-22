const TravelModel = require('../../models/travel');

module.exports = (req, res) => {
  const travel = new TravelModel();

  travel.name = req.body.name;

  travel.save((err, travel) => {
    if(err) {
      return res.send(err);
    }
    res.json({ message: 'Travel created!' });
  });
};
