import classNames from 'classnames'
import KeyHandler, { KEYDOWN } from 'react-key-handler'
import { Component, PropTypes, createElement } from 'react'

import Button from '../Button'
import Dialog from './Dialog'

export default class Modal extends Component {

  static propTypes = {
    cancelLabel: PropTypes.string,
    children: PropTypes.node,
    confirmLabel: PropTypes.string,
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    lightbox: PropTypes.string,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    target: PropTypes.func,
    type: PropTypes.string,
  }

  static defaultProps = {
    isOpen: false,
    closeTimeoutMS: 0,
    shouldCloseOnOverlayClick: true,
    target: 'button',
    lightbox: false,
    type: 'default',
    confirmLabel: 'Ok',
    cancelLabel: 'Cancel',
  }

  state = { shouldDisplay: false, isOpen: false }

  handleClick = () => {
    this.setState({ shouldDisplay: !this.state.shouldDisplay })
  }

  handleOpen = () => {
    this.setState(
      { shouldDisplay: true },
      () => setTimeout(() => this.setState({ isOpen: true }), 50)
    )
  }

  handleClose = () => {
    this.setState(
      { isOpen: false },
      () => setTimeout(() => this.setState({ shouldDisplay: false }), 300)
    )
  }

  handleConfirm = () => {
    this.props.onConfirm()
    this.handleClose()
  }

  handleCancel = () => {
    this.props.onCancel()
    this.handleClose()
  }

  render() {
    const {
      handleClose, handleOpen, handleConfirm, handleCancel,
     } = this
    const {
      isOpen,
      lightbox,
      type,
      confirmLabel,
      cancelLabel,
    } = this.props
    const target = this.props.target &&
          createElement(this.props.target, { handleOpen, children: 'Open' })
    const className = classNames('uk-modal', {
      'uk-open': this.state.shouldDisplay && this.state.isOpen,
    })
    const style = {
      display: this.state.shouldDisplay && 'block',
    }

    let footer = []
    if (type === 'alert') {
      footer = [() => <Button onClick={handleConfirm} primary>{confirmLabel}</Button>]
    }

    if (type === 'confirm' || type === 'prompt') {
      footer = [
        () => <Button onClick={handleCancel}>{cancelLabel}</Button>,
        () => <span>&nbsp;</span>,
        () => <Button onClick={handleConfirm} primary>{confirmLabel}</Button>,
      ]
    }

    return (
      <div>
        <KeyHandler keyEventName={KEYDOWN} keyValue="Escape" onKeyHandle={handleClose} />
        {target}
        <div
          aria-hidden={isOpen}
          className={className}
          style={style}
          onClick={type === 'default' && handleClose}
        >
          <Dialog
            handleClose={handleClose}
            close={type === 'default'}
            footer={footer}
            {...this.props}
          />
        </div>
      </div>
    )
  }
}
