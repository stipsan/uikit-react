var React = require('react');
var {Close} = require('uikit-react');
var Example = require('../example.js');

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
                  <Example uikit={['Close', 'Button']} initialState={{closed: false}} codeText={`
        {this.state.closed 
           ? <Button onClick={() => {this.setState({closed: false})}}>Undo!</Button> 
           : <div className="uk-alert uk-alert-success">
               <Close onClick={() => {this.setState({closed: true})}} />
               <p>This is a alert using an a element as close button.</p>
             </div>
         }
                    `} />
                </article>
    );
  }

});

module.exports = ClosePage;