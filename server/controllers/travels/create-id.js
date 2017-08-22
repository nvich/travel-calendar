const TravelModel = require('../../models/travel');

module.exports = (req, res) => {
  const travel = new TravelModel();

  travel.name = req.body.name;

  travel.save((err, travel) => {
    if(err) {
      res.send(err);
    }
    res.render('admin/travels/cadastre', {title: 'Viagens', travel: travel});
  });
};
