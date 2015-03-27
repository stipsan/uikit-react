var React = require('react'),
    {Link} = require('react-router');

var myLink = React.createClass({
  render: function(){
    return <Link activeClassName="uk-active" {...this.props} />;
  }
});

module.exports = myLink;