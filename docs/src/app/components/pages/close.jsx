var React = require('react');
var {Close} = require('uikit');
var Example = require('../example.jsx');

var ClosePage = React.createClass({

  render: function() {

    return (
                <article className="uk-article">
                  <h1 className="uk-article-title">Close</h1>
                  <p className="uk-article-lead">
Defines styles for a close button that can be combined with different components.
</p>

                  <h2 id="usage">
<a href="#usage" className="uk-link-reset">Usage</a>
</h2>
                  <p>
To apply this component, add the <code>.uk-close</code> class to an <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> element.
</p>
                  <Example uikit={['Close']} codeText={`
        <Close />
                  `} />
                  <hr className="uk-article-divider" />
                  <h2 id="style-modifier">
<a
href="#style-modifier"
className="uk-link-reset">
Style modifier
</a>
</h2>
                  <p>
Add the <code>.uk-close-alt</code> class to apply an alternative styling to the close button.
</p>
                  <Example uikit={['Close']} codeText={`
        <Close alt={true} />
                  `} />
                  <hr className="uk-article-divider" />
                  <h2 id="close-in-alerts">
<a
href="#close-in-alerts"
className="uk-link-reset">
Close in alerts
</a>
</h2>
                  <p>This is an example of how this component is used with an alert box from the <a href="alert.html">Alert component</a>.</p>
                  <Example uikit={['Close']} codeText={`
        <div className="uk-alert uk-alert-success">
          <Close />
          <p>This is a alert using an a element as close button.</p>
        </div>
                    `} />
                  <hr className="uk-article-divider" />
                  <h2 id="close-in-modals">
<a
href="#close-in-modals"
className="uk-link-reset">
Close in modals
</a>
</h2>
                  <p>This is an example of how this component is used with the <a href="modal.html">Modal component</a>.</p>
                  <h3 className="tm-article-subtitle">Example</h3>
                  <p>
                    <button
className="uk-button"
data-uk-modal="{target:'#modal'}">Button</button>
                  </p>
                  <div id="modal" className="uk-modal">
                    <div className="uk-modal-dialog uk-modal-dialog-lightbox">
                      <button
type="button"
className="uk-modal-close uk-close uk-close-alt" />
                      <img
src="images/placeholder_600x400.svg"
width={600}
height={400}
alt />
                    </div>
                  </div>
                </article>
    );
  }

});

module.exports = ClosePage;