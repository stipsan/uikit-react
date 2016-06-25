var React = require('react'),
  classNames = require('classnames')

var Button = React.createClass({

  propTypes: {
    type: React.PropTypes.string,
    primary: React.PropTypes.bool,
    success: React.PropTypes.bool,
    danger: React.PropTypes.bool,
    link: React.PropTypes.bool,
    mini: React.PropTypes.bool,
    small: React.PropTypes.bool,
    large: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    className: React.PropTypes.string,
    onClick: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.func,
    ]),
  },

  getInitialState() {
    return { isActive: false }
  },
  getDefaultProps() {
    return {
      type: 'button',
      primary: false,
      success: false,
      danger: false,
      link: false,
      mini: false,
      small: false,
      large: false,
      disabled: false,
      className: '',
      onClick: false,
    }
  },
  onClick(event) {
    if (!this.props.disabled) {
      this.setState({ isActive: !this.state.isActive })
    }
  },

  render() {
    var props = this.props,
      classes = classNames('uk-button', this.props.className, {
        'uk-button-primary': this.props.primary,
        'uk-button-success': this.props.success,
        'uk-button-danger': this.props.danger,
        'uk-button-link': this.props.link,
        'uk-button-mini': this.props.mini,
        'uk-button-small': this.props.small,
        'uk-button-large': this.props.large,
        'uk-active': this.state.isActive,
      })

    return (
        <button {...props} onClick={this.props.onClick || this.onClick} className={classes} />
    )
  },
})

module.exports = Button
