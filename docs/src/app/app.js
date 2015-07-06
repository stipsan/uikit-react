import React from 'react';
import Router from 'react-router';
import routes from './app-routes.js';
import LiveEditor from './live_editor.js';

// These global vars are needed for the live examples to work
window.ReactPlayground = LiveEditor;
window.uikit = require('uikit-react');

console.log(window.uikit.version);

let location = window.location.hostname !== 'uikit-react.firebaseapp.com' ? Router.HashLocation : Router.HistoryLocation;

Router.run(routes, location, function(Handler, state) {
  React.render(<Handler {...state} />, document.body);
});