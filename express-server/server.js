const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('../webpack-config/webpack.config.js')('development');
  webpackConfig.output.path = path.join(__dirname, './', 'express-server', 'build');
  webpackConfig.entry = path.join(__dirname, '../', 'react-client', 'index.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
}
else {
  app.use('/static-files', express.static(path.join(__dirname, 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
  })
}

app.listen(port, () => console.log('Listening'));
