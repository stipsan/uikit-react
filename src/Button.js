import cx from 'classnames'
import { Component, PropTypes } from 'react'

export default class Button extends Component {

  static propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    danger: PropTypes.bool,
    large: PropTypes.bool,
    link: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    small: PropTypes.bool,
    text: PropTypes.bool,
  }

  static defaultProps = {
    type: 'button',
    active: false,
    primary: false,
    danger: false,
    link: false,
    small: false,
    large: false,
    className: '',
    secondary: false,
    text: false,
  }

  render() {
    const {
      active,
      primary,
      danger,
      link,
      small,
      large,
      secondary,
      text,
      className: customClassName,
      ...other
    } = this.props
    const className = cx('uk-button', customClassName, {
      'uk-button-default': !primary && !secondary && !danger && !text && !link,
      'uk-button-primary': primary,
      'uk-button-secondary': secondary,
      'uk-button-danger': danger,
      'uk-button-text': text,
      'uk-button-link': link,
      'uk-button-small': small,
      'uk-button-large': large,
      'uk-active': active,
    })

    return (
      <button {...other} className={className} />
    )
  }
}
