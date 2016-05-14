import { PropTypes } from 'react'

import NavLink from '../Master/navlink.js'

const Components = ({ children }) => (
  <div className="tm-middle">
    <div className="uk-container uk-container-center">
      <div className="uk-grid">
        <div className="tm-sidebar uk-width-medium-1-5 uk-hidden-small">
          <ul className="tm-nav uk-nav">
            <li className="uk-nav-header">{'Common'}</li>
            <NavLink to="/core/animation" disabled>{'Animation'}</NavLink>
            <NavLink to="/core/alert" disabled>{'Alert'}</NavLink>
            <NavLink to="/core/buttons">{'Button'}</NavLink>
            <NavLink to="/core/close">{'Close'}</NavLink>
          </ul>
        </div>
        <div className="tm-main uk-width-medium-4-5">
          {children}
        </div>
      </div>
    </div>
  </div>
)

Components.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Components
