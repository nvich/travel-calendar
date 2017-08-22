const TravelModel = require('../../models/travel');

module.exports = (req, res) => {
  const user = 'undefined';
  TravelModel.remove({
    _id: req.params.id
  }, (err, travel) => {
    if(err) {
      res.send(err);
    }
    res.render('admin/travels/travel', {title: 'Viagem', user: user, travel: travel, message: 'Viagem deletada'});
  });
};
