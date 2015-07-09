var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {

  debug: true,

  devtool: 'inline-source-map',

  entry: {
      app: ['./src/app/app.js']
    },

  output: {
    path: 'docs',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ],
    noParse: /babel-core\/browser/,
  },

  resolve: {
    alias: {
      //'react-router$': process.cwd() + '/modules',
      //'react-router/lib': process.cwd() + '/modules'
    }
  },
  
  resolveLoader: {
      root: [
        path.join(__dirname, "node_modules")
      ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]

};
