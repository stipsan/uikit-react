import { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PropTypes from 'prop-types'

import Icon from '../Icon'

export default class NotifyMesssage extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.string,
    isSticky: PropTypes.bool,
    timeout: PropTypes.number,
    type: PropTypes.oneOf(['info', 'success', 'danger', 'warning', 'primary', false]),
    onClick: PropTypes.func, // eslint-disable-line react/require-default-props
  }

  static defaultProps = {
    icon: '',
    isSticky: false,
    timeout: 3000,
    type: false,
  }

  state = {
    isOpen: false,
  }

  componentDidMount() {
    setTimeout(this.openNotification, 100)

    if (this.props.timeout && !this.props.isSticky) {
      setTimeout(this.handleClose, this.props.timeout)
    }
  }

  openNotification = () => this.setState({ isOpen: true })

  handleClose = () => {
    this.setState({ isOpen: false }, () => setTimeout(() => this.setState({ isClosed: true }), 300))
  }

  render() {
    const { children, type, icon, onClick } = this.props
    const className = cx('uk-notification-message', {
      'uk-notification-message-info': type === 'info',
      'uk-notification-message-success': type === 'success',
      'uk-notification-message-danger': type === 'danger',
      'uk-notification-message-warning': type === 'warning',
      'uk-notification-message-primary': type === 'primary',
    })
    const styles = [
      { marginTop: '-64px' },
      { marginTop: '0px' },
    ]

    if (this.state.isClosed) {
      return false
    }

    const body = icon ? (
      <div onClick={onClick}>
        <Icon icon={icon} />
        &nbsp;
        {children}
      </div>
    ) : (
      <div onClick={onClick}>
        {children}
      </div>
  )

    return (
      <div
        className={className}
        style={{ overflow: 'hidden', transition: 'margin ease-out 300ms', ...styles[this.state.isOpen ? 1 : 0] }}
      >
        <Icon className="uk-notification-close uk-close" component="a" icon="close-icon" onClick={this.handleClose} />
        {body}
      </div>
    )
  }
}
