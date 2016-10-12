import { Component, PropTypes } from 'react'
import Portal from 'react-portal'
import NotifyMesssage from './NotifyMesssage'
import cx from 'classnames'
import Button from '../Button'

export default class Notify extends Component {
  static propTypes = {
    children: PropTypes.node,
    position: PropTypes.string,
    type: PropTypes.string,
  }

  static defaultProps = {
    type: 'primary',
    className: 'uk-notify',
    position: 'top-center',
  }

  state = {
    isOpened: false,
  }

  handleClick = () => {
    this.setState({
      isOpened: true,
    })
    this.onClose()
  }

  render() {
    const button1 = <Button onClick={this.handleClick}>{this.props.children}</Button>
    const {
      type,
      position,
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
        isOpened={this.state.isOpened}
        openByClickOn={button1}
        onClose={this.handleClick}
      >
        <div className={className}>
          <NotifyMesssage type={type}>
            <p>This react component is appended to the document body.</p>
          </NotifyMesssage>
        </div>
      </Portal>
    )
  }
}
