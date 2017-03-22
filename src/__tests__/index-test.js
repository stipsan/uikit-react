it('should export', () => {
  expect(Object.keys(require('../index'))).toMatchSnapshot()
})
