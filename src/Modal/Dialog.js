import classNames from 'classnames'
import { Component, PropTypes } from 'react'

export default class Dialog extends Component
{
  static defaultProps = {
    style: {
      overlay: {},
      content: {},
    },
  }

  static propTypes = {

  }
  displayName: 'ModalPortal'
  state = {
    afterOpen: false,
    beforeClose: false,
    isActive: this.props.isActive,
  }

  componentDidMount = () => {
    // Focus needs to be set when mounting and already open
    if (this.props.isOpen) {
      this.setFocusAfterRender(true)
      this.open()
    }
  }

  componentWillUnmount = () => {
    clearTimeout(this.closeTimer)
  }

  componentWillReceiveProps = (newProps) => {
    // Focus only needs to be set once when the modal is being opened
    if (!this.props.isOpen && newProps.isOpen) {
      this.setFocusAfterRender(true)
      this.open()
    } else if (this.props.isOpen && !newProps.isOpen) {
      this.close()
    }
  }

  componentDidUpdate = () => {
    if (this.focusAfterRender) {
      this.focusContent()
      this.setFocusAfterRender(false)
    }
  }

  setFocusAfterRender = (focus) => {
    this.focusAfterRender = focus
  }

  open = () => {
    if (this.state.afterOpen && this.state.beforeClose) {
      clearTimeout(this.closeTimer)
      this.setState({ beforeClose: false })
    } else {
      // focusManager.setupScopedFocus(this.node)
      // focusManager.markForFocusLater()
      this.setState({ isOpen: true }, function () {
        this.setState({ afterOpen: true })

        if (this.props.isOpen && this.props.onAfterOpen) {
          this.props.onAfterOpen()
        }
      }.bind(this))
    }
  }

  close = () => {
    if (!this.ownerHandlesClose())
      return
    if (this.props.closeTimeoutMS > 0)
      this.closeWithTimeout()
    else
      this.closeWithoutTimeout()
  }

  focusContent = () => {
    this.refs.content.focus()
  }

  closeWithTimeout = () => {
    this.setState({ beforeClose: true }, function () {
      this.closeTimer = setTimeout(this.closeWithoutTimeout, this.props.closeTimeoutMS)
    }.bind(this))
  }

  closeWithoutTimeout = () => {
    this.setState({
      beforeClose: false,
      isOpen: false,
      afterOpen: false,
    }, this.afterClose)
  }

  afterClose = () => {
    focusManager.returnFocus()
    focusManager.teardownScopedFocus()
  }

  handleKeyDown = (event) => {
    if (event.keyCode == 9 /* tab*/) scopeTab(this.refs.content, event)
    if (event.keyCode == 27 /* esc*/) {
      event.preventDefault()
      this.props.handleClose()
    }
  }

  handleOverlayClick = event => event.stopPropagation()

  handleClose = event => {
    event.preventDefault()
    this.props.handleClose()
  }

  render() {
    const { handleOverlayClick, handleClose, handleKeyDown, handleBlockEvent } = this
    const { children, isOpen } = this.props

    return (
          <div className="uk-modal-dialog" onClick={handleOverlayClick}>
            <a
              className="uk-modal-close uk-close"
              onClick={handleClose}
              onKeyDown={handleKeyDown}
            >
            </a>
            {children}
          </div>
        )
  }
}
