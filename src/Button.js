import cx from 'classnames'
import { Component, PropTypes } from 'react'

export default class Button extends Component {

  static propTypes = {
    className: PropTypes.string,
    danger: PropTypes.bool,
    disabled: PropTypes.bool,
    large: PropTypes.bool,
    link: PropTypes.bool,
    mini: PropTypes.bool,
    primary: PropTypes.bool,
    small: PropTypes.bool,
    success: PropTypes.bool,
    type: PropTypes.string,
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
    const className = cx('uk-button', customClassName, {
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
      <button {...other} className={className} onClick={this.props.onClick || this.handleClick} />
    )
  }
}
