var React = require('react');
var {Link} = require('react-router');

var NavLink = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  
  getDefaultProps: function(){
    return {disabled: false, disabledClassName: 'uk-text-muted uk-link-muted'};
  },

  render: function () {
    var {disabled, disabledClassName, ...other} = this.props;
    
    if(disabled) {
      return <li><a 
          {...other} 
          className={disabledClassName}
          title="Coming soon…"
          style={{cursor: 'not-allowed', backgroundColor: 'transparent'}}
        /></li>;
    } else {
      var { router } = this.context;
      var isActive = router.isActive(this.props.to, this.props.params, this.props.query);
      var className = isActive ? 'uk-active' : '';
      
      return <li className={className}><Link {...other} /></li>;
    }
  }
});

module.exports = NavLink;