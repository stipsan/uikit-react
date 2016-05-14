module.exports = {
  path: 'close',

  getComponents (cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/close'))
    })
  }
}