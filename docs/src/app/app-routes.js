
var React = require('react');
var Router = require('react-router');
var {Route, Redirect, DefaultRoute, NotFoundRoute} = Router;

// Here we define all our material-ui ReactComponents.
var Master = require('./components/master.js');
var Home = require('./components/pages/home.js');
var Core = require('./components/pages/core.js');
var CoreHome = require('./components/pages/core_home.js');
var Buttons = require('./components/pages/buttons.js');
var Close = require('./components/pages/close.js');
var NotFound = require('./components/pages/404.js');
var Getstarted = require('./components/pages/getstarted.js');

var AppRoutes = (
  <Route name="root" path="/" handler={Master}>
    <DefaultRoute handler={Home}/>
    
    // @TODO temp
    <Route name="get-started" handler={Getstarted} />
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
