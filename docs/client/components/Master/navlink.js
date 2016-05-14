import { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class NavLink extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    disabled: PropTypes.bool,
    disabledClassName: PropTypes.string.isRequired,
    params: PropTypes.object,
    query: PropTypes.object,
    to: PropTypes.object,
  }

  static defaultProps = {
    disabled: false,
    disabledClassName: 'uk-text-muted uk-link-muted tm-link-muted',
  }

  render() {
    const { disabled, disabledClassName, ...other } = this.props

    if (disabled) {
      return <li><a
        {...other}
        className={disabledClassName}
        title="Coming soon…"
        style={{ cursor: 'not-allowed', backgroundColor: 'transparent' }}
                 /></li>
    }

    const { router } = this.context
    const isActive = router.isActive(this.props.to, this.props.params, this.props.query)
    const className = isActive ? 'uk-active' : ''

    return <li className={className}><Link {...other} /></li>


  }
}
