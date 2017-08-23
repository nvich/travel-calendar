const TravelModel = require('../../models/travel');

module.exports = (req, res) => {
  TravelModel.remove({
    _id: req.params.id
  }, (err, travel) => {
    if(err) {
      return res.send(err);
    }
    res.json({travel: travel, message: 'Viagem deletada'});
  });
};
