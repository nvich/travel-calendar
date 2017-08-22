const TravelModel = require('../../models/travel');

module.exports = (req, res) => {
  const user = 'undefined';
  TravelModel.findById(req.params.id, (err, travel) => {
    if(err) {
      res.send(err);
    }
    travel.name = req.body.name;

    travel.save((err) => {
      if(err) {
        res.send(err);
      }
      res.render('admin/travels/travel', {title: 'Viagem', user: user, message: 'Viagem atualizada'});
    });
  });
};
