import React from 'react';
import {RouteHandler, Link} from 'react-router';
import NavLink from '../navlink.js';

var CorePage = React.createClass({

  render: function() {
    
    return (
      <div className="tm-middle">
        <div className="uk-container uk-container-center">
          <div className="uk-grid">
            <div className="tm-sidebar uk-width-medium-1-5 uk-hidden-small">
              <ul className="tm-nav uk-nav">
                <li className="uk-nav-header">Common</li>
                <NavLink to="animation">Animation</NavLink>
                <NavLink to="alert" disabled>Alert</NavLink>
                <NavLink to="button">Button</NavLink>
                <NavLink to="close">Close</NavLink>
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