import classNames from 'classnames'
import { Component, PropTypes } from 'react'

export default class Option extends Component {
  static propTypes = {
    addLabelText: PropTypes.string,               // text to display with value while creating
    children: PropTypes.node,
    className: PropTypes.string,                  // className (based on mouse position)
    instancePrefix: PropTypes.string.isRequired,  // unique prefix for the ids (used for aria)
    isDisabled: PropTypes.bool,                   // the option is disabled
    isFocused: PropTypes.bool,                    // the option is focused
    isSelected: PropTypes.bool,                   // the option is selected
    onFocus: PropTypes.func,                      // method to handle mouseEnter on option
    onSelect: PropTypes.func,                     // method to handle click on option element
    onUnfocus: PropTypes.func,                    // method to handle mouseLeave on option
    option: PropTypes.object.isRequired,          // object that is base for that option
    optionIndex: PropTypes.number,                // index of the option, used to generate
  }

  onFocus = (event) => {
    if (!this.props.isFocused) {
      this.props.onFocus(this.props.option, event)
    }
  }

  handleBlockEvent = event => {
    event.preventDefault()
    event.stopPropagation()
  }

  handleMouseDown = (event) => {
    event.preventDefault()
    event.stopPropagation()
    this.props.onSelect(this.props.option, event)
  }

  handleMouseEnter = (event) => {
    this.onFocus(event)
  }

  handleMouseMove = (event) => {
    this.onFocus(event)
  }

  handleTouchEnd= (event) => {
    // Check if the view is being dragged, In this case
    // we don't want to fire the click event (because the user only wants to scroll)
    if (this.dragging) return

    this.handleMouseDown(event)
  }

  handleTouchMove = () => {
    // Set a flag that the view is being dragged
    this.dragging = true
  }

  handleTouchStart = () => {
    // Set a flag that the view is not being dragged
    this.dragging = false
  }

  render() {
    const { option, instancePrefix, optionIndex } = this.props
    let className = classNames(this.props.className, option.className)
    return option.disabled ? (
      <li
        className={className}
        onMouseDown={this.handleBlockEvent}
        onClick={this.handleBlockEvent}
      >
        <a>
          {this.props.children}
        </a>
      </li>
    ) : (
      <li
        className={className}
        style={option.style}
        role="option"
        onMouseDown={this.handleMouseDown}
        onMouseEnter={this.handleMouseEnter}
        onMouseMove={this.handleMouseMove}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
        id={`${instancePrefix}-option-${optionIndex}`}
        title={option.title}
      >
        <a>
          {
            option.create ?
            this.props.addLabelText.replace('{label}', option.label) :
            this.props.children
          }
        </a>
      </li>
    )
  }
}
