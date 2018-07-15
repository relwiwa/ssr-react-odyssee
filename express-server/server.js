const express = require('express');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import SSROdyssee from '../react-client/components/SSROdyssee';

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
  app.use('/static-files', express.static(path.join(__dirname, 'Workspace', 'ssr-odyssee', 'express-server', 'build')));
  app.get('*', (req, res) => {
    const renderedComponent = renderToString(
      <StaticRouter location={req.url} context={{}}>
        <SSROdyssee />
      </StaticRouter>
    );

    fs.readFile('./express-server/build/index.html', 'utf8', (err, htmlData) => {
      if (err) {
          console.error('err', err);
          return res.status(404).end()
      }

      res.send(htmlData.replace('<div id="root"></div>', `<div id="root">${renderedComponent}</div>`));
    });
  });
 }

app.listen(port, () => console.log('Listening'));
