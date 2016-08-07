import cx from 'classnames'
import { Component, PropTypes } from 'react'

export default class Dropdown extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    delay: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(['hover', 'click']).isRequired,
    remainTime: PropTypes.number.isRequired,
    className: PropTypes.string,
  }

  static defaultProps = {
    mode: 'hover',
    remainTime: 800,
    delay: 0,
  }

  state = {
    isOpen: false,
  }

  handleMouseEnter = () => {
    if (this.leaveTimeout) {
      clearTimeout(this.leaveTimeout)
    }
    if (this.props.delay) {
      setTimeout(() => {
        this.setState({ isOpen: true })
      }, this.props.delay)
    } else {
      this.setState({ isOpen: true })
    }
  }
  handleMouseLeave = () => {
    if (this.props.remainTime) {
      this.leaveTimeout = setTimeout(() => {
        this.setState({ isOpen: false })
      }, this.props.remainTime)
    } else {
      this.setState({ isOpen: false })
    }
  }
  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    const className = cx('uk-button-dropdown', {
      'uk-open': this.state.isOpen,
    })
    return (
      <div
        aria-expanded={this.state.isOpen}
        aria-haspopup="true"
        className={className}
        onClick={this.props.mode === 'click' && this.handleClick}
        onMouseEnter={this.props.mode === 'hover' && this.handleMouseEnter}
        onMouseLeave={this.props.mode === 'hover' && this.handleMouseLeave}
      >
        {this.props.children}
      </div>
    )
  }
}
