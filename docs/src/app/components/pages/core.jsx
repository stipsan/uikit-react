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
                <li className="uk-nav-header">Defaults</li>
                <NavLink to="base" disabled>Base</NavLink>
                <NavLink to="print" disabled>Print</NavLink>

                <li className="uk-nav-header">Layout</li>
                <NavLink to="grid" disabled>Grid</NavLink>
                <NavLink to="panel" disabled>Panel</NavLink>
                <NavLink to="article" disabled>Article</NavLink>
                <NavLink to="comment" disabled>Comment</NavLink>
                <NavLink to="utility" disabled>Utility</NavLink>
                <NavLink to="flex" disabled>Flex</NavLink>
                <NavLink to="cover" disabled>Cover</NavLink>

                <li className="uk-nav-header">Navigations</li>
                <NavLink to="nav" disabled>Nav</NavLink>
                <NavLink to="navbar" disabled>Navbar</NavLink>
                <NavLink to="subnav" disabled>Subnav</NavLink>
                <NavLink to="breadcrumb" disabled>Breadcrumb</NavLink>
                <NavLink to="pagination" disabled>Pagination</NavLink>
                <NavLink to="tab" disabled>Tab</NavLink>
                <NavLink to="thumbnav" disabled>Thumbnav</NavLink>

                <li className="uk-nav-header">Elements</li>
                <NavLink to="list" disabled>List</NavLink>
                <NavLink to="description-list" disabled>Description list</NavLink>
                <NavLink to="table" disabled>Table</NavLink>
                <NavLink to="form" disabled>Form</NavLink>

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

                <li className="uk-nav-header">JavaScript</li>
                <NavLink to="dropdown" disabled>Dropdown</NavLink>
                <NavLink to="modal" disabled>Modal</NavLink>
                <NavLink to="offcanvas" disabled>Off-canvas</NavLink>
                <NavLink to="switcher" disabled>Switcher</NavLink>
                <NavLink to="toggle" disabled>Toggle</NavLink>
                <NavLink to="scrollspy" disabled>Scrollspy</NavLink>
                <NavLink to="smooth-scroll" disabled>Smooth scroll</NavLink>
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