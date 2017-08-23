const router = require('../routers');

module.exports = (app) => {
  app.use('/', router);

  app.use((req, res) => {
    res.status(404);
    res.json({title: '404'});
  });
};
