import cx from 'classnames'
import { PropTypes } from 'react'

const Input = ({
  blank,
  className: customClassName,
  danger,
  large,
  small,
  success,
  width,
  ...other,
}) => {
  const className = cx(customClassName, {
    'uk-form-blank': blank,
    'uk-form-danger': danger,
    'uk-form-large': large,
    'uk-form-small': small,
    'uk-form-success': success,
    'uk-width-1-1': width === 'full',
    'uk-form-width-large': width === 'large',
    'uk-form-width-medium': width === 'medium',
    'uk-form-width-small': width === 'small',
    'uk-form-width-mini': width === 'mini',
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
  width: PropTypes.oneOf(['full', 'large', 'medium', 'small', 'mini']),
}

export default Input
