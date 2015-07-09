import React from 'react';
import {Link} from 'react-router';
import NavLink from '../../../navlink.js';

export default class CorePage extends React.Component {

  render() {
    
    return (
      <div className="tm-middle">
        <div className="uk-container uk-container-center">
          <div className="uk-grid">
            <div className="tm-sidebar uk-width-medium-1-5 uk-hidden-small">
              <ul className="tm-nav uk-nav">
                <li className="uk-nav-header">Common</li>
                <NavLink to="/core/animation" disabled>Animation</NavLink>
                <NavLink to="/core/alert" disabled>Alert</NavLink>
                <NavLink to="/core/buttons">Button</NavLink>
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
}