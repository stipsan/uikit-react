import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

export default class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    delay: PropTypes.number,
    mode: PropTypes.oneOf(['hover', 'click']),
    pos: PropTypes.oneOf([
      'bottom-left',
      'bottom-center',
      'bottom-right',
      'top-left',
      'top-center',
      'top-right',
      'left-top',
      'left-center',
      'left-bottom',
      'right-top',
      'right-center',
      'right-bottom',
    ]),
    offset: PropTypes.number,
    remaintime: PropTypes.number,
    justify: false,
    hoverDelayIdle: PropTypes.number,
    preventflip: PropTypes.bool,
    label: PropTypes.string.isRequired,
  }

  static defaultProps = {
    mode: 'hover',
    pos: 'bottom-left',
    offset: 0,
    remaintime: 800,
    justify: false,
    hoverDelayIdle: 250,
    preventflip: false,
    delay: 0,
    boundary: window,
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
    if (this.props.remaintime) {
      this.leaveTimeout = setTimeout(() => {
        this.setState({ isOpen: false })
      }, this.props.remaintime)
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
