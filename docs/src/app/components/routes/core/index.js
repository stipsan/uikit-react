module.exports = {
  path: 'core',

  getComponents (cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/core'))
    })
  }
}