import cx from 'classnames'
import { Component, PropTypes } from 'react'

export default class Button extends Component {

  static propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    danger: PropTypes.bool,
    large: PropTypes.bool,
    link: PropTypes.bool,
    mini: PropTypes.bool,
    primary: PropTypes.bool,
    small: PropTypes.bool,
    success: PropTypes.bool,
  }

  static defaultProps = {
    type: 'button',
    active: false,
    primary: false,
    success: false,
    danger: false,
    link: false,
    mini: false,
    small: false,
    large: false,
    className: '',
  }

  render() {
    const {
      active,
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
      'uk-active': active,
    })

    return (
      <button {...other} className={className} />
    )
  }
}
