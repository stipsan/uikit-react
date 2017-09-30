import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import computedStyle from 'computed-style'

class Spinner extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  state = { size: 0, strokeWidth: 0 }

  componentDidMount() {
    this.setMeasurements()
  }

  componentWillUpdate() {
    this.setMeasurements()
  }

  setMeasurements = () => {
    this.setState({
      size: this.container.clientWidth,
      strokeWidth: parseFloat(computedStyle(this.circle, 'stroke-width')),
    })
  }

  setContainer = (node) => {
    if (node) {
      this.container = node
    }
  }

  setCircle = (node) => {
    if (node) {
      this.circle = node
    }
  }

  render() {
    const { className } = this.props
    const { size, strokeWidth } = this.state
    const viewBox = `0 0 ${size} ${size}`
    const diameter = Math.floor(size / 2)

    return (
      <span className={cx('uk-icon uk-spinner', className)} ref={this.setContainer}>
        <svg
          height={size}
          viewBox={viewBox}
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx={diameter}
            cy={diameter}
            fill="none"
            r={diameter - strokeWidth}
            ref={this.setCircle}
            stroke="#000"
          />
        </svg>
      </span>
    )
  }
}

export default Spinner
