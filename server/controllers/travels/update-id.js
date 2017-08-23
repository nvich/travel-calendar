const TravelModel = require('../../models/travel');

module.exports = (req, res) => {
  TravelModel.findById(req.params.id, (err, travel) => {
    if(err) {
      return res.send(err);
    }
    travel.name = req.body.name;

    travel.save((err) => {
      if(err) {
        return res.send(err);
      }
      res.json({title: 'Viagem', travel: travel, message: 'Viagem atualizada'});
    });
  });
};
