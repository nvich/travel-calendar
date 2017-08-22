const TravelModel = require('../../models/travel');

module.exports = (req, res) => {
  TravelModel.findById(req.params.id, (err, travel) => {
    if (err) {
      res.send(err);
    }
    res.render('admin/travels/travel', {title: 'Viagem', travel: travel});
  });
};
