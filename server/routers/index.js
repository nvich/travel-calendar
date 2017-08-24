const express = require('express');
const router  = express.Router();

router.get('/admin', (req, res) => {
  res.json({title: 'Admin'});
});

require('./admin/travels')(router);

router.get('*', (req, res) => {
  res.render('index', {});
});

module.exports = router;
