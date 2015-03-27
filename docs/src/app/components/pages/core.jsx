var React = require('react');
var {RouteHandler, Link} = require('react-router');
var NavLink = require('../navlink.jsx');

var CorePage = React.createClass({

  render: function() {

    return (
      <div className="tm-middle">
        <div className="uk-container uk-container-center">
          <div className="uk-grid">
            <div className="tm-sidebar uk-width-medium-1-4 uk-hidden-small">
              <ul className="tm-nav uk-nav">
                <li className="uk-nav-header">Defaults</li>
                <li><a href="base.html">Base</a></li>
                <li><a href="print.html">Print</a></li>

                <li className="uk-nav-header">Layout</li>
                <li><a href="grid.html">Grid</a></li>
                <li><a href="panel.html">Panel</a></li>
                <li><a href="article.html">Article</a></li>
                <li><a href="comment.html">Comment</a></li>
                <li><a href="utility.html">Utility</a></li>
                <li><a href="flex.html">Flex</a></li>
                <li><a href="cover.html">Cover</a></li>

                <li className="uk-nav-header">Navigations</li>
                <li><a href="nav.html">Nav</a></li>
                <li><a href="navbar.html">Navbar</a></li>
                <li><a href="subnav.html">Subnav</a></li>
                <li><a href="breadcrumb.html">Breadcrumb</a></li>
                <li><a href="pagination.html">Pagination</a></li>
                <li><a href="tab.html">Tab</a></li>
                <li><a href="thumbnav.html">Thumbnav</a></li>

                <li className="uk-nav-header">Elements</li>
                <li><a href="list.html">List</a></li>
                <li><a href="description-list.html">Description list</a></li>
                <li><a href="table.html">Table</a></li>
                <li><a href="form.html">Form</a></li>

                <li className="uk-nav-header">Common</li>
                <NavLink to="button">Button</NavLink>
                <NavLink to="icon" disabled>Icon</NavLink>
                <NavLink to="close">Close</NavLink>
                <li><a href="badge.html">Badge</a></li>
                <li><a href="alert.html">Alert</a></li>
                <li><a href="thumbnail.html">Thumbnail</a></li>
                <li><a href="overlay.html">Overlay</a></li>
                <li><a href="text.html">Text</a></li>
                <li><a href="animation.html">Animation</a></li>

                <li className="uk-nav-header">JavaScript</li>
                <li><a href="dropdown.html">Dropdown</a></li>
                <li><a href="modal.html">Modal</a></li>
                <li><a href="offcanvas.html">Off-canvas</a></li>
                <li><a href="switcher.html">Switcher</a></li>
                <li><a href="toggle.html">Toggle</a></li>
                <li><a href="scrollspy.html">Scrollspy</a></li>
                <li><a href="smooth-scroll.html">Smooth scroll</a></li>
              </ul>
            </div>
            <div className="tm-main uk-width-medium-3-4">
              <RouteHandler {...this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = CorePage;