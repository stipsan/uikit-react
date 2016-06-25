var React = require('react'),
            classNames = require('classnames');

var DropDown = React.createClass({
  propTypes : {
    className : React.PropTypes.string,
  },
  getInitialState: function() {
    return {
      isActive: false,
      mode: true,
    };
  },
  getDefaultProps: function(){
    return {
      type: 'button',
      disabled: false,
      className: '',
      onMouseOver: false
    };
  },
  handleMouseOver: function(event) {
    this.setState({isActive: !this.state.isActive});
  },
  mouseClick:  function(event)
  {
    this.setState({mode : {mode:'click'}});
  },
  render : function(){
    const className = classNames('uk-button-dropdown', {
      'uk-open' : this.state.isActive
    });
    return (
      <div
        className={className}
        onMouseOver={this.handleMouseOver}
        onClick={this.mouseClick}
        data-uk-dropdown={this.state.mode}
        aria-haspopup="true"
        aria-expanded={this.state.isActive}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = DropDown;
