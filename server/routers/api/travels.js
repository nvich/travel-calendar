const Travel = require('../../models/travel');

// Travels API
module.exports = (router) => {
  // get all travels
  router.get('/travels', (req, res) => {
    Travel.find({}, (err, travels) => {
      if (err) {
        res.send(err);
      }
      res.json(travels);
    });
  });
}
