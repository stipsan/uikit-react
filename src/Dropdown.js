import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

export default class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    onHover: PropTypes.bool,
  }

  static defaultProps = {
    type: 'button',
    disabled: false,
    className: '',
    onHover: false,
  }
  state = {
    isActive: false,
    mode: true,
    delay: 0,
  }

  handleMouseOver = () => {
    this.setState({ isActive: !this.state.isActive })
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
        onMouseOver={this.props.onHover && this.handleMouseOver}
        onClick={this.handleClick}
        data-uk-dropdown={this.state.mode || this.state.delay}
        aria-haspopup="true"
        aria-expanded={this.state.isActive}
      >
        {this.props.children}
      </div>
    )
  }
}
