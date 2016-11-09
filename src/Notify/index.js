import { Component, PropTypes } from 'react'
import Portal from 'react-portal'
import NotifyMesssage from './NotifyMesssage'
import cx from 'classnames'

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
      'uk-notify-top-right': position === 'top-righ',
      'uk-notify-bottom-center': position === 'bottom-center',
      'uk-notify-bottom-left': position === 'left-center',
      'uk-notify-bottom-right': position === 'right-center',
    })
    return (
      <Portal
        isOpened={notifications.length > 0}
        onClose={this.handleClick}
      >
        <div className={className}>
          {notifications.map(({ type, message, id }) => (
            <NotifyMesssage key={id} type={type} >
              {message}
            </NotifyMesssage>
          ))}
        </div>
      </Portal>
    )
  }
}
