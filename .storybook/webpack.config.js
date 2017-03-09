const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  resolve: {
    root: path.join(__dirname, '..'),
    alias: {
      'uikit-react': 'src',
    },
  },
  postcss() {
    return [autoprefixer]
  },
  module: {
    loaders: [
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader',
      },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.svg$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
}
