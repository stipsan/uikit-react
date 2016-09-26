import cx from 'classnames'
import { Component, PropTypes, createElement } from 'react'

export default class Dropdown extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    delay: PropTypes.number.isRequired,
    mode: PropTypes.oneOf(['hover', 'click']).isRequired,
    remainTime: PropTypes.number.isRequired,
    className: PropTypes.string,
    component: PropTypes.node,
  }

  static defaultProps = {
    mode: 'hover',
    remainTime: 800,
    delay: 0,
    component: 'div',
    className: 'uk-button-dropdown',
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
    const className = cx(this.props.className, {
      'uk-open': this.state.isOpen,
    })
    const DropdownProps = {
      'aria-expanded': this.state.isOpen,
      'aria-haspopup': true,
      className,
      onClick: this.props.mode === 'click' && this.handleClick,
      onMouseEnter: this.props.mode === 'hover' && this.handleMouseEnter,
      onMouseLeave: this.props.mode === 'hover' && this.handleMouseLeave,
      children: this.props.children,
    }
    return (
      createElement(this.props.component, DropdownProps)
    )
  }
}
