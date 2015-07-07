import React from 'react';
import Router from 'react-router';
import routes from './app-routes.js';

window.React = React; // React devtools need this, so do live_editor.js examples

let location = window.location.hostname !== 'uikit-react.firebaseapp.com' ? Router.HashLocation : Router.HistoryLocation;

Router.run(routes, location, function(Handler, state) {
  React.render(<Handler {...state} />, document.body);
});