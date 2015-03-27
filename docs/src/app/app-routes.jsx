
var React = require('react');
var Router = require('react-router');
var {Route, Redirect, DefaultRoute, NotFoundRoute} = Router;

// Here we define all our material-ui ReactComponents.
var Master = require('./components/master.jsx');
var Home = require('./components/pages/home.jsx');
var NotFound = require('./components/pages/404.jsx');

var AppRoutes = (
  <Route name="root" path="/" handler={Master}>
    <DefaultRoute handler={Home}/>
    
    // @TODO temp
    <Route name="get-started" handler={Home} />
    <Route name="core" handler={Home} />
    <Route name="components" handler={Home} />
    <Route name="customizer" handler={Home} />
    <Route name="showcase" handler={Home} />
    
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

module.exports = AppRoutes;
