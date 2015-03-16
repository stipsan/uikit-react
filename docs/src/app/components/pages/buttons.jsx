var React = require('react');
var {Button} = require('uikit');

var ButtonsPage = React.createClass({

  render: function() {

    return (
        <div>
          <div>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Button component - UIkit documentation</title>
        <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon-precomposed" href="images/apple-touch-icon.png" />
        <link id="data-uikit-theme" rel="stylesheet" href="css/uikit.docs.min.css" />
        <link rel="stylesheet" href="css/docs.css" />
        <link rel="stylesheet" href="../vendor/highlight/highlight.css" />
        <nav className="tm-navbar uk-navbar uk-navbar-attached">
          <div className="uk-container uk-container-center">
            <a className="uk-navbar-brand uk-hidden-small" href="../index.html"><img className="uk-margin uk-margin-remove" src="images/logo_uikit.svg" width={90} height={30} title="UIkit" alt="UIkit" /></a>
            <ul className="uk-navbar-nav uk-hidden-small">
              <li><a href="documentation_get-started.html">Get Started</a></li>
              <li className="uk-active"><a href="core.html">Core</a></li>
              <li><a href="components.html">Components</a></li>
              <li><a href="customizer.html">Customizer</a></li>
              <li><a href="../showcase/index.html">Showcase</a></li>
            </ul>
            <a href="#tm-offcanvas" className="uk-navbar-toggle uk-visible-small" data-uk-offcanvas />
            <div className="uk-navbar-brand uk-navbar-center uk-visible-small"><img src="images/logo_uikit.svg" width={90} height={30} title="UIkit" alt="UIkit" /></div>
          </div>
        </nav>
        <div className="tm-middle">
          <div className="uk-container uk-container-center">
            <div className="uk-grid" data-uk-grid-margin>
              <div className="tm-sidebar uk-width-medium-1-4 uk-hidden-small">
                <ul className="tm-nav uk-nav" data-uk-nav>
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
                  <li className="uk-active"><a href="button.html">Button</a></li>
                  <li><a href="icon.html">Icon</a></li>
                  <li><a href="close.html">Close</a></li>
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
                <article className="uk-article">
                  <h1 className="uk-article-title">Button</h1>
                  <p className="uk-article-lead">Easily create nicely looking buttons, which come in different styles.</p>
                  <h2 id="usage"><a href="#usage" className="uk-link-reset">Usage</a></h2>
                  <p>To apply this component, add the <code>.uk-button</code> class to an <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> element. Now you have created a button. Add the <code>disabled</code> attribute to a <code>&lt;button&gt;</code> element to disable the button.</p>
                  <h3 className="tm-article-subtitle">Example</h3>
                  <p>
                    <a className="uk-button" href>Link</a>
                    <button className="uk-button" type="button">Button</button>
                    <button className="uk-button" type="button" disabled>Disabled</button>
                  </p>
                  <h3 className="tm-article-subtitle">Markup</h3>
                  <pre><code>&lt;a class="uk-button" href=""&gt;...&lt;/a&gt;
                      &lt;button class="uk-button" type="button"&gt;...&lt;/button&gt;
                      &lt;button class="uk-button" type="button" disabled&gt;...&lt;/button&gt;</code></pre>
                  <p><span className="uk-badge">NOTE</span> If you are displaying a number of buttons in a row, you can add a top margin to them, when they stack on smaller viewports. Just add the <code>data-uk-margin</code> attribute from the <a href="utility.html">Utility component</a> to their parent element.</p>
                  <hr className="uk-article-divider" />
                  <h2 id="color-modifiers"><a href="#color-modifiers" className="uk-link-reset">Color modifiers</a></h2>
                  <p>There are several color modifiers available. Just add one of the following classes to apply a different look.</p>
                  <div className="uk-overflow-container">
                    <table className="uk-table uk-text-nowrap">
                      <thead>
                        <tr>
                          <th>Example</th>
                          <th>Class</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><button className="uk-button uk-button-primary" type="button">Primary</button></td>
                          <td><code>.uk-button-primary</code></td>
                          <td>Emphasizes to identify the primary action in a set of buttons.</td>
                        </tr>
                        <tr>
                          <td><button className="uk-button uk-button-success" type="button">Success</button></td>
                          <td><code>.uk-button-success</code></td>
                          <td>Indicates a successful or positive action.</td>
                        </tr>
                        <tr>
                          <td><button className="uk-button uk-button-danger" type="button">Danger</button></td>
                          <td><code>.uk-button-danger</code></td>
                          <td>Indicates a dangerous or negative action.</td>
                        </tr>
                        <tr>
                          <td><a className="uk-button uk-button-link" href="#">Link</a></td>
                          <td><code>.uk-button-link</code></td>
                          <td>Deemphasizes to look like a link while maintaining button behavior.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <hr className="uk-article-divider" />
                  <h2 id="size-modifiers"><a href="#size-modifiers" className="uk-link-reset">Size modifiers</a></h2>
                  <p>Add the <code>.uk-button-mini</code>, <code>.uk-button-small</code> or <code>.uk-button-large</code> class to a button to make it smaller or larger.</p>
                  <p>
                    <button className="uk-button uk-button-mini" type="button">Mini button</button>
                    <button className="uk-button uk-button-mini uk-button-primary" type="button">Mini button</button>
                  </p>
                  <p>
                    <button className="uk-button uk-button-small" type="button">Small button</button>
                    <button className="uk-button uk-button-small uk-button-primary" type="button">Small button</button>
                  </p>
                  <p>
                    <button className="uk-button" type="button">Default button</button>
                    <button className="uk-button uk-button-primary" type="button">Default button</button>
                  </p>
                  <p>
                    <button className="uk-button uk-button-large" type="button">Large button</button>
                    <button className="uk-button uk-button-large uk-button-primary" type="button">Large button</button>
                  </p>
                  <hr className="uk-article-divider" />
                  <h3>Full width button</h3>
                  <p>Add the <code>.uk-width-1-1</code> class from the <a href="grid.html">Grid component</a> and the button will take up full width.</p>
                  <h3 className="tm-article-subtitle">Example</h3>
                  <p>
                    <button className="uk-button uk-button-large uk-width-1-1 uk-margin-small-bottom" type="button">Button</button>
                    <button className="uk-button uk-button-primary uk-button-large uk-width-1-1" type="button">Button</button>
                  </p>
                  <h3 className="tm-article-subtitle">Markup</h3>
                  <pre><code>&lt;button class="uk-button uk-width-1-1 uk-margin-small-bottom"&gt;...&lt;/button&gt;
                      &lt;button class="uk-button uk-width-1-1"&gt;...&lt;/button&gt;</code></pre>
                  <hr className="uk-article-divider" />
                  <h2 id="button-group"><a href="#button-group" className="uk-link-reset">Button group</a></h2>
                  <p>To create a button group, add the <code>.uk-button-group</code> class to a <code>&lt;div&gt;</code> element around the buttons. That's it! No further markup needed.</p>
                  <h3 className="tm-article-subtitle">Example</h3>
                  <div className="uk-margin">
                    <div className="uk-button-group">
                      <a className="uk-button" href="#">Link</a>
                      <button className="uk-button">Button</button>
                      <button className="uk-button">Button</button>
                    </div>
                  </div>
                  <div className="uk-margin">
                    <div className="uk-button-group">
                      <a className="uk-button uk-button-primary" href="#">Link</a>
                      <button className="uk-button uk-button-primary">Button</button>
                      <button className="uk-button uk-button-primary">Button</button>
                    </div>
                  </div>
                  <div className="uk-margin">
                    <div className="uk-button-group">
                      <a className="uk-button uk-button-success" href="#">Link</a>
                      <button className="uk-button uk-button-success">Button</button>
                      <button className="uk-button uk-button-success">Button</button>
                    </div>
                  </div>
                  <div className="uk-margin">
                    <div className="uk-button-group">
                      <a className="uk-button uk-button-danger" href="#">Link</a>
                      <button className="uk-button uk-button-danger">Button</button>
                      <button className="uk-button uk-button-danger">Button</button>
                    </div>
                  </div>
                  <h3 className="tm-article-subtitle">Markup</h3>
                  <pre><code>&lt;div class="uk-button-group"&gt;
                      &lt;a class="uk-button" href=""&gt;...&lt;/a&gt;
                      &lt;button class="uk-button"&gt;...&lt;/button&gt;
                      &lt;button class="uk-button"&gt;...&lt;/button&gt;
                      &lt;/div&gt;</code></pre>
                  <hr className="uk-article-divider" />
                  <h2 id="javascript"><a href="#javascript" className="uk-link-reset">JavaScript</a></h2>
                  <p>You can toggle button states via JavaScript. Just add the data attibute <code>data-uk-button</code>.</p>
                  <h3 className="tm-article-subtitle">Example</h3>
                  <button className="uk-button uk-button-primary" type="button" data-uk-button>Button</button>
                  <h3 className="tm-article-subtitle">Markup</h3>
                  <pre><code>&lt;button class="uk-button uk-button-primary" type="button" data-uk-button&gt;Button&lt;/button&gt;</code></pre>
                  <hr className="uk-article-divider" />
                  <h3>Checkbox buttons</h3>
                  <p>Toggle between a group of buttons like a checkbox by wrapping a <code>&lt;div&gt;</code> element with the data attribute <code>data-uk-button-checkbox</code> around them. This can also be applied to a button group.</p>
                  <h4 className="tm-article-subtitle">Example</h4>
                  <div className="uk-margin">
                    <div data-uk-button-checkbox>
                      <button className="uk-button">Button</button>
                      <button className="uk-button">Button</button>
                      <button className="uk-button">Button</button>
                    </div>
                  </div>
                  <div className="uk-margin">
                    <div className="uk-button-group" data-uk-button-checkbox>
                      <button className="uk-button">Button</button>
                      <button className="uk-button">Button</button>
                      <button className="uk-button">Button</button>
                    </div>
                  </div>
                  <h3 className="tm-article-subtitle">Markup</h3>
                  <pre><code>&lt;div data-uk-button-checkbox&gt;
                      &lt;button class="uk-button"&gt;...&lt;/button&gt;
                      &lt;button class="uk-button"&gt;...&lt;/button&gt;
                      &lt;button class="uk-button"&gt;...&lt;/button&gt;
                      &lt;/div&gt;</code></pre>
                  <hr className="uk-article-divider" />
                  <h3>Radio buttons</h3>
                  <p>Toggle between a group of buttons, like radio buttons, by wrapping a <code>div</code> element that uses <code>data-uk-button-radio</code> around them. This can also be applied to a button group.</p>
                  <h4 className="tm-article-subtitle">Example</h4>
                  <div className="uk-margin">
                    <div data-uk-button-radio>
                      <button className="uk-button">Button</button>
                      <button className="uk-button">Button</button>
                      <button className="uk-button">Button</button>
                    </div>
                  </div>
                  <div className="uk-margin">
                    <div className="uk-button-group" data-uk-button-radio>
                      <button className="uk-button">Button</button>
                      <button className="uk-button">Button</button>
                      <button className="uk-button">Button</button>
                    </div>
                  </div>
                  <h3 className="tm-article-subtitle">Markup</h3>
                  <pre><code>&lt;div data-uk-button-radio&gt;
                      &lt;button class="uk-button"&gt;...&lt;/button&gt;
                      &lt;button class="uk-button"&gt;...&lt;/button&gt;
                      &lt;button class="uk-button"&gt;...&lt;/button&gt;
                      &lt;/div&gt;</code></pre>
                  <hr className="uk-article-divider" />
                  <h2 id="button-with-dropdowns"><a href="#button-with-dropdowns" className="uk-link-reset">Button with dropdowns</a></h2>
                  <p>A button can be used to trigger a dropdown menu from the <a href="dropdown.html">Dropdown component</a>. Just add the <code>.uk-button-dropdown</code> class and the <code>data-uk-dropdown</code> attribute to a <code>&lt;div&gt;</code> element that contains the button and the dropdown itself.</p>
                  <h3 className="tm-article-subtitle">Example</h3>
                  <div className="uk-margin" data-uk-margin>
                    <div className="uk-button-dropdown" data-uk-dropdown>
                      <button className="uk-button">Hover <i className="uk-icon-caret-down" /></button>
                      <div className="uk-dropdown uk-dropdown-small">
                        <ul className="uk-nav uk-nav-dropdown">
                          <li><a href="#">Item</a></li>
                          <li><a href="#">Another item</a></li>
                          <li className="uk-nav-header">Header</li>
                          <li><a href="#">Item</a></li>
                          <li><a href="#">Another item</a></li>
                          <li className="uk-nav-divider" />
                          <li><a href="#">Separated item</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="uk-button-dropdown" data-uk-dropdown>
                      <button className="uk-button uk-button-primary">Hover <i className="uk-icon-caret-down" /></button>
                      <div className="uk-dropdown uk-dropdown-small">
                        <ul className="uk-nav uk-nav-dropdown">
                          <li><a href="#">Item</a></li>
                          <li><a href="#">Another item</a></li>
                          <li className="uk-nav-header">Header</li>
                          <li><a href="#">Item</a></li>
                          <li><a href="#">Another item</a></li>
                          <li className="uk-nav-divider" />
                          <li><a href="#">Separated item</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="uk-button-dropdown" data-uk-dropdown>
                      <button className="uk-button uk-button-success">Hover <i className="uk-icon-caret-down" /></button>
                      <div className="uk-dropdown uk-dropdown-small">
                        <ul className="uk-nav uk-nav-dropdown">
                          <li><a href="#">Item</a></li>
                          <li><a href="#">Another item</a></li>
                          <li className="uk-nav-header">Header</li>
                          <li><a href="#">Item</a></li>
                          <li><a href="#">Another item</a></li>
                          <li className="uk-nav-divider" />
                          <li><a href="#">Separated item</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="uk-button-dropdown" data-uk-dropdown>
                      <button className="uk-button uk-button-danger">Hover <i className="uk-icon-caret-down" /></button>
                      <div className="uk-dropdown uk-dropdown-small">
                        <ul className="uk-nav uk-nav-dropdown">
                          <li><a href="#">Item</a></li>
                          <li><a href="#">Another item</a></li>
                          <li className="uk-nav-header">Header</li>
                          <li><a href="#">Item</a></li>
                          <li><a href="#">Another item</a></li>
                          <li className="uk-nav-divider" />
                          <li><a href="#">Separated item</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="uk-button-dropdown" data-uk-dropdown>
                      <button className="uk-button" disabled>Hover <i className="uk-icon-caret-down" /></button>
                      <div className="uk-dropdown uk-dropdown-small">
                        <ul className="uk-nav uk-nav-dropdown">
                          <li><a href="#">Item</a></li>
                          <li><a href="#">Another item</a></li>
                          <li className="uk-nav-header">Header</li>
                          <li><a href="#">Item</a></li>
                          <li><a href="#">Another item</a></li>
                          <li className="uk-nav-divider" />
                          <li><a href="#">Separated item</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h3 className="tm-article-subtitle">Markup</h3>
                  <pre><code>&lt;!-- This is the container enabling the JavaScript --&gt;
                      &lt;div class="uk-button-dropdown" data-uk-dropdown&gt;
                      &lt;!-- This is the button toggling the dropdown --&gt;
                      &lt;button class="uk-button"&gt;...&lt;/button&gt;
                      &lt;!-- This is the dropdown --&gt;
                      &lt;div class="uk-dropdown uk-dropdown-small"&gt;
                      &lt;ul class="uk-nav uk-nav-dropdown"&gt;
                      &lt;li&gt;&lt;a href=""&gt;...&lt;/a&gt;&lt;/li&gt;
                      &lt;li&gt;&lt;a href=""&gt;...&lt;/a&gt;&lt;/li&gt;
                      &lt;/ul&gt;
                      &lt;/div&gt;
                      &lt;/div&gt;</code></pre>
                  <hr className="uk-article-divider" />
                  <h3>Button group with dropdowns</h3>
                  <p>Use button groups to split buttons into a standard action on the left and a dropdown toggle on the right. Just wrap a <code>&lt;div&gt;</code> element around the button and the dropdown and add the <code> data-uk-dropdown=&quot;mode 'click'&quot; </code> attribute. Of course, a dropdown can also be applied to a button within a button group.</p>
                  <h4 className="tm-article-subtitle">Example</h4>
                  <div className="uk-margin" data-uk-margin>
                    <div className="uk-button-group">
                      <button className="uk-button">Button</button>
                      <div data-uk-dropdown="{mode:'click'}">
                        <button className="uk-button"><i className="uk-icon-caret-down" /></button>
                        <div className="uk-dropdown uk-dropdown-small">
                          <ul className="uk-nav uk-nav-dropdown">
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Another item</a></li>
                            <li className="uk-nav-header">Header</li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Another item</a></li>
                            <li className="uk-nav-divider" />
                            <li><a href="#">Separated item</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="uk-button-group">
                      <button className="uk-button uk-button-primary">Button</button>
                      <div data-uk-dropdown="{mode:'click'}">
                        <button className="uk-button uk-button-primary"><i className="uk-icon-caret-down" /></button>
                        <div className="uk-dropdown uk-dropdown-small">
                          <ul className="uk-nav uk-nav-dropdown">
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Another item</a></li>
                            <li className="uk-nav-header">Header</li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Another item</a></li>
                            <li className="uk-nav-divider" />
                            <li><a href="#">Separated item</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="uk-button-group">
                      <button className="uk-button uk-button-success">Button</button>
                      <div data-uk-dropdown="{mode:'click'}">
                        <button className="uk-button uk-button-success"><i className="uk-icon-caret-down" /></button>
                        <div className="uk-dropdown uk-dropdown-small">
                          <ul className="uk-nav uk-nav-dropdown">
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Another item</a></li>
                            <li className="uk-nav-header">Header</li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Another item</a></li>
                            <li className="uk-nav-divider" />
                            <li><a href="#">Separated item</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="uk-button-group">
                      <button className="uk-button uk-button-danger">Button</button>
                      <div data-uk-dropdown="{mode:'click'}">
                        <button className="uk-button uk-button-danger"><i className="uk-icon-caret-down" /></button>
                        <div className="uk-dropdown uk-dropdown-small">
                          <ul className="uk-nav uk-nav-dropdown">
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Another item</a></li>
                            <li className="uk-nav-header">Header</li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Another item</a></li>
                            <li className="uk-nav-divider" />
                            <li><a href="#">Separated item</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="uk-button-group">
                      <button className="uk-button" disabled>Button</button>
                      <div data-uk-dropdown="{mode:'click'}">
                        <button className="uk-button" disabled><i className="uk-icon-caret-down" /></button>
                        <div className="uk-dropdown uk-dropdown-small">
                          <ul className="uk-nav uk-nav-dropdown">
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Another item</a></li>
                            <li className="uk-nav-header">Header</li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Another item</a></li>
                            <li className="uk-nav-divider" />
                            <li><a href="#">Separated item</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="tm-article-subtitle">Markup</h4>
                  <pre><code>&lt;div class="uk-button-group"&gt;
                      &lt;!-- This is a button --&gt;
                      &lt;button class="uk-button"&gt;...&lt;/button&gt;
                      &lt;!-- This is the container enabling the JavaScript --&gt;
                      &lt;div data-uk-dropdown="mode:'click'"&gt;
                      &lt;!-- This is the button toggling the dropdown --&gt;
                      &lt;a href="" class="uk-button"&gt;...&lt;/a&gt;
                      &lt;!-- This is the dropdown --&gt;
                      &lt;div class="uk-dropdown uk-dropdown-small"&gt;
                      &lt;ul class="uk-nav uk-nav-dropdown"&gt;
                      &lt;li&gt;&lt;a href=""&gt;...&lt;/a&gt;&lt;/li&gt;
                      &lt;li&gt;&lt;a href=""&gt;...&lt;/a&gt;&lt;/li&gt;
                      &lt;/ul&gt;
                      &lt;/div&gt;
                      &lt;/div&gt;
                      &lt;/div&gt;</code></pre>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div className="tm-footer">
          <div className="uk-container uk-container-center uk-text-center">
            <ul className="uk-subnav uk-subnav-line uk-flex-center">
              <li><a href="http://github.com/uikit/uikit">GitHub</a></li>
              <li><a href="http://github.com/uikit/uikit/issues">Issues</a></li>
              <li><a href="http://github.com/uikit/uikit/blob/master/CHANGELOG.md">Changelog</a></li>
              <li><a href="https://twitter.com/getuikit">Twitter</a></li>
            </ul>
            <div className="uk-panel">
              <p>Made by <a href="http://www.yootheme.com">YOOtheme</a> with love and caffeine.<br />Licensed under <a href="http://opensource.org/licenses/MIT">MIT license</a>.</p>
              <a href="../index.html"><img src="images/logo_uikit.svg" width={90} height={30} title="UIkit" alt="UIkit" /></a>
            </div>
          </div>
        </div>
        <div id="tm-offcanvas" className="uk-offcanvas">
          <div className="uk-offcanvas-bar">
            <ul className="uk-nav uk-nav-offcanvas uk-nav-parent-icon" data-uk-nav="{multiple:true}">
              <li className="uk-parent"><a href="#">Documentation</a>
                <ul className="uk-nav-sub">
                  <li><a href="documentation_get-started.html">Get started</a></li>
                  <li><a href="documentation_how-to-customize.html">How to customize</a></li>
                  <li><a href="documentation_layouts.html">Layout examples</a></li>
                  <li><a href="core.html">Core</a></li>
                  <li><a href="components.html">Components</a></li>
                  <li><a href="documentation_project-structure.html">Project structure</a></li>
                  <li><a href="documentation_less-sass.html">Less &amp; Sass files</a></li>
                  <li><a href="documentation_create-a-theme.html">Create a theme</a></li>
                  <li><a href="documentation_create-a-style.html">Create a style</a></li>
                  <li><a href="documentation_customizer-json.html">Customizer.json</a></li>
                  <li><a href="documentation_javascript.html">JavaScript</a></li>
                  <li><a href="documentation_custom-prefix.html">Custom prefix</a></li>
                </ul>
              </li>
              <li className="uk-nav-header">Core</li>
              <li className="uk-parent"><a href="#"><i className="uk-icon-wrench" /> Defaults</a>
                <ul className="uk-nav-sub">
                  <li><a href="base.html">Base</a></li>
                  <li><a href="print.html">Print</a></li>
                </ul>
              </li>
              <li className="uk-parent"><a href="#"><i className="uk-icon-th-large" /> Layout</a>
                <ul className="uk-nav-sub">
                  <li><a href="grid.html">Grid</a></li>
                  <li><a href="panel.html">Panel</a></li>
                  <li><a href="article.html">Article</a></li>
                  <li><a href="comment.html">Comment</a></li>
                  <li><a href="utility.html">Utility</a></li>
                  <li><a href="flex.html">Flex</a></li>
                  <li><a href="cover.html">Cover</a></li>
                </ul>
              </li>
              <li className="uk-parent"><a href="#"><i className="uk-icon-bars" /> Navigations</a>
                <ul className="uk-nav-sub">
                  <li><a href="nav.html">Nav</a></li>
                  <li><a href="navbar.html">Navbar</a></li>
                  <li><a href="subnav.html">Subnav</a></li>
                  <li><a href="breadcrumb.html">Breadcrumb</a></li>
                  <li><a href="pagination.html">Pagination</a></li>
                  <li><a href="tab.html">Tab</a></li>
                  <li><a href="thumbnav.html">Thumbnav</a></li>
                </ul>
              </li>
              <li className="uk-parent"><a href="#"><i className="uk-icon-check" /> Elements</a>
                <ul className="uk-nav-sub">
                  <li><a href="list.html">List</a></li>
                  <li><a href="description-list.html">Description list</a></li>
                  <li><a href="table.html">Table</a></li>
                  <li><a href="form.html">Form</a></li>
                </ul>
              </li>
              <li className="uk-parent uk-active"><a href="#"><i className="uk-icon-folder-open" /> Common</a>
                <ul className="uk-nav-sub">
                  <li><a href="button.html">Button</a></li>
                  <li><a href="icon.html">Icon</a></li>
                  <li><a href="close.html">Close</a></li>
                  <li><a href="badge.html">Badge</a></li>
                  <li><a href="alert.html">Alert</a></li>
                  <li><a href="thumbnail.html">Thumbnail</a></li>
                  <li><a href="overlay.html">Overlay</a></li>
                  <li><a href="text.html">Text</a></li>
                  <li><a href="animation.html">Animation</a></li>
                </ul>
              </li>
              <li className="uk-parent"><a href="#"><i className="uk-icon-magic" /> JavaScript</a>
                <ul className="uk-nav-sub">
                  <li><a href="dropdown.html">Dropdown</a></li>
                  <li><a href="modal.html">Modal</a></li>
                  <li><a href="offcanvas.html">Off-canvas</a></li>
                  <li><a href="switcher.html">Switcher</a></li>
                  <li><a href="toggle.html">Toggle</a></li>
                  <li><a href="scrollspy.html">Scrollspy</a></li>
                  <li><a href="smooth-scroll.html">Smooth scroll</a></li>
                </ul>
              </li>
              <li className="uk-nav-header">Components</li>
              <li className="uk-parent"><a href="#"><i className="uk-icon-th-large" /> Layout</a>
                <ul className="uk-nav-sub">
                  <li><a href="grid-js.html">Dynamic Grid</a></li>
                </ul>
              </li>
              <li className="uk-parent"><a href="#"><i className="uk-icon-bars" /> Navigations</a>
                <ul className="uk-nav-sub">
                  <li><a href="dotnav.html">Dotnav</a></li>
                  <li><a href="slidenav.html">Slidenav</a></li>
                  <li><a href="pagination-js.html">Dynamic Pagination</a></li>
                </ul>
              </li>
              <li className="uk-parent"><a href="#"><i className="uk-icon-folder-open" /> Common</a>
                <ul className="uk-nav-sub">
                  <li><a href="form-advanced.html">Form advanced</a></li>
                  <li><a href="form-file.html">Form file</a></li>
                  <li><a href="form-password.html">Form password</a></li>
                  <li><a href="form-select.html">Form select</a></li>
                  <li><a href="placeholder.html">Placeholder</a></li>
                  <li><a href="progress.html">Progress</a></li>
                </ul>
              </li>
              <li className="uk-parent"><a href="#"><i className="uk-icon-magic" /> JavaScript</a>
                <ul className="uk-nav-sub">
                  <li><a href="lightbox.html">Lightbox</a></li>
                  <li><a href="autocomplete.html">Autocomplete</a></li>
                  <li><a href="datepicker.html">Datepicker</a></li>
                  <li><a href="htmleditor.html">HTML editor</a></li>
                  <li><a href="slideshow.html">Slideshow</a></li>
                  <li><a href="accordion.html">Accordion</a></li>
                  <li><a href="notify.html">Notify</a></li>
                  <li><a href="search.html">Search</a></li>
                  <li><a href="nestable.html">Nestable</a></li>
                  <li><a href="sortable.html">Sortable</a></li>
                  <li><a href="sticky.html">Sticky</a></li>
                  <li><a href="timepicker.html">Timepicker</a></li>
                  <li><a href="tooltip.html">Tooltip</a></li>
                  <li><a href="upload.html">Upload</a></li>
                </ul>
              </li>
              <li className="uk-nav-divider" />
              <li><a href="../showcase/index.html">Showcase</a></li>
            </ul>
          </div>
        </div>
      </div>

          <Button primary={true}>Submit</Button>
          <Button success={true}>Submit</Button>
          <Button danger={true}>Submit</Button>
          <Button link={true}>Submit</Button>
          <Button type="submit">Submit</Button>
        </div>
    );
  }

});

module.exports = ButtonsPage;