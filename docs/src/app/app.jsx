(function () {

  var React = require('react'),
    Router = require('react-router'),
    routes = require('./app-routes.jsx');

    Router.run(routes, (Handler, state) => {
      React.render(<Handler {...state}/>, document.body);
    });

})();