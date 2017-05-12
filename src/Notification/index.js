import { Component } from 'react'
import PropTypes from 'prop-types'
import Portal from 'react-portal'
import cx from 'classnames'

import NotifyMesssage from './NotifyMesssage'

export default class Notification extends Component {
  static propTypes = {
    notifications: PropTypes.arrayOf(PropTypes.object).isRequired,
    position: PropTypes.string,
  }

  static defaultProps = {
    className: 'uk-notification',
    notifications: [],
    position: 'top-center',
    type: 'primary',
  }

  state = {
    isOpened: false,
  }

  handleClick = () => {
    this.setState({
      isOpened: true,
    })
  }

  render() {
    const {
      position,
      notifications,
    } = this.props

    const className = cx('uk-notification', {
      'uk-notification-top-center': position === 'top-center',
      'uk-notification-top-left': position === 'top-left',
      'uk-notification-top-right': position === 'top-right',
      'uk-notification-bottom-center': position === 'bottom-center',
      'uk-notification-bottom-left': position === 'bottom-left',
      'uk-notification-bottom-right': position === 'bottom-right',
    })
    return (
      <Portal
        isOpened={notifications.length > 0}
        onClose={this.handleClick}
      >
        <div className={className}>
          {notifications.map(({ type, message, id, icon, isSticky, onClick, timeout }) => (
            <NotifyMesssage
              icon={icon}
              isSticky={isSticky}
              key={id}
              timeout={timeout}
              type={type}
              onClick={onClick}
            >
              {message}
            </NotifyMesssage>
          ))}
        </div>
      </Portal>
    )
  }
}
