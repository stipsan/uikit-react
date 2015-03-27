var React = require('react');
var {Link} = require('react-router');

var NavLink = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  
  getDefaultProps: function(){
    return {disabled: false};
  },

  render: function () {
    var {disabled, ...other} = this.props;
    
    if(disabled) {
      return <li><a 
          {...other} 
          className='uk-text-muted uk-link-muted' 
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