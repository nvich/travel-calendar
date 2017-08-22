const TravelModel = require('../../models/travel');

module.exports = (req, res) => {
  TravelModel.find({}, (err, travels) => {
    res.render('admin/travels/travels', {title: 'Viagens', travels: travels});
  });
};
