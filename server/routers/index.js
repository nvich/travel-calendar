const express = require('express');
const router  = express.Router();

// home route
router.get('/', (req, res) => {
  res.json({title: 'Home'});
});

router.get('/admin', (req, res) => {
  res.json({title: 'Admin'});
});

require('./admin/travels')(router);

module.exports = router;
