var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var uikit = require('uikit');

var Master = React.createClass({

  mixins: [Router.State],

  render: function() {

    return (
    <div>
        <RouteHandler {...this.props} />
    </div>
    );
  },
});

module.exports = Master;