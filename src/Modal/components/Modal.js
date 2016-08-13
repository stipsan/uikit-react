import ExecutionEnvironment from 'exenv'
import React, { Component, PropTypes } from 'react'
// const ExecutionEnvironment = require('exenv')
const ModalPortal = React.createFactory(require('./ModalPortal'))
const ariaAppHider = require('../helpers/ariaAppHider')
const elementClass = require('element-class')
const renderSubtreeIntoContainer = require('react-dom').unstable_renderSubtreeIntoContainer
const Assign = require('lodash.assign')

const SafeHTMLElement = ExecutionEnvironment.canUseDOM ? window.HTMLElement : {}
const AppElement = ExecutionEnvironment.canUseDOM ? document.body : { appendChild() {} }

export default class Modal extends Component {

  displayName: 'Modal'

  statics = {
    setAppElement(element) {
      AppElement = ariaAppHider.setElement(element)
    },
    injectCSS() {
      'production' !== process.env.NODE_ENV
        && console.warn('React-Modal: injectCSS has been deprecated ' +
                        'and no longer has any effect. It will be removed in a later version')
    },
  }

  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    style: PropTypes.shape({
      content: PropTypes.object,
      overlay: PropTypes.object,
    }),
    portalClassName: PropTypes.string,
    appElement: PropTypes.instanceOf(SafeHTMLElement),
    onAfterOpen: PropTypes.func,
    onRequestClose: PropTypes.func,
    closeTimeoutMS: PropTypes.number,
    ariaHideApp: PropTypes.bool,
    shouldCloseOnOverlayClick: PropTypes.bool,
  }

  static defaultProps = () => {
    return {
      isOpen: false,
      portalClassName: 'ReactModalPortal',
      ariaHideApp: true,
      closeTimeoutMS: 0,
      shouldCloseOnOverlayClick: true,
    }
  }

  componentDidMount = () => {
    this.node = document.createElement('div')
    this.node.className = this.props.portalClassName
    document.body.appendChild(this.node)
    this.renderPortal(this.props)
  }

  componentWillReceiveProps = (newProps) => {
    this.renderPortal(newProps)
  }

  componentWillUnmount = () => {
    ReactDOM.unmountComponentAtNode(this.node)
    document.body.removeChild(this.node)
    elementClass(document.body).remove('ReactModal__Body--open')
  }

  renderPortal = (props) => {
    if (this.props.isOpen !== props.isOpen) {
      if (props.isOpen) {
        elementClass(document.body).add('ReactModal__Body--open')
      } else {
        elementClass(document.body).remove('ReactModal__Body--open')
      }

      if (props.ariaHideApp) {
        ariaAppHider.toggle(props.isOpen, props.appElement)
      }
    }

    this.portal = renderSubtreeIntoContainer(this, ModalPortal(Assign({}, props, { defaultStyles: Modal.defaultStyles })), this.node)
  }

  render() {
    return React.DOM.noscript()
  }
}

Modal.defaultStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
  },
}

// module.exports = Modal
