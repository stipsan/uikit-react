import { Component, PropTypes } from 'react'
import Portal from 'react-portal'
import cx from 'classnames'

import NotifyMesssage from './NotifyMesssage'

export default class Notify extends Component {
  static propTypes = {
    notifications: PropTypes.arrayOf(PropTypes.object).isRequired,
    position: PropTypes.string,
  }

  static defaultProps = {
    type: 'primary',
    className: 'uk-notify',
    position: 'top-center',
    notifications: [],
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

    const className = cx('uk-notify', {
      'uk-notify-top-center': position === 'top-center',
      'uk-notify-top-left': position === 'top-left',
      'uk-notify-top-right': position === 'top-right',
      'uk-notify-bottom-center': position === 'bottom-center',
      'uk-notify-bottom-left': position === 'bottom-left',
      'uk-notify-bottom-right': position === 'bottom-right',
    })
    return (
      <Portal
        isOpened={notifications.length > 0}
        onClose={this.handleClick}
      >
        <div className={className}>
          {notifications.map(({ type, message, id, isSticky, timeout, icon }) => (
            <NotifyMesssage
              icon={icon}
              isSticky={isSticky}
              key={id}
              timeout={timeout}
              type={type}
            >
              {message}
            </NotifyMesssage>
          ))}
        </div>
      </Portal>
    )
  }
}
