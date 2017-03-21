import { Component, PropTypes } from 'react'


export default class Icon extends Component {

  // @TODO document
  static loader = false

  static defaultProps = {
    loader: Icon.loader,
  }

  render() {
    return (<span />)
  }
}
