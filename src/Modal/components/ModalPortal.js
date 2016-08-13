const React = require('react')
const div = React.DOM.div
const focusManager = require('../helpers/focusManager')
const scopeTab = require('../helpers/scopeTab')
const Assign = require('lodash.assign')

// so that our CSS is statically analyzable
const CLASS_NAMES = {
  overlay: {
    base: 'ReactModal__Overlay',
    afterOpen: 'ReactModal__Overlay--after-open',
    beforeClose: 'ReactModal__Overlay--before-close',
  },
  content: {
    base: 'ReactModal__Content',
    afterOpen: 'ReactModal__Content--after-open',
    beforeClose: 'ReactModal__Content--before-close',
  },
}

const ModalPortal = module.exports = React.createClass({

  displayName: 'ModalPortal',

  getDefaultProps() {
    return {
      style: {
        overlay: {},
        content: {},
      },
    }
  },

  getInitialState() {
    return {
      afterOpen: false,
      beforeClose: false,
    }
  },

  componentDidMount() {
    // Focus needs to be set when mounting and already open
    if (this.props.isOpen) {
      this.setFocusAfterRender(true)
      this.open()
    }
  },

  componentWillUnmount() {
    clearTimeout(this.closeTimer)
  },

  componentWillReceiveProps(newProps) {
    // Focus only needs to be set once when the modal is being opened
    if (!this.props.isOpen && newProps.isOpen) {
      this.setFocusAfterRender(true)
      this.open()
    } else if (this.props.isOpen && !newProps.isOpen) {
      this.close()
    }
  },

  componentDidUpdate() {
    if (this.focusAfterRender) {
      this.focusContent()
      this.setFocusAfterRender(false)
    }
  },

  setFocusAfterRender(focus) {
    this.focusAfterRender = focus
  },

  open() {
    if (this.state.afterOpen && this.state.beforeClose) {
      clearTimeout(this.closeTimer)
      this.setState({ beforeClose: false })
    } else {
      focusManager.setupScopedFocus(this.node)
      focusManager.markForFocusLater()
      this.setState({ isOpen: true }, function () {
        this.setState({ afterOpen: true })

        if (this.props.isOpen && this.props.onAfterOpen) {
          this.props.onAfterOpen()
        }
      }.bind(this))
    }
  },

  close() {
    if (!this.ownerHandlesClose())
      return
    if (this.props.closeTimeoutMS > 0)
      this.closeWithTimeout()
    else
      this.closeWithoutTimeout()
  },

  focusContent() {
    this.refs.content.focus()
  },

  closeWithTimeout() {
    this.setState({ beforeClose: true }, function () {
      this.closeTimer = setTimeout(this.closeWithoutTimeout, this.props.closeTimeoutMS)
    }.bind(this))
  },

  closeWithoutTimeout() {
    this.setState({
      beforeClose: false,
      isOpen: false,
      afterOpen: false,
    }, this.afterClose)
  },

  afterClose() {
    focusManager.returnFocus()
    focusManager.teardownScopedFocus()
  },

  handleKeyDown(event) {
    if (event.keyCode == 9 /* tab*/) scopeTab(this.refs.content, event)
    if (event.keyCode == 27 /* esc*/) {
      event.preventDefault()
      this.requestClose(event)
    }
  },

  handleOverlayClick(event) {
    let node = event.target

    while (node) {
      if (node === this.refs.content) return
      node = node.parentNode
    }

    if (this.props.shouldCloseOnOverlayClick) {
      if (this.ownerHandlesClose())
        this.requestClose(event)
      else
        this.focusContent()
    }
  },

  requestClose(event) {
    if (this.ownerHandlesClose())
      this.props.onRequestClose(event)
  },

  ownerHandlesClose() {
    return this.props.onRequestClose
  },

  shouldBeClosed() {
    return !this.props.isOpen && !this.state.beforeClose
  },

  buildClassName(which, additional) {
    let className = CLASS_NAMES[which].base
    if (this.state.afterOpen)
      className += ' ' + CLASS_NAMES[which].afterOpen
    if (this.state.beforeClose)
      className += ' ' + CLASS_NAMES[which].beforeClose
    return additional ? className + ' ' + additional : className
  },

  render() {
    const contentStyles = (this.props.className) ? {} : this.props.defaultStyles.content
    const overlayStyles = (this.props.overlayClassName) ? {} : this.props.defaultStyles.overlay

    return this.shouldBeClosed() ? div() : (
      div({
        ref: 'overlay',
        className: this.buildClassName('overlay', this.props.overlayClassName),
        style: Assign({}, overlayStyles, this.props.style.overlay || {}),
        onClick: this.handleOverlayClick,
      },
        div({
          ref: 'content',
          style: Assign({}, contentStyles, this.props.style.content || {}),
          className: this.buildClassName('content', this.props.className),
          tabIndex: '-1',
          onKeyDown: this.handleKeyDown,
        },
          this.props.children
        )
      )
    )
  },
})
