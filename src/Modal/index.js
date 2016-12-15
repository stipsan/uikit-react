import classNames from 'classnames'
import { Component, PropTypes } from 'react'
import Portal from 'react-portal'

import Button from '../Button'
import Dialog from './Dialog'
import Prompt from './Prompt'

export default class Modal extends Component {

  static propTypes = {
    target: PropTypes.element.isRequired,
    cancelButtonClass: PropTypes.string,
    cancelLabel: PropTypes.string,
    children: PropTypes.node,
    confirmButtonClass: PropTypes.string,
    confirmLabel: PropTypes.string,
    isOpen: PropTypes.bool,
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

  setModal = (node) => {
    if (node) {
      this.modal = node
    }
  }

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
      handleClose,
      handleOpen,
      handleConfirm,
      handleCancel,
      handleAfterClose,
      handleBeforeClose,
      setModal,
     } = this
    const {
      isOpen,
      type,
      confirmLabel,
      cancelLabel,
      target,
    } = this.props

    const className = classNames('uk-modal', {
      'uk-open': this.state.isOpen,
    })
    const style = {
      display: 'block',
    }

    let footer = []
    if (type === 'alert') {
      footer = [
        () =>
          <Button
            primary
            className={this.props.confirmButtonClass}
            onClick={handleConfirm}
          >{confirmLabel}
          </Button>,
      ]
    }

    if (type === 'confirm' || type === 'prompt') {
      footer = [
        () => <Button className={this.props.cancelButtonClass} onClick={handleCancel}>
          {cancelLabel}
        </Button>,
        () => <span>&nbsp;</span>,
        () =>
          <Button
            primary
            className={this.props.confirmButtonClass}
            onClick={handleConfirm}
          >
            {confirmLabel}
          </Button>,
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
        beforeClose={handleBeforeClose}
        openByClickOn={target}
        ref={setModal}
        onClose={handleAfterClose}
        onOpen={handleOpen}
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
