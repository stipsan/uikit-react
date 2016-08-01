import classNames from 'classnames'
import { Component, PropTypes } from 'react'

export default class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    delay: PropTypes.number.isRequired,
    mode: PropTypes.oneOf(['hover', 'click']).isRequired,
    remainTime: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
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
    const className = classNames('uk-button-dropdown', {
      'uk-open': this.state.isOpen,
    })
    return (
      <div
        className={className}
        onMouseEnter={this.props.mode === 'hover' && this.handleMouseEnter}
        onMouseLeave={this.props.mode === 'hover' && this.handleMouseLeave}
        onClick={this.props.mode === 'click' && this.handleClick}
        aria-haspopup="true"
        aria-expanded={this.state.isOpen}
      >
        {this.props.children}
      </div>
    )
  }
}
