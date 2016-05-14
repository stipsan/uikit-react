module.exports = {
  path: 'components',

  getComponents (cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/components'))
    })
  }
}