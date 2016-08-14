// import elementClass from 'element-class'
// import Assign from 'lodash.assign'
// import ExecutionEnvironment from 'exenv'
// import ReactDOM from 'react-dom'

import classNames from 'classnames'
import React, { Component, PropTypes, createElement } from 'react'

import Dialog from './Dialog'

export default class Modal extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    isOpen: PropTypes.bool,
  }

  state = { shouldDisplay: false, isOpen: false }

  static defaultProps = {
    isOpen: false,
    closeTimeoutMS: 0,
    shouldCloseOnOverlayClick: true,
    target: 'button',
  }

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

  handleOverlayClick = (event) => {
    event.preventDefault()
    alert('test')
  }

  render() {
    const { handleOverlayClick, handleClick, handleClose, handleOpen } = this
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
