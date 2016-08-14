// import elementClass from 'element-class'
// import Assign from 'lodash.assign'
// import ExecutionEnvironment from 'exenv'
// import ReactDOM from 'react-dom'

import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

import Button from './../Button'
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
  }

  handleOverlayClick = (event) => {
    event.preventDefault()
    alert('test')
  }

  render() {
    const { handleOverlayClick, handleClick } = this
    return (
      <div className="uk-overflow-container">
        <Button
          primary
          className="uk-button"
          onClick={handleClick}
        >
          Open
        </Button>
        <Dialog
          onClick={handleOverlayClick}
          {...this.props}
        />
      </div>
    )
  }
}
