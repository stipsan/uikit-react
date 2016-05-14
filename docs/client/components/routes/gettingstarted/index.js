module.exports = {
  path: 'getting-started',

  getComponents (cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/gettingstarted'))
    })
  }
}