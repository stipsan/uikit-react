var React = require('react');
//var Router = require('react-router');
var ButtonsPage = require('./buttons.jsx');
var ClosePage = require('./close.jsx');

var HomePage = React.createClass({

  //mixins: [Router.Navigation],

  render: function() {

    return (
      



      
      <div>
        <div>
          <ButtonsPage />
          <ClosePage />

          <div className="tm-section tm-section-color-1 tm-section-colored">
            <div className="uk-container uk-container-center uk-text-center">
              <img
  className="tm-logo"
  src="images/logo_uikit_large.svg"
  width={281}
  height={217}
  title="UIkit"
  alt="UIkit" />
              <p className="uk-text-large">
  A lightweight and modular front-end framework<br className="uk-hidden-small" /> for developing fast and powerful web interfaces.
  </p>
              <a
  className="uk-button tm-button-download"
  data-uikit-download>
  Download UIkit
  </a>
              <ul className="tm-subnav uk-subnav uk-flex-center">
                <li>
  <a href="https://github.com/uikit/uikit">GitHub</a>
  </li>
                <li>
  <a href="docs/documentation_get-started.html">
  Get Started
  </a>
  </li>
                <li data-uikit-version />
              </ul>
              <ul className="tm-subnav uk-subnav uk-flex-center">
                <li>
  <a href="https://github.com/uikit/uikit/stargazers">
  <i className="uk-icon-star" />
   <span data-uikit-stargazers>4242</span> Stargazers
  </a>
  </li>
                <li>
  <a href="https://github.com/uikit/uikit/network">
  <i className="uk-icon-code-fork" />
   <span data-uikit-forks>787</span> Forks
  </a>
  </li>
                <li>
  <a href="https://twitter.com/getuikit">
  <i className="uk-icon-twitter" /> @getuikit
  </a>
  </li>
                <li>
  <a href="https://plus.google.com/communities/114238665434626719878">
  <i className="uk-icon-google-plus" /> Community
  </a>
  </li>
              </ul>
            </div>
          </div>
          <div className="tm-section tm-section-color-2 tm-section-colored">
            <div className="uk-container uk-container-center uk-text-center">
              <h1 className="uk-heading-large">Features</h1>
              <p className="uk-text-large">
  UIkit gives you a comprehensive collection of HTML, CSS, and JS components<br className="uk-hidden-small" /> which is simple to use, easy to customize and extendable.
  </p>
              <div className="uk-grid" data-uk-grid-margin>
                <div className="uk-width-medium-1-4">
                  <div className="uk-panel">
                    <img
  className="tm-image-pull"
  src="images/icon_less.svg"
  width={200}
  height={140}
  alt="LESS" />
                    <h2 className="uk-margin-top-remove">LESS</h2>
                    <p>
  UIkit is developed in <a href="http://lesscss.org">LESS</a> to write well-structured, extendable code which is easy to maintain.
  </p>
                  </div>
                </div>
                <div className="uk-width-medium-1-4">
                  <div className="uk-panel">
                    <img
  className="tm-image-pull"
  src="images/icon_components.svg"
  width={200}
  height={140}
  alt="Components" />
                    <h2 className="uk-margin-top-remove">Components</h2>
                    <p>
  A collection of small, responsive components using consistent and conflict-free naming conventions.
  </p>
                  </div>
                </div>
                <div className="uk-width-medium-1-4">
                  <div className="uk-panel">
                    <img
  className="tm-image-pull"
  src="images/icon_themes.svg"
  width={200}
  height={140}
  alt="Themes" />
                    <h2 className="uk-margin-top-remove">Customizer</h2>
                    <p>
  UIkit's very basic style can be extended with themes and is easy to customize to create your own look.
  </p>
                  </div>
                </div>
                <div className="uk-width-medium-1-4">
                  <div className="uk-panel">
                    <img
  className="tm-image-pull"
  src="images/icon_responsive.svg"
  width={200}
  height={140}
  alt="Responsive" />
                    <h2 className="uk-margin-top-remove">Responsive</h2>
                    <p>
  With the mobile-first approach UIkit provides a consistent experience from phones and tablets to desktops.
  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tm-section tm-section-color-white">
            <div className="uk-container uk-container-center uk-text-center">
              <h1 className="tm-margin-large-bottom">
  <strong>
  Get involved.
  </strong> Become a part of the UIkit community.
  </h1>
              <div
  className="uk-grid tm-grid-margin-large"
  data-uk-grid-match="{target:'.uk-panel'}"
  data-uk-grid-margin>
                <div className="uk-width-medium-1-3">
                  <a
  className="uk-panel tm-panel-link"
  href="https://twitter.com/getuikit">
                    <div className="tm-icon">
  <i className="uk-icon-twitter uk-icon-large" />
  </div>
                    <h2>Twitter</h2>
                    <p>
  Follow us on Twitter and be the first to receive news and updates. We are open for your feedback and questions.
  </p>
                  </a>
                </div>
                <div className="uk-width-medium-1-3">
                  <a
  className="uk-panel tm-panel-link"
  href="https://github.com/uikit/uikit/issues">
                    <div className="tm-icon">
  <i className="uk-icon-github-alt uk-icon-large" />
  </div>
                    <h2>
  Contribute on GitHub
  </h2>
                    <p>
  You want to take part in the development? Fork UIkit on GitHub and send us a pull request. To report a bug, file a new issue.
  </p>
                  </a>
                </div>
                <div className="uk-width-medium-1-3">
                  <a
  className="uk-panel tm-panel-link"
  href="https://plus.google.com/communities/114238665434626719878">
                    <div className="tm-icon">
  <i className="uk-icon-google-plus uk-icon-large" />
  </div>
                    <h2>
  Google+ Community
  </h2>
                    <p>
  If you're interested in discussing, participating and helping each other, the UIkit Google+ community is the place to be.
  </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tm-section tm-section-color-2 tm-section-colored">
            <div className="uk-container uk-container-center uk-text-center">
              <h1 className="uk-heading-large uk-margin-bottom-remove">
  Open Source
  </h1>
              <p className="uk-text-large">
  UIkit is an open source framework to make the web look good.<br className="uk-hidden-small" /> Create your own styles and discover the unlimited use of UIkit.
  </p>
              <div
  className="uk-grid uk-grid-divider"
  data-uk-grid-margin>
                <div className="uk-width-1-1 uk-width-medium-1-3">
                  <div className="uk-panel">
                    <h2>
  MIT License
  </h2>
                    <p>
  UIkit is absolutely free of charge and you can use, copy, merge, publish and distribute the framework without any limitations.
  </p>
                  </div>
                </div>
                <div className="uk-width-medium-1-3">
                  <div className="uk-panel">
                    <h2>
  Our Heros
  </h2>
                    <p>
  A big thanks to LESS, jQuery, normalize.css and FontAwesome. UIkit wouldn't be possible without these awesome open source projects.
  </p>
                  </div>
                </div>
                <div className="uk-width-medium-1-3">
                  <div className="uk-panel">
                    <h2>
  Active Development
  </h2>
                    <p>UIkit is built by <a href="http://www.yootheme.com">YOOtheme</a>, using our extensive experience in creating Joomla and WordPress themes, to power the <a href="http://www.yootheme.com/themes/warp-framework">Warp theme framework</a>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
  src="images/logo_uikit.svg"
  width={90}
  height={30}
  title="UIkit"
  alt="UIkit" />
  </a>
              </div>
            </div>
          </div>
          <div id="tm-offcanvas" className="uk-offcanvas">
            <div className="uk-offcanvas-bar">
              <ul
  className="uk-nav uk-nav-offcanvas uk-nav-parent-icon"
  data-uk-nav="{ multiple: true }">
                <li className="uk-parent">
  <a href="#">Documentation</a>
                  <ul className="uk-nav-sub">
                    <li>
  <a href="docs/documentation_get-started.html">
  Get started
  </a>
  </li>
                    <li>
  <a href="docs/documentation_how-to-customize.html">
  How to customize
  </a>
  </li>
                    <li>
  <a href="docs/documentation_layouts.html">
  Layout examples
  </a>
  </li>
                    <li>
  <a href="docs/core.html">Core</a>
  </li>
                    <li>
  <a href="docs/components.html">Components</a>
  </li>
                    <li>
  <a href="docs/documentation_project-structure.html">
  Project structure
  </a>
  </li>
                    <li>
  <a href="documentation_less-sass.html">
  Less &amp; Sass files
  </a>
  </li>
                    <li>
  <a href="docs/documentation_create-a-theme.html">
  Create a theme
  </a>
  </li>
                    <li>
  <a href="docs/documentation_create-a-style.html">
  Create a style
  </a>
  </li>
                    <li>
  <a href="docs/documentation_customizer-json.html">Customizer.json</a>
  </li>
                    <li>
  <a href="docs/documentation_javascript.html">Javascript</a>
  </li>
                    <li>
  <a href="docs/documentation_custom-prefix.html">
  Custom prefix
  </a>
  </li>
                  </ul>
                </li>
                <li className="uk-nav-header">Core</li>
                <li className="uk-parent">
  <a href="#">
  <i className="uk-icon-wrench" /> Defaults
  </a>
                  <ul className="uk-nav-sub">
                    <li>
  <a href="docs/base.html">Base</a>
  </li>
                    <li>
  <a href="docs/print.html">Print</a>
  </li>
                  </ul>
                </li>
                <li className="uk-parent">
  <a href="#">
  <i className="uk-icon-th-large" /> Layout
  </a>
                  <ul className="uk-nav-sub">
                    <li>
  <a href="docs/grid.html">Grid</a>
  </li>
                    <li>
  <a href="docs/panel.html">Panel</a>
  </li>
                    <li>
  <a href="docs/article.html">Article</a>
  </li>
                    <li>
  <a href="docs/comment.html">Comment</a>
  </li>
                    <li>
  <a href="docs/utility.html">Utility</a>
  </li>
                    <li>
  <a href="docs/flex.html">Flex</a>
  </li>
                    <li>
  <a href="docs/cover.html">Cover</a>
  </li>
                  </ul>
                </li>
                <li className="uk-parent">
  <a href="#">
  <i className="uk-icon-bars" /> Navigations
  </a>
                  <ul className="uk-nav-sub">
                    <li>
  <a href="docs/nav.html">Nav</a>
  </li>
                    <li>
  <a href="docs/navbar.html">Navbar</a>
  </li>
                    <li>
  <a href="docs/subnav.html">Subnav</a>
  </li>
                    <li>
  <a href="docs/breadcrumb.html">Breadcrumb</a>
  </li>
                    <li>
  <a href="docs/pagination.html">Pagination</a>
  </li>
                    <li>
  <a href="docs/tab.html">Tab</a>
  </li>
                    <li>
  <a href="docs/thumbnav.html">Thumbnav</a>
  </li>
                  </ul>
                </li>
                <li className="uk-parent">
  <a href="#">
  <i className="uk-icon-check" /> Elements
  </a>
                  <ul className="uk-nav-sub">
                    <li>
  <a href="docs/list.html">List</a>
  </li>
                    <li>
  <a href="docs/description-list.html">
  Description list
  </a>
  </li>
                    <li>
  <a href="docs/table.html">Table</a>
  </li>
                    <li>
  <a href="docs/form.html">Form</a>
  </li>
                  </ul>
                </li>
                <li className="uk-parent">
  <a href="#">
  <i className="uk-icon-folder-open" /> Common
  </a>
                  <ul className="uk-nav-sub">
                    <li>
  <a href="docs/button.html">Button</a>
  </li>
                    <li>
  <a href="docs/icon.html">Icon</a>
  </li>
                    <li>
  <a href="docs/close.html">Close</a>
  </li>
                    <li>
  <a href="docs/badge.html">Badge</a>
  </li>
                    <li>
  <a href="docs/alert.html">Alert</a>
  </li>
                    <li>
  <a href="docs/thumbnail.html">Thumbnail</a>
  </li>
                    <li>
  <a href="docs/overlay.html">Overlay</a>
  </li>
                    <li>
  <a href="docs/text.html">Text</a>
  </li>
                    <li>
  <a href="docs/animation.html">Animation</a>
  </li>
                  </ul>
                </li>
                <li className="uk-parent">
  <a href="#">
  <i className="uk-icon-magic" /> JavaScript
  </a>
                  <ul className="uk-nav-sub">
                    <li>
  <a href="docs/dropdown.html">Dropdown</a>
  </li>
                    <li>
  <a href="docs/modal.html">Modal</a>
  </li>
                    <li>
  <a href="docs/offcanvas.html">Off-canvas</a>
  </li>
                    <li>
  <a href="docs/switcher.html">Switcher</a>
  </li>
                    <li>
  <a href="docs/toggle.html">Toggle</a>
  </li>
                    <li>
  <a href="docs/scrollspy.html">Scrollspy</a>
  </li>
                    <li>
  <a href="docs/smooth-scroll.html">
  Smooth scroll
  </a>
  </li>
                  </ul>
                </li>
                <li className="uk-nav-header">Components</li>
                <li className="uk-parent">
  <a href="#">
  <i className="uk-icon-th-large" /> Layout
  </a>
                  <ul className="uk-nav-sub">
                    <li>
  <a href="docs/grid-js.html">
  Dynamic Grid
  </a>
  </li>
                  </ul>
                </li>
                <li className="uk-parent">
  <a href="#">
  <i className="uk-icon-bars" /> Navigations
  </a>
                  <ul className="uk-nav-sub">
                    <li>
  <a href="docs/dotnav.html">Dotnav</a>
  </li>
                    <li>
  <a href="docs/slidenav.html">Slidenav</a>
  </li>
                    <li>
  <a href="docs/pagination-js.html">
  Dynamic Pagination
  </a>
  </li>
                  </ul>
                </li>
                <li className="uk-parent">
  <a href="#">
  <i className="uk-icon-folder-open" /> Common
  </a>
                  <ul className="uk-nav-sub">
                    <li>
  <a href="docs/form-advanced.html">
  Form advanced
  </a>
  </li>
                    <li>
  <a href="docs/form-file.html">
  Form file
  </a>
  </li>
                    <li>
  <a href="docs/form-password.html">
  Form password
  </a>
  </li>
                    <li>
  <a href="docs/form-select.html">
  Form select
  </a>
  </li>
                    <li>
  <a href="docs/placeholder.html">Placeholder</a>
  </li>
                    <li>
  <a href="docs/progress.html">Progress</a>
  </li>
                  </ul>
                </li>
                <li className="uk-parent">
  <a href="#">
  <i className="uk-icon-magic" /> JavaScript
  </a>
                  <ul className="uk-nav-sub">
                    <li>
  <a href="docs/lightbox.html">Lightbox</a>
  </li>
                    <li>
  <a href="docs/autocomplete.html">Autocomplete</a>
  </li>
                    <li>
  <a href="docs/datepicker.html">Datepicker</a>
  </li>
                    <li>
  <a href="docs/htmleditor.html">
  HTML editor
  </a>
  </li>
                    <li>
  <a href="docs/slideshow.html">Slideshow</a>
  </li>
                    <li>
  <a href="docs/accordion.html">Accordion</a>
  </li>
                    <li>
  <a href="docs/notify.html">Notify</a>
  </li>
                    <li>
  <a href="docs/search.html">Search</a>
  </li>
                    <li>
  <a href="docs/nestable.html">Nestable</a>
  </li>
                    <li>
  <a href="docs/sortable.html">Sortable</a>
  </li>
                    <li>
  <a href="docs/sticky.html">Sticky</a>
  </li>
                    <li>
  <a href="docs/timepicker.html">Timepicker</a>
  </li>
                    <li>
  <a href="docs/tooltip.html">Tooltip</a>
  </li>
                    <li>
  <a href="docs/upload.html">Upload</a>
  </li>
                  </ul>
                </li>
                <li className="uk-nav-divider" />
                <li>
  <a href="showcase/index.html">Showcase</a>
  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = HomePage;