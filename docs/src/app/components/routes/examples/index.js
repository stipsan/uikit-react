module.exports = {
  path: 'examples',

  getComponents (cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/examples'))
    })
  }
}