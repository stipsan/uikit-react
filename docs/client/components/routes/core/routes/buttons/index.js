module.exports = {
  path: 'buttons',

  getComponents (cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/buttons'))
    })
  }
}