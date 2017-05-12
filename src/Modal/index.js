import classNames from 'classnames'
import { Component } from 'react'
import Portal from 'react-portal'
import PropTypes from 'prop-types'

import Button from '../Button'
import Dialog from './Dialog'
import Prompt from './Prompt'

export default class Modal extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    target: PropTypes.element.isRequired,
    cancelButtonClass: PropTypes.string,
    cancelLabel: PropTypes.string,
    confirmButtonClass: PropTypes.string,
    confirmLabel: PropTypes.string,
    isOpen: PropTypes.bool,
    type: PropTypes.string,
    onCancel: PropTypes.func, // eslint-disable-line react/require-default-props
    onConfirm: PropTypes.func, // eslint-disable-line react/require-default-props
  }

  static defaultProps = {
    cancelButtonClass: '',
    cancelLabel: 'Cancel',
    closeTimeoutMS: 0,
    confirmButtonClass: '',
    confirmLabel: 'Ok',
    isOpen: false,
    lightbox: false,
    shouldCloseOnOverlayClick: true,
    target: 'button',
    type: 'default',
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

  handleClose = (callback) => {
    this.setState(
      { isOpen: false },
      () => setTimeout(
        () => {
          this.modal.closePortal()
          if (typeof callback === 'function') {
            callback()
          }
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
        () => (
          <Button
            primary
            className={this.props.confirmButtonClass}
            onClick={handleConfirm}
          >{confirmLabel}
          </Button>
        ),
      ]
    }

    if (type === 'confirm' || type === 'prompt') {
      footer = [
        () => (
          <Button className={this.props.cancelButtonClass} onClick={handleCancel}>
            {cancelLabel}
          </Button>
        ),
        () => <span>&nbsp;</span>,
        () => (
          <Button
            primary
            className={this.props.confirmButtonClass}
            onClick={handleConfirm}
          >
            {confirmLabel}
          </Button>
        ),
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
