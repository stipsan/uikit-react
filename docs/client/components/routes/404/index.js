module.exports = {
  path: '*',

  getComponents (cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/404'))
    })
  }
}