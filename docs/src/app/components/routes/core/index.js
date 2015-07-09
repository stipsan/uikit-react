module.exports = {
  path: 'core',

  getChildRoutes (state, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./routes/buttons'),
        require('./routes/close'),
      ])
    })
  },

  getComponents (cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/core'))
    })
  }
}