import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

export class Button extends Component {

  static propTypes = {
    type: PropTypes.string,
    primary: PropTypes.bool,
    success: PropTypes.bool,
    danger: PropTypes.bool,
    link: PropTypes.bool,
    mini: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func,
    ]),
  }

  static defaultProps = {
    type: 'button',
    primary: false,
    success: false,
    danger: false,
    link: false,
    mini: false,
    small: false,
    large: false,
    disabled: false,
    className: '',
    onClick: false,
  }

  state = { isActive: false }

  handleClick = () => {
    if (!this.props.disabled) {
      this.setState({ isActive: !this.state.isActive })
    }
  }

  render() {
    const props = this.props
    const className = classNames('uk-button', props.className, {
      'uk-button-primary': props.primary,
      'uk-button-success': props.success,
      'uk-button-danger': props.danger,
      'uk-button-link': props.link,
      'uk-button-mini': props.mini,
      'uk-button-small': props.small,
      'uk-button-large': props.large,
      'uk-active': this.state.isActive,
    })

    return (
      <button {...props} onClick={this.props.onClick || this.handleClick} className={className} />
    )
  }
}
