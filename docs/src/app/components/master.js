var React = require('react');
var {Link} = require('react-router');
var uikit = require('uikit-react');
var NavLink = require('./navlink.js');

var Master = React.createClass({

  render: function() {

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
            <NavLink to="get-started">Getting Started</NavLink>
            <NavLink to="core">Core</NavLink>
            <NavLink to="components" disabled disabledClassName='uk-hidden'>Components</NavLink>
            <NavLink to="customizer" disabled disabledClassName='uk-hidden'>Customizer</NavLink>
            <NavLink to="playground" disabled disabledClassName='uk-hidden'>Playground</NavLink>
          </ul>
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
      
        {this.props.children}
        
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
  },
});

module.exports = Master;