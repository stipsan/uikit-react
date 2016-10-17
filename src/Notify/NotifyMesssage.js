import { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class NotifyMesssage extends Component {
  static propTypes = {
    children: PropTypes.node,
    closePortal: PropTypes.func,
    type: PropTypes.string,
  }

  handleClose = () => {
    this.setState({ isOpened: false })
  }

  render() {
    const { children, type, closePortal } = this.props
    const className = cx('uk-notify-message', {
      'uk-notify-message-info': type === 'info',
      'uk-notify-message-success': type === 'success',
      'uk-notify-message-danger': type === 'danger',
      'uk-notify-message-warning': type === 'warning',
    })
    return (
      <div className={className}>
        <a className="uk-close" onClick={closePortal} />
        {children}
      </div>
    )
  }
}
