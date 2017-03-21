import { Component, PropTypes } from 'react'

export default class Icon extends Component {

  static propTypes = {
    icon: PropTypes.string.isRequired,
    load: PropTypes.func.isRequired,
    ratio: PropTypes.number.isRequired,
    // @TODO custom viewBox validator
    viewBox: PropTypes.string.isRequired,
  }

  static defaultProps = {
    ratio: 1,
    viewBox: '0 0 20 20',
  }

  render() {
    // @TODO parse icon size from viewbox
    const height = 20
    const width = 20

    const { ratio, viewBox } = this.props

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height * ratio}
        width={width * ratio}
      >
        <line fill="none" stroke="#000" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13" />
        <line fill="none" stroke="#000" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13" />
      </svg>
    )
  }
}
