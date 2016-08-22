import cx from 'classnames'
import { PropTypes } from 'react'

const Input = ({
  blank,
  className: customClassName,
  danger,
  large,
  small,
  success,
  ...other,
}) => {
  const className = cx(customClassName, {
    'uk-form-blank': blank,
    'uk-form-danger': danger,
    'uk-form-large': large,
    'uk-form-small': small,
    'uk-form-success': success,
  })
  return (
    <input {...other} className={className} />
  )
}

Input.propTypes = {
  blank: PropTypes.bool,
  className: PropTypes.string,
  danger: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  success: PropTypes.bool,
}

export default Input
