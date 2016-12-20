import { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class NotifyMesssage extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.string,
    isSticky: PropTypes.bool,
    timeout: PropTypes.number,
    type: PropTypes.string,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    timeout: 3000,
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
    const className = cx('uk-notify-message', {
      'uk-notify-message-info': type === 'info',
      'uk-notify-message-success': type === 'success',
      'uk-notify-message-danger': type === 'danger',
      'uk-notify-message-warning': type === 'warning',
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
        <a className="uk-close" onClick={this.handleClose} />
        <div onClick={onClick}>
          {icon && <i className={`uk-icon-justify uk-icon-${icon}`} /> }
          {children}
        </div>
      </div>
    )
  }
}
