var React = require('react'),
    Router = require('react-router'),
    routes = require('./app-routes.jsx'),
    LiveEditor = require('./live_editor.jsx');


// These global vars are needed for the live examples to work
window.ReactPlayground = LiveEditor;
window.uikit = require('uikit');

Router.run(routes, function(Handler, state) {
  React.render(<Handler {...state} />, document.body);
});