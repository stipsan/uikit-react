var React = require('react');
var {RouteHandler, Link} = require('react-router');
var NavLink = require('../navlink.jsx');

var CorePage = React.createClass({

  render: function() {
    
    return (
      <div className="tm-middle">
        <div className="uk-container uk-container-center">
          <div className="uk-grid">
            <div className="tm-sidebar uk-width-medium-1-5 uk-hidden-small">
              <ul className="tm-nav uk-nav">
                <li className="uk-nav-header">Common</li>
                <NavLink to="button">Button</NavLink>
                <NavLink to="icon" disabled>Icon</NavLink>
                <NavLink to="close">Close</NavLink>
                <NavLink to="badge" disabled>Badge</NavLink>
                <NavLink to="alert" disabled>Alert</NavLink>
                <NavLink to="thumbnail" disabled>Thumbnail</NavLink>
                <NavLink to="overlay" disabled>Overlay</NavLink>
                <NavLink to="text" disabled>Text</NavLink>
                <NavLink to="animation" disabled>Animation</NavLink>
              </ul>
            </div>
            <div className="tm-main uk-width-medium-4-5">
              <RouteHandler {...this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = CorePage;