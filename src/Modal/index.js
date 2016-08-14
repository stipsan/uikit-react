import classNames from 'classnames'
import { Component, PropTypes, createElement } from 'react'

import Dialog from './Dialog'

export default class Modal extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    isOpen: PropTypes.bool,
  }

  static defaultProps = {
    isOpen: false,
    closeTimeoutMS: 0,
    shouldCloseOnOverlayClick: true,
    target: 'button',
  }

  state = { shouldDisplay: false, isOpen: false }

  handleClick = () => {
    this.setState({ shouldDisplay: !this.state.shouldDisplay })
  }

  handleOpen = () => {
    this.setState(
      { shouldDisplay: true },
      () => setTimeout(() => this.setState({ isOpen: true }), 0)
    )
  }

  handleClose = () => {
    this.setState(
      { isOpen: false },
      () => setTimeout(() => this.setState({ shouldDisplay: false }), 300)
    )
  }

  handleKeyDown = (event) => {
    if (event.keyCode == 9 /* tab*/) scopeTab(this.refs.content, event)
    if (event.keyCode == 27 /* esc*/) {
      event.preventDefault()
      alert('t')
      this.handleClose()
    }
  }

  render() {
    const { handleClose, handleOpen, handleKeyDown } = this
    const { isOpen } = this.props
    const target = this.props.target &&
          createElement(this.props.target, { handleOpen, children: 'Open' })
    const className = classNames('uk-modal', {
      'uk-open': this.state.shouldDisplay && this.state.isOpen,
    })
    const style = {
      display: this.state.shouldDisplay && 'block',
    }

    return (
      <div>
        {target}
        <div
          className={className}
          aria-hidden={isOpen}
          style={style}
          onClick={handleClose}
          onKeyDown={handleKeyDown}
        >
          <Dialog
            handleClose={handleClose}
            {...this.props}
          />
        </div>
      </div>
    )
  }
}
