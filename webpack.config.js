/* eslint import/no-extraneous-dependencies: "off" */
/* eslint import/newline-after-import: "off" */

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const purify = require('purifycss-webpack-plugin')

const devServerHostName = process.env.DEV_SERVER_HOST_NAME || 'localhost'
const devServerPort = process.env.DEV_SERVER_PORT || '8080'

let plugins = 'production' === process.env.NODE_ENV ? [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      unsafe: true,
      drop_console: true,
      warnings: false,
      pure_getters: true,
      unsafe_comps: true,
    },
    comments: false,
    mangle: {
      sort: true,
      toplevel: true,
      eval: true,
      properties: true,
    }
  }),
] : [
  new webpack.LoaderOptionsPlugin({
    debug: true
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  }),
]

plugins = plugins.concat(new ExtractTextPlugin('[chunkhash].css', {
  allChunks: true,
  disable: 'production' !== process.env.NODE_ENV,
}))

/**
 * JSX syntax is transpiled to React.createElement calls with babel, which is why devs
 * often do `import React from 'react'` even if `React` itself isn't used in the source.
 * it's also why variations like `import React, {Component, PropTypes} from 'react'`
 * is seen in the wild.
 * However, when modules can be inlined using `transform-react-inline-elements`
 * importing `React` isn't necessary as babel replaces the JSX with whatever
 * the React.createElement returns on the call-site, reducing bloat and laying the ground work
 * for tree shaking in webpack v2
 */
plugins = plugins.concat(new webpack.ProvidePlugin({
  React: 'react',
}))

const AssetsPlugin = require('assets-webpack-plugin')
plugins = plugins.concat(new AssetsPlugin({ filename: 'assets.json', path: __dirname }))

const entry = 'production' === process.env.NODE_ENV ? {
  app: [
    'babel-polyfill',
    './docs/client/index',
  ],
} : {
  app: [
    `webpack-dev-server/client?http://${devServerHostName}:${devServerPort}/`,
    'webpack/hot/dev-server',
    'babel-polyfill',
    './docs/client/index',
  ],
}

const cssnanoOptIn = 'zindex&normalizeUrl&discardUnused&mergeIdents&discardDuplicates&reduceIdents'
const importLoaders = '&importLoaders=4'

module.exports = {

  debug: true,

  devtool: 'production' === process.env.NODE_ENV ? 'source-map' : 'cheap-module-eval-source-map',

  entry,

  devServer: {
    contentBase: path.join(__dirname, 'docs', 'public'),
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
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.less$/, loader: ExtractTextPlugin.extract(
       'style',
       `css?${cssnanoOptIn}${importLoaders}!autoprefixer!less!uikit`,
        {
          publicPath: 'docs/public'
        }
     ) },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url?limit=1000&name=images/[hash].[ext]'
      }
    ],
  },

  plugins,

}
