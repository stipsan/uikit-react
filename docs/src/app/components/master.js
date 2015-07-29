import React from 'react';
import Home from './routes/home';
import NavLink from './navlink';
import MasterNavBar from './navbar.js';

export default class Master extends React.Component {

  static loadProps (params, cb) {
    if('production' !== process.env.NODE_ENV) console.log('App', 'loadProps');
    cb(null, {});
  }

  render() {

    let {loading} = this.props;

    return (
    <div style={{opacity: loading ? 0.66 : 1}}>
        <MasterNavBar loading={loading}>
          <NavLink to="/getting-started">Getting Started</NavLink>
          <NavLink to="/core">Core</NavLink>
          <NavLink to="/components">Components</NavLink>
          <NavLink to="/examples">Examples</NavLink>
          <NavLink to="/customizer" disabled disabledClassName='uk-hidden'>Customizer</NavLink>
          <NavLink to="/playground" disabled disabledClassName='uk-hidden'>Playground</NavLink>
        </MasterNavBar>
      
        {this.props.children || <Home/>}
        
        <div className="tm-footer">
          <div className="uk-container uk-container-center uk-text-center">
            <ul className="uk-subnav uk-subnav-line uk-flex-center">
              <li>
                <a href="https://github.com/stipsan/uikit-react">GitHub</a>
              </li>
              <li>
                <a href="https://github.com/stipsan/uikit-react/issues">Issues</a>
              </li>

            </ul>
            <div className="uk-panel">
              <p><a href="http://opensource.org/licenses/MIT">MIT license</a>.</p>
              <a href="/">
                <img
                  src="/images/logo.svg"
                  width={90}
                  height={30}
                  title="UIkit for React"
                  alt="UIkit for React" />
              </a>
            </div>
          </div>
        </div>
    </div>
    );
  }
}