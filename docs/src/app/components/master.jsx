var React = require('react');
var {RouteHandler, Link} = require('react-router');
var uikit = require('uikit');

var Master = React.createClass({

  render: function() {

    return (
    <div>
      <nav className="tm-navbar uk-navbar uk-navbar-attached">
        <div className="uk-container uk-container-center">
          <a
            className="uk-navbar-brand uk-hidden-small"
            href="index.html">
              <img
              className="uk-margin uk-margin-remove"
              src="docs/images/logo_uikit.svg"
              width={90}
              height={30}
              title="UIkit"
              alt="UIkit" />
          </a>
          <ul className="uk-navbar-nav uk-hidden-small">
            <li>
<a href="docs/documentation_get-started.html">
Get Started
</a>
</li>
            <li>
<a href="docs/core.html">Core</a>
</li>
            <li>
<a href="docs/components.html">Components</a>
</li>
            <li>
<a href="docs/customizer.html">Customizer</a>
</li>
            <li>
<a href="showcase/index.html">Showcase</a>
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
    </div>
    );
  },
});

module.exports = Master;