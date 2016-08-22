import cx from 'classnames'
import { PropTypes } from 'react'

const Input = ({
  ...other,
}) => {
  return (
    <input {...other} />
  )
}

Input.propTypes = {
  danger: PropTypes.bool,
  success: PropTypes.bool,
}

export default Input
