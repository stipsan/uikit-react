var React = require('react'),
  classNames = require('classnames')

var DropDown = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
  },
  getInitialState() {
    return {
      isActive: false,
      mode: true,
    }
  },
  getDefaultProps() {
    return {
      type: 'button',
      disabled: false,
      className: '',
      onHover: false,
    }
  },
  handleMouseOver(event) {
    this.setState({ isActive: !this.state.isActive })
  },
  mouseClick(event)
  {
    this.setState({ isActive: !this.state.isActive })
  },
  render() {
    const className = classNames('uk-button-dropdown', {
      'uk-open': this.state.isActive,
    })
    return (
      <div
        className={className}
        onMouseOver={this.props.onHover && this.handleMouseOver}
        onClick={this.mouseClick}
        data-uk-dropdown={this.state.mode}
        aria-haspopup="true"
        aria-expanded={this.state.isActive}
      >
        {this.props.children}
      </div>
    )
  },
})

module.exports = DropDown
