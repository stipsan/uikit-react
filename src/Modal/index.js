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

  state = { isActive: false }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive })
  }

  static defaultProps = {
    isOpen: false,
    closeTimeoutMS: 0,
    shouldCloseOnOverlayClick: true,
    target: 'button',
  }

  handleOverlayClick = (event) => {
    event.preventDefault()
    alert('test')
  }

  render() {
    const { handleOverlayClick, handleClick } = this
    const { isOpen } = this.props
    const target = this.props.target &&
          createElement(this.props.target, { handleOpen: handleClick, children: 'Open' })
    const className = classNames('uk-modal', {
      'uk-open': this.state.isActive,
    })

    return (
      <div>
        {target}
        <div className={className} aria-hidden={this.state.isActive}>
          <Dialog
            onClick={handleOverlayClick}
            {...this.props}
          />
        </div>
      </div>
    )
  }
}
