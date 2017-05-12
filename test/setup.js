global.React = require('react')

// eslint-disable-next-line no-console
const error = console.error
// eslint-disable-next-line no-console
console.error = (warning, ...args) => {
  if (/(Invalid prop|Failed prop type)/.test(warning)) {
    throw new Error(warning)
  }
  error.apply(console, [warning, ...args])
}
