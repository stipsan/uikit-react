import classNames from 'classnames'
import { Component, PropTypes, createElement } from 'react'
import Portal from 'react-portal'

import Button from '../Button'
import Dialog from './Dialog'
import Prompt from './Prompt'

export default class Modal extends Component {

  static propTypes = {
    cancelLabel: PropTypes.string,
    children: PropTypes.node,
    confirmLabel: PropTypes.string,
    isOpen: PropTypes.bool,
    target: PropTypes.node,
    type: PropTypes.string,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
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
    setTimeout(() => this.setState({ isOpen: true }), 0)
  }

  handleClose = () => {
    this.setState(
      { isOpen: false },
      () => setTimeout(
        () => {
          this.modal.closePortal()
        },
        300
      )
    )
  }

  handleBeforeClose = (DOMNode, removeFromDOM) => {
    this.setState(
      { isOpen: false },
      () => setTimeout(removeFromDOM, 300)
    )
  }

  handleAfterClose = () => {
    this.setState({ shouldDisplay: false })
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
      handleClose, handleOpen, handleConfirm, handleCancel, handleAfterClose, handleBeforeClose,
     } = this
    const {
      isOpen,
      type,
      confirmLabel,
      cancelLabel,
    } = this.props
    const target = this.props.target &&
          createElement(this.props.target, { handleOpen, children: 'Open' })
    const className = classNames('uk-modal', {
      'uk-open': this.state.isOpen,
    })
    const style = {
      display: 'block',
    }

    let footer = []
    if (type === 'alert') {
      footer = [() => <Button primary onClick={handleConfirm}>{confirmLabel}</Button>]
    }

    if (type === 'confirm' || type === 'prompt') {
      footer = [
        () => <Button onClick={handleCancel}>{cancelLabel}</Button>,
        () => <span>&nbsp;</span>,
        () => <Button primary onClick={handleConfirm}>{confirmLabel}</Button>,
      ]
    }
    const { children, ...dialogProps } = this.props

    let dialogChildren
    if (type === 'prompt') {
      dialogChildren = <Prompt isOpen={this.state.isOpen}>{children}</Prompt>
    } else {
      dialogChildren = children
    }

    return (
      <Portal
        closeOnEsc
        closeOnOutsideClick
        ref={(node) => {
          if (node) {
            this.modal = node
          }
        }}
        onOpen={handleOpen}
        openByClickOn={target}
        beforeClose={handleBeforeClose}
        onClose={handleAfterClose}
      >
        <div
          aria-hidden={isOpen}
          className={className}
          style={style}
          onClick={type === 'default' && handleClose}
        >
          <Dialog
            close={type === 'default'}
            footer={footer}
            handleClose={handleClose}
            {...dialogProps}
          >
            {dialogChildren}
          </Dialog>
        </div>
      </Portal>
    )
  }
}
