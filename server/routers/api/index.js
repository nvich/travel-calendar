const express = require('express');
const router  = express.Router();

// API routers
require('./travels')(router);

module.exports = router;
