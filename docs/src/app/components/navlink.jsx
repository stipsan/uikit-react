var React = require('react');
var {Link} = require('react-router');

var NavLink = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  render: function () {
    var { router } = this.context;
    var isActive = router.isActive(this.props.to, this.props.params, this.props.query);
    var className = isActive ? 'uk-active' : '';
    var link = (
      <Link {...this.props} />
    );
    return <li className={className}>{link}</li>;
  }

});

module.exports = NavLink;