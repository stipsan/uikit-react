import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import AsyncProps from 'react-router/lib/experimental/AsyncProps';

const adapter = 'production' !== process.env.NODE_ENV ? 'HashHistory' : 'BrowserHistory';
let { history } = require('react-router/lib/' + adapter);

var rootRoute = {
  component: AsyncProps,

  renderInitialLoad() {
    return <div>loading...</div>
  },

  childRoutes: [{
    path: '/',
    component: require('./components/master'),
    childRoutes: [
      require('./components/routes/gettingstarted'),
      require('./components/routes/core'),
      require('./components/routes/components')
    ]}
  ]
};

ReactDOM.render((
  <Router
    routes={rootRoute}
    history={history}
    createElement={AsyncProps.createElement}
  />
), document.getElementById('hotzone'));