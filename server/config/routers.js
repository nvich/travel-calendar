const router = require('../routers/index');

module.exports = (app) => {
  app.use('/', router);

  app.use((req, res) => {
    res.status(404);
    res.render('404/index', {title: '404'});
  });
};
