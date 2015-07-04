var React = require('react');
var {Button} = require('uikit-react');
var Example = require('../example.jsx');

var ButtonsPage = React.createClass({

  render: function() {

    return (
                <article className="uk-article">
                  <h1 className="uk-article-title">Button</h1>
                                      
                  <p className="uk-article-lead">Easily create nicely looking buttons, which come in different styles.</p>
                    
                  <h2 id="usage"><a href="#usage" className="uk-link-reset">Usage</a></h2>
                  <p>To apply this component, add the <code>.uk-button</code> class to an <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> element. Now you have created a button. Add the <code>disabled</code> attribute to a <code>&lt;button&gt;</code> element to disable the button.</p>
                  <Example uikit={['Button']} codeText={`
        <Button primary={true}>Submit</Button>
        <Button success={true}>Submit</Button>
        <Button danger={true}>Submit</Button>
        <Button link={true}>Submit</Button>
        <Button type="submit">Submit</Button>
                  `} />
                  
                <Example name="Buttons" uikit={['Button']} codeText={`
        <a className="uk-button">Link</a>
        <Button>Button</Button>
        <Button disabled>Button</Button>
                `} />
                  <h3 className="tm-article-subtitle">Example</h3>
                  <p>
                    <a className="uk-button" href>Link</a>
                    <Button>Button</Button>
                    <Button disabled>Button</Button>
                  </p>
                  <h3 className="tm-article-subtitle">Markup</h3>
                  <p><span className="uk-badge">NOTE</span> If you are displaying a number of buttons in a row, you can add a top margin to them, when they stack on smaller viewports. Just add the <code>data-uk-margin</code> attribute from the <a href="utility.html">Utility component</a> to their parent element.</p>
                  <hr className="uk-article-divider" />
                  <h2 id="color-modifiers"><a href="#color-modifiers" className="uk-link-reset">Color modifiers</a></h2>
                  <p>There are several color modifiers available. Just add one of the following classes to apply a different look.</p>
                  <div className="uk-overflow-container">
                    <table className="uk-table uk-text-nowrap">
                      <thead>
                        <tr>
                          <th>Example</th>
                          <th>Property</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><Button primary>Primary</Button></td>
                          <td><code>primary</code></td>
                          <td>Emphasizes to identify the primary action in a set of buttons.</td>
                        </tr>
                        <tr>
                          <td><Button success>Success</Button></td>
                          <td><code>success</code></td>
                          <td>Indicates a successful or positive action.</td>
                        </tr>
                        <tr>
                          <td><Button danger>Danger</Button></td>
                          <td><code>danger</code></td>
                          <td>Indicates a dangerous or negative action.</td>
                        </tr>
                        <tr>
                          <td><Button link>Link</Button></td>
                          <td><code>link</code></td>
                          <td>Deemphasizes to look like a link while maintaining button behavior.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <hr className="uk-article-divider" />
                  <h2 id="size-modifiers"><a href="#size-modifiers" className="uk-link-reset">Size modifiers</a></h2>
                  <p>Add the <code>mini</code>, <code>small</code> or <code>large</code> properties to a button to make it smaller or larger.</p>
                  <p>
                    <Button mini>Mini button</Button>
                    <Button mini primary>Mini button</Button>
                  </p>
                  <p>
                    <Button small>Small button</Button>
                    <Button small primary>Small button</Button>
                  </p>
                  <p>
                    <Button>Default button</Button>
                    <Button primary>Default button</Button>
                  </p>
                  <p>
                    <Button large>Large button</Button>
                    <Button large primary>Large button</Button>
                  </p>
                  <hr className="uk-article-divider" />
                  <h3>Full width button</h3>
                  <p>Add the <code>.uk-width-1-1</code> class from the <a href="grid.html">Grid component</a> and the button will take up full width.</p>
                  <h3 className="tm-article-subtitle">Example</h3>
                  <p>
                    <Button large className="uk-width-1-1 uk-margin-small-bottom">Button</Button>
                    <Button large className="uk-button uk-button-primary uk-button-large uk-width-1-1">Button</Button>
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
                      <Button className="uk-button">Button</Button>
                      <Button className="uk-button">Button</Button>
                    </div>
                  </div>
                  <div className="uk-margin">
                    <div className="uk-button-group">
                      <a className="uk-button uk-button-primary" href="#">Link</a>
                      <Button className="uk-button uk-button-primary">Button</Button>
                      <Button className="uk-button uk-button-primary">Button</Button>
                    </div>
                  </div>
                  <div className="uk-margin">
                    <div className="uk-button-group">
                      <a className="uk-button uk-button-success" href="#">Link</a>
                      <Button className="uk-button uk-button-success">Button</Button>
                      <Button className="uk-button uk-button-success">Button</Button>
                    </div>
                  </div>
                  <div className="uk-margin">
                    <div className="uk-button-group">
                      <a className="uk-button uk-button-danger" href="#">Link</a>
                      <Button className="uk-button uk-button-danger">Button</Button>
                      <Button className="uk-button uk-button-danger">Button</Button>
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
                  <Button className="uk-button uk-button-primary" type="button" data-uk-button>Button</Button>
                  <h3 className="tm-article-subtitle">Markup</h3>
                  <pre><code>&lt;button class="uk-button uk-button-primary" type="button" data-uk-button&gt;Button&lt;/button&gt;</code></pre>
                  <hr className="uk-article-divider" />
                  <h3>Checkbox buttons</h3>
                  <p>Toggle between a group of buttons like a checkbox by wrapping a <code>&lt;div&gt;</code> element with the data attribute <code>data-uk-button-checkbox</code> around them. This can also be applied to a button group.</p>
                  <h4 className="tm-article-subtitle">Example</h4>
                  <div className="uk-margin">
                    <div data-uk-button-checkbox>
                      <Button className="uk-button">Button</Button>
                      <Button className="uk-button">Button</Button>
                      <Button className="uk-button">Button</Button>
                    </div>
                  </div>
                  <div className="uk-margin">
                    <div className="uk-button-group" data-uk-button-checkbox>
                      <Button className="uk-button">Button</Button>
                      <Button className="uk-button">Button</Button>
                      <Button className="uk-button">Button</Button>
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
                      <Button className="uk-button">Button</Button>
                      <Button className="uk-button">Button</Button>
                      <Button className="uk-button">Button</Button>
                    </div>
                  </div>
                  <div className="uk-margin">
                    <div className="uk-button-group" data-uk-button-radio>
                      <Button className="uk-button">Button</Button>
                      <Button className="uk-button">Button</Button>
                      <Button className="uk-button">Button</Button>
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
                      <Button className="uk-button">Hover <i className="uk-icon-caret-down" /></Button>
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
                      <Button className="uk-button uk-button-primary">Hover <i className="uk-icon-caret-down" /></Button>
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
                      <Button className="uk-button uk-button-success">Hover <i className="uk-icon-caret-down" /></Button>
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
                      <Button className="uk-button uk-button-danger">Hover <i className="uk-icon-caret-down" /></Button>
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
                      <Button className="uk-button" disabled>Hover <i className="uk-icon-caret-down" /></Button>
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
                      <Button className="uk-button">Button</Button>
                      <div data-uk-dropdown="{mode:'click'}">
                        <Button className="uk-button"><i className="uk-icon-caret-down" /></Button>
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
                      <Button className="uk-button uk-button-primary">Button</Button>
                      <div data-uk-dropdown="{mode:'click'}">
                        <Button className="uk-button uk-button-primary"><i className="uk-icon-caret-down" /></Button>
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
                      <Button className="uk-button uk-button-success">Button</Button>
                      <div data-uk-dropdown="{mode:'click'}">
                        <Button className="uk-button uk-button-success"><i className="uk-icon-caret-down" /></Button>
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
                      <Button className="uk-button uk-button-danger">Button</Button>
                      <div data-uk-dropdown="{mode:'click'}">
                        <Button className="uk-button uk-button-danger"><i className="uk-icon-caret-down" /></Button>
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
                      <Button className="uk-button" disabled>Button</Button>
                      <div data-uk-dropdown="{mode:'click'}">
                        <Button className="uk-button" disabled><i className="uk-icon-caret-down" /></Button>
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
    );
  }

});

module.exports = ButtonsPage;