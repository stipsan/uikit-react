import React from 'react';
import {Link} from 'react-router';
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
                <NavLink to="/core/animation">Animation</NavLink>
                <NavLink to="/core/alert" disabled>Alert</NavLink>
                <NavLink to="/core/button">Button</NavLink>
                <NavLink to="/core/close">Close</NavLink>
              </ul>
            </div>
            <div className="tm-main uk-width-medium-4-5">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = CorePage;