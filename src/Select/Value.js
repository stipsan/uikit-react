/* eslint-disable */
// temporary disable linting in this file

import cx from 'classnames'
import { Component, PropTypes } from 'react'

export default class Value extends Component {

  static propTypes = {
    value: PropTypes.object.isRequired,     // the option object for this value
    children: PropTypes.node,
    disabled: PropTypes.bool,               // disabled prop passed to ReactSelect
    id: PropTypes.string,                   // Unique id for the value - used for aria
    onClick: PropTypes.func,                // method to handle click on value label
    onRemove: PropTypes.func,               // method to handle removal of the value
  }

  handleRemove = (event) => {
    event.preventDefault()
    event.stopPropagation()
    this.props.onRemove(this.props.value)
  }

  handleMouseDown = (event) => {
    if (event.type === 'mousedown' && event.button !== 0) {
      return
    }
    if (this.props.onClick) {
      event.stopPropagation()
      this.props.onClick(this.props.value, event)
      return
    }
    if (this.props.value.href) {
      event.stopPropagation()
    }
  }

  handleTouchEndRemove = (event) => {
    // Check if the view is being dragged, In this case
    // we don't want to fire the click event (because the user only wants to scroll)
    if (this.dragging) return

    // Fire the mouse events
    this.onRemove(event)
  }

  handleTouchMove = () => {
    // Set a flag that the view is being dragged
    this.dragging = true
  }

  handleTouchStart = () => {
    // Set a flag that the view is not being dragged
    this.dragging = false
  }

  renderRemoveIcon() {
    if (this.props.disabled || !this.props.onRemove) {
      return false
    }
    return (
      <span
        aria-hidden="true"
        className="uk-close uk-component-select__delete"
        onMouseDown={this.handleRemove}
        onTouchEnd={this.handleTouchEndRemove}
        onTouchMove={this.handleTouchMove}
        onTouchStart={this.handleTouchStart}
      />
    )
  }

  renderLabel() {
    const className = 'Select-value-label'
    return this.props.onClick || this.props.value.href ? (
      <a
        className={className}
        href={this.props.value.href}
        target={this.props.value.target}
        onMouseDown={this.handleMouseDown}
        onTouchEnd={this.handleMouseDown}
      >
        {this.props.children}
      </a>
    ) : (
      <span aria-selected="true" className={className} id={this.props.id} role="option">
        {this.props.children}
      </span>
    )
  }

  render() {
    return (
      <div
        className={cx(
          'uk-component-select__value',
          this.props.value.className,
          { 'uk-badge': !!this.props.onRemove }
        )}
        style={this.props.value.style}
        title={this.props.value.title}
      >
        {this.renderRemoveIcon()}
        {this.renderLabel()}
      </div>
    )
  }

}
