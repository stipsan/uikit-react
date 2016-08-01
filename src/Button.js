import classNames from 'classnames'
import { Component, PropTypes } from 'react'

export default class Button extends Component {

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
    const {
      primary,
      success,
      danger,
      link,
      mini,
      small,
      large,
      className: customClassName,
      ...other,
    } = this.props
    const className = classNames('uk-button', customClassName, {
      'uk-button-primary': primary,
      'uk-button-success': success,
      'uk-button-danger': danger,
      'uk-button-link': link,
      'uk-button-mini': mini,
      'uk-button-small': small,
      'uk-button-large': large,
      'uk-active': this.state.isActive,
    })

    return (
      <button {...other} onClick={this.props.onClick || this.handleClick} className={className} />
    )
  }
}
