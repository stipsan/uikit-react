var React = require('react');
var {RouteHandler, Link} = require('react-router');
var uikit = require('uikit');
var NavLink = require('./navlink.jsx');

var Master = React.createClass({

  render: function() {

    return (
    <div>
      <nav className="tm-navbar uk-navbar uk-navbar-attached">
        <div className="uk-container uk-container-center">
          <Link
            className="uk-navbar-brand uk-hidden-small"
            to="root">
              <img
              className="uk-margin uk-margin-remove"
              src="docs/images/logo_uikit.svg"
              width={90}
              height={30}
              title="UIkit"
              alt="UIkit" />
          </Link>
          <ul className="uk-navbar-nav uk-hidden-small">
            <NavLink to="get-started" disabled disabledClassName='uk-hidden'>Get Started</NavLink>
            <NavLink to="core">Core</NavLink>
            <NavLink to="components" disabled disabledClassName='uk-hidden'>Components</NavLink>
            <NavLink to="customizer" disabled disabledClassName='uk-hidden'>Customizer</NavLink>
            <NavLink to="showcase" disabled disabledClassName='uk-hidden'>Showcase</NavLink>
          </ul>
          <a
            href="#tm-offcanvas"
            className="uk-navbar-toggle uk-visible-small"
            data-uk-offcanvas />
          <div className="uk-navbar-brand uk-navbar-center uk-visible-small">
            <img
            src="docs/images/logo_uikit.svg"
            width={90}
            height={30}
            title="UIkit"
            alt="UIkit" />
          </div>
        </div>
      </nav>
      
        <RouteHandler {...this.props} />
        
        <div className="tm-footer">
          <div className="uk-container uk-container-center uk-text-center">
            <ul className="uk-subnav uk-subnav-line uk-flex-center">
              <li>
                <a href="https://github.com/uikit/uikit">GitHub</a>
              </li>
              <li>
                <a href="https://github.com/uikit/uikit/issues">Issues</a>
              </li>
              <li>
                <a href="https://github.com/uikit/uikit/blob/master/CHANGELOG.md">Changelog</a>
              </li>
              <li>
                <a href="https://twitter.com/getuikit">Twitter</a>
              </li>
            </ul>
            <div className="uk-panel">
              <p>Made by <a href="http://www.yootheme.com">YOOtheme</a> with love and caffeine.<br className="uk-hidden-small" />Licensed under <a href="http://opensource.org/licenses/MIT">MIT license</a>.</p>
              <a href="index.html">
                <img
                  src="docs/images/logo_uikit.svg"
                  width={90}
                  height={30}
                  title="UIkit"
                  alt="UIkit" />
              </a>
            </div>
          </div>
        </div>
    </div>
    );
  },
});

module.exports = Master;