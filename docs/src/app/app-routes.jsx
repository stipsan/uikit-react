
var React = require('react');
var Router = require('react-router');
var {Route, Redirect, DefaultRoute, NotFoundRoute} = Router;

// Here we define all our material-ui ReactComponents.
var Master = require('./components/master.jsx');
var Home = require('./components/pages/home.jsx');
var Core = require('./components/pages/core.jsx');
var CoreHome = require('./components/pages/core_home.jsx');
var Buttons = require('./components/pages/buttons.jsx');
var Close = require('./components/pages/close.jsx');
var NotFound = require('./components/pages/404.jsx');

var AppRoutes = (
  <Route name="root" path="/" handler={Master}>
    <DefaultRoute handler={Home}/>
    
    // @TODO temp
    <Route name="get-started" handler={Home} />
    <Route name="core" handler={Core}>
      <DefaultRoute handler={CoreHome}/>
      <Route name="button" handler={Buttons} />
      <Route name="close" handler={Close} />
    </Route>
    <Route name="components" handler={Home} />
    <Route name="customizer" handler={Home} />
    <Route name="showcase" handler={Home} />
    
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

module.exports = AppRoutes;
