import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import { history } from 'react-router/lib/HashHistory';
import * as Pages from './app-routes.js';

ReactDOM.render((
  <Router history={history}>
    <Route component={Pages.Master}>
      <Route path="/" component={Pages.Home}/>
      <Route path="/get-started" component={Pages.Getstarted} />
      <Route component={Pages.Core}>
        <Route path="/core" component={Pages.CoreHome}/>
        <Route path="/core/animation" component={Pages.Animations} />
        <Route path="/core/button" component={Pages.Buttons} />
        <Route path="/core/close" component={Pages.Close} />
      </Route>
      <Route path="*" component={Pages.NotFound}/>
    </Route>
  </Router>
), document.getElementById('hotzone'));