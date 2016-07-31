import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

import Button from './Button'

export default class Modal extends Component
{
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  state = { isActive: false }
  handleClick = () => {
    this.setState({ isActive: !this.state.isActive })
  }


  render() {
    const className = classNames('uk-modal', {
      'uk-open uk-display-block': this.state.isActive,
    })
    return (
      <div className="uk-overflow-container">
        <Button
          primary
          className="uk-button"
          onClick={this.handleClick}
        >
          Open
        </Button>
        <div className={className} aria-hidden={this.state.isActive}>
          <div className="uk-modal-dialog">
            <a
              className="uk-modal-close uk-close"
              onClick={this.handleClick}
            >
            </a>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
