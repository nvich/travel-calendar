const express  = require('express');
const mongoose = require('mongoose');
const app      = express();

// ENVIRONMENT CONFIG
const envConfig = require('./server/config/env');

mongoose.connect(envConfig.db);

// EXPRESS CONFIG
require('./server/config/express')(app, envConfig);

// ROUTES
require('./server/config/routers')(app);

// Start server
app.listen(envConfig.port, () => {
  // console.log('Server listening on port ' + envConfig.port);
});
