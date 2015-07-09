var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {

  debug: true,

  devtool: 'source-map',

  entry: {
      vendor: ['babel-core/external-helpers'],
      app: ['./src/app/app.js']
    },

  output: {
    path: path.join(__dirname, "dist"),
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
      'app': process.cwd() + '/src/app'
    }
  },
  
  resolveLoader: {
      root: [
        path.join(__dirname, "node_modules")
      ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        
        // filename: "vendor.js"
        // (Give the chunk a different name)

        minChunks: Infinity,
        // (with more entries, this ensures that no other module
        //  goes into the vendor chunk)
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]

};
