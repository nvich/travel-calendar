const express  = require('express');
const proxy = require('proxy-middleware');
const url = require('url');
const mongoose = require('mongoose');
const app = express();

if(process.env.NODE_ENV === 'development'){
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const config = require('./internals/webpack/webpack.dev.config');

  app.use('/css', proxy(url.parse('http://localhost:3001/css')));
  app.use('/js', proxy(url.parse('http://localhost:3001/js')));

  new WebpackDevServer(webpack(config), {
    contentBase: './',
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: { colors: true }
  }).listen(3001, () => {});
}

// ENVIRONMENT CONFIG
const envConfig = require('./server/config/env');

mongoose.connect(envConfig.db);

// EXPRESS CONFIG
require('./server/config/express')(app);
// ROUTES
require('./server/config/routers')(app);

// Start server
app.listen(envConfig.port, () => {
  // console.log('Server listening on port ' + envConfig.port);
});
