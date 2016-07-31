const path = require('path')
const webpack = require('webpack')

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
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loaders: ['style', 'raw'],
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
}
