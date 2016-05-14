import { render } from 'react-dom'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import GettingStarted from './components/GettingStarted'
import Home from './components/Home'
import Master from './components/master'
import NotFound from './components/NotFound'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Master}>
      <IndexRoute component={Home} />
      <Route path="getting-started" component={GettingStarted} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById('app'))
