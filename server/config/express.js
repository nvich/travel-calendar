const express         = require('express');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');
const cors            = require('cors');
const path            = require('path');

module.exports = (app) => {
  app.engine('ejs', require('ejs').__express);
  app.set('views', path.join(__dirname, '../../public'));
  app.set('view engine', 'ejs');

  app.use(express.static('public'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(methodOverride());
};
