/* eslint import/no-extraneous-dependencies: "off" */
/* eslint import/newline-after-import: "off" */

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const devServerHostName = process.env.DEV_SERVER_HOST_NAME || 'localhost'
const devServerPort = process.env.DEV_SERVER_PORT || '8080'

const entry = 'production' === process.env.NODE_ENV ? {
  client: [
    'babel-polyfill',
    './docs/client/index',
  ],
} : {
  client: [
    `webpack-dev-server/client?http://${devServerHostName}:${devServerPort}/`,
    'webpack/hot/dev-server',
    'babel-polyfill',
    './docs/client/index',
  ],
}

module.exports = {

  debug: true,

  devtool: 'production' === process.env.NODE_ENV ? 'source-map' : 'cheap-module-eval-source-map',

  entry,

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: `http://${devServerHostName}:${devServerPort}/`,
    hot: true,
    noInfo: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },

  output: {
    path: path.join(__dirname, 'docs', 'public'),
    filename: '[name].js',
    chunkFilename: '[id].[hash].bundle.js',
    publicPath: 'production' === process.env.NODE_ENV ?
                '/' : `http://${devServerHostName}:${devServerPort}/`,
  },

  module: {
    preLoaders: [
        { test: /\.json$/, loader: 'json' },
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]

}
