/** @jsx React.DOM */
var React = require('react/addons'),
    classNames = require('classnames');

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
    disabled: React.PropTypes.bool
  },
    
  getInitialState: function() {
    return { isActive: false };
  },
  getDefaultProps: function(){
    return {
      type: 'button', 
      primary: false, 
      success: false, 
      danger: false,
      link: false,
      mini: false,
      small: false,
      large: false,
      disabled: false
    };
  },
  onClick: function() {
    this.setState({isActive: !this.state.isActive});
  },
  render: function() {
      
    var classes = classNames('uk-button', {
      "uk-button-primary": this.props.primary, 
      "uk-button-success": this.props.success, 
      "uk-button-danger": this.props.danger,
      "uk-button-link": this.props.link,
      "uk-button-mini": this.props.mini,
      "uk-button-small": this.props.small,
      "uk-button-large": this.props.large,
      "uk-active": this.state.isActive
    });

    return (
      <button 
        className={classes}
        type={this.props.type}
        disabled={this.props.disabled}
        onClick={this.onClick}
       >
       {this.props.children}
    </button>
    );
  }
});

module.exports = Button;