import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import GettingStarted from './components/routes/gettingstarted/components/gettingstarted'
import Master from './components/master'

render((
  <Router history={browserHistory}>
    <Route path="*" component={Master}>
      <Route path="*" component={GettingStarted} />
    </Route>
  </Router>
), document.getElementById('app'))
