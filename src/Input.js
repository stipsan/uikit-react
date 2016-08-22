import cx from 'classnames'
import { PropTypes } from 'react'

const Input = ({
  danger,
  success,
  blank,
  large,
  small,
  className: customClassName,
  ...other,
}) => {
  const className = cx(customClassName, {
    'uk-form-danger': danger,
    'uk-form-success': success,
    'uk-form-blank': blank,
    'uk-form-large': large,
    'uk-form-small': small,
  })
  return (
    <input {...other} className={className} />
  )
}

Input.propTypes = {
  danger: PropTypes.bool,
  success: PropTypes.bool,
}

export default Input
