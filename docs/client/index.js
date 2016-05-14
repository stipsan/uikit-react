import './less/main.less'

import { render } from 'react-dom'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import Buttons from './components/Components/Buttons'
import Close from './components/Components/Close'
import Components from './components/Components'
import Examples from './components/Examples'
import GettingStarted from './components/GettingStarted'
import Home from './components/Home'
import Master from './components/Master'
import NotFound from './components/NotFound'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Master}>
      <IndexRoute component={Home} />
      <Route path="getting-started" component={GettingStarted} />
      <Route path="components" component={Components}>
        <Route path="buttons" component={Buttons} />
        <Route path="close" component={Close} />
      </Route>
      <Route path="examples" component={Examples} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById('app'))
