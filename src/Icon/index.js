import PropTypes from 'prop-types'

import Default from './Default'
import Spinner from './Spinner'

const Icon = (props) => {
  switch (props.icon) {
    case 'spinner':
      return <Spinner {...props} />
    default:
      return <Default {...props} />
  }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
}

export default Icon
