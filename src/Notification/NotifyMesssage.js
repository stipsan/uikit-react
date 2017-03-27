import { Component, PropTypes } from 'react'
import cx from 'classnames'
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
    return (
      <div
        className={className}
        style={{ overflow: 'hidden', transition: 'margin ease-out 300ms', ...styles[this.state.isOpen ? 1 : 0] }}
      >
        <a className="uk-notification-close uk-close uk-icon" onClick={this.handleClose} >
          <Icon icon="close" />
        </a>
        <div onClick={onClick}>
          {icon && <Icon icon={icon} /> }
          &nbsp;
          {children}
        </div>
      </div>
    )
  }
}
