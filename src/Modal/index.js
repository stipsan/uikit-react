import classNames from 'classnames'
import KeyHandler, { KEYDOWN } from 'react-key-handler'
import { Component, PropTypes, createElement } from 'react'

import Dialog from './Dialog'

export default class Modal extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    target: PropTypes.node,
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

  render() {
    const { handleClose, handleOpen } = this
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
        <KeyHandler keyEventName={KEYDOWN} keyValue="Escape" onKeyHandle={handleClose} />
        {target}
        <div
          aria-hidden={isOpen}
          className={className}
          style={style}
          onClick={handleClose}
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
