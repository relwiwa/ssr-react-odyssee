const webpackMerge = require('webpack-merge');
const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

const webpackConfigCommon = require('./webpack.config.common');

const webpackConfigServer = webpackMerge([
  {
    target: 'node',
    mode: 'production',
    plugins: [],
    // entry point for server application
    entry: './express-server/server.js',

    // where to put the generated output file
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../', 'express-server', 'build-server'),
    },

    /*  prevents webpack from packing imported libraries into
        the bundle on the server */
    externals: [webpackNodeExternals()],
    module: {
      rules: [
        {
          test: /\.s?css$/,
          loader: 'ignore-loader',
        },
      ],
    },
  },
]);

const x = webpackMerge(webpackConfigCommon, webpackConfigServer);
x.plugins = [];
module.exports = x;