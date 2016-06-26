import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

export default class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    delay: PropTypes.number,
    mode: PropTypes.oneOf(['hover', 'click']),
    pos: PropTypes.string,
    // offset: PropTypes.number,
    // remaintime: PropTypes.number,
    // justify: false,
    // hoverDelayIdle: PropTypes.number,
    // preventflip: PropTypes.bool,
  }

  static defaultProps = {
    type: 'button',
    disabled: false,
    className: '',
    onMouseEnter: false,
    onMouseLeave: false,
    mode: 'hover',
    // pos: 'bottom-left',
    // offset: 0,
    // remaintime: 800,
    // justify: false,
    // hoverDelayIdle: 250,
    // preventflip: false,
  }

  state = {
    isActive: false,
    mode: true,
  }

  handleMouseEnter = () => {
    if (this.props.delay) {
      setTimeout(() => {
        this.setState({ isActive: true })
      }, this.props.delay)
    } else {
      this.setState({ isActive: true })
    }
  }
  handleMouseLeave = () => {
    this.setState({ isActive: false })
  }
  handleClick = () => {
    this.setState({ isActive: !this.state.isActive })
  }
  render() {
    const className = classNames('uk-button-dropdown', {
      'uk-open': this.state.isActive,
    })
    return (
      <div
        className={className}
        onMouseEnter={this.props.mode === 'hover' && this.handleMouseEnter}
        onMouseLeave={this.props.mode === 'hover' && this.handleMouseLeave}
        onClick={this.props.mode === 'click' && this.handleClick}
        aria-haspopup="true"
        aria-expanded={this.state.isActive}
      >
        {this.props.children}
      </div>
    )
  }
}
