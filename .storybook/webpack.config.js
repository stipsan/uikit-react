const path = require('path')

module.exports = {
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
