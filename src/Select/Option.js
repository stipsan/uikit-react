import cx from 'classnames'
import { Component, PropTypes } from 'react'

export default class Option extends Component {
  static propTypes = {
    instancePrefix: PropTypes.string.isRequired,  // unique prefix for the ids (used for aria)
    option: PropTypes.object.isRequired,          // object that is base for that option
    addLabelText: PropTypes.string,               // text to display with value while creating
    children: PropTypes.node,
    className: PropTypes.string,                  // className (based on mouse position)
    isDisabled: PropTypes.bool,                   // the option is disabled
    isFocused: PropTypes.bool,                    // the option is focused
    isSelected: PropTypes.bool,                   // the option is selected
    optionIndex: PropTypes.number,                // index of the option, used to generate
    onFocus: PropTypes.func,                      // method to handle mouseEnter on option
    onSelect: PropTypes.func,                     // method to handle click on option element
    onUnfocus: PropTypes.func,                    // method to handle mouseLeave on option
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
    const className = cx(this.props.className, option.className)
    return option.disabled ? (
      <li
        className={className}
        onClick={this.handleBlockEvent}
        onMouseDown={this.handleBlockEvent}
      >
        <a>
          {this.props.children}
        </a>
      </li>
    ) : (
      <li
        className={className}
        id={`${instancePrefix}-option-${optionIndex}`}
        role="option"
        style={option.style}
        title={option.title}
        onMouseDown={this.handleMouseDown}
        onMouseEnter={this.handleMouseEnter}
        onMouseMove={this.handleMouseMove}
        onTouchEnd={this.handleTouchEnd}
        onTouchMove={this.handleTouchMove}
        onTouchStart={this.handleTouchStart}
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
