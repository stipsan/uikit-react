import React from 'react';
import {Link} from 'react-router';
import Home from './routes/home';
import NavLink from './navlink';

export default class Master extends React.Component {

  static loadProps (params, cb) {
    if('production' !== process.env.NODE_ENV) console.log('App', 'loadProps');
    cb(null, {});
  }

  render() {

    return (
    <div>
      <nav className="tm-navbar uk-navbar uk-navbar-attached">
        <div className="uk-container uk-container-center">
          <Link
            className="uk-navbar-brand uk-hidden-small"
            to="/">
              <img
              src="/images/logo-horizontal.svg"
              style={{height: 70, marginTop: -15, opacity: 0.9}}
              title="UIkit"
              alt="UIkit" />
          </Link>
          <ul className="uk-navbar-nav uk-hidden-small">
            <NavLink to="getting-started">Getting Started</NavLink>
            <NavLink to="core">Core</NavLink>
            <NavLink to="components">Components</NavLink>
            <NavLink to="customizer" disabled disabledClassName='uk-hidden'>Customizer</NavLink>
            <NavLink to="playground" disabled disabledClassName='uk-hidden'>Playground</NavLink>
          </ul>
          <div className="uk-navbar-flip">
            <ul className="uk-navbar-nav uk-hidden-small">
              <li><a href="https://github.com/stipsan/uikit-react">GitHub</a></li>
            </ul>
          </div>
          <a
            href="#tm-offcanvas"
            className="uk-navbar-toggle uk-visible-small"
            data-uk-offcanvas />
          <div className="uk-navbar-brand uk-navbar-center uk-visible-small">
            <img
            src="/images/logo.svg"
            style={{width: 60, height: 60, marginTop: -10}}
            title="UIkit"
            alt="UIkit" />
          </div>
        </div>
      </nav>
      
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