const express         = require('express');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');
const cors            = require('cors');

module.exports = (app, envConfig) => {
  app.use('/static', express.static('./public'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(methodOverride());
};
