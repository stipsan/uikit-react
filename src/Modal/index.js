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
    const target = this.props.target && createElement(this.props.target, { handleOpen: this.handleClick, children: 'Open' })
    return (
      <div>
        {target}
        <div className="uk-modal">
          <Dialog
            onClick={handleOverlayClick}
            {...this.props}
          />
        </div>
      </div>
    )
  }
}
