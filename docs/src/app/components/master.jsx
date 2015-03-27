var React = require('react');
var {RouteHandler} = require('react-router');
var Link = require('./link.jsx');
var uikit = require('uikit');

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
            <li>
              <Link to="get-started">Get Started</Link>
            </li>
            <li>
              <Link to="core">Core</Link>
            </li>
            <li>
              <Link to="components">Components</Link>
            </li>
            <li>
              <Link to="customizer">Customizer</Link>
            </li>
            <li>
              <Link to="showcase">Showcase</Link>
            </li>
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