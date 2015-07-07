import React from 'react';
import {TransitionGroup as UikitTransitionGroup} from 'uikit-react';
import Example from '../example.js';

var AnimationPage = React.createClass({

  render: function() {

    return (
                <article className="uk-article">
                  <h1 className="uk-article-title">Animation</h1>
                  <p className="uk-article-lead">
                    Animating transitions in React can be a challenging when you're still new to React.
                  </p>
                  <p>You don't know yet that CSSTransitionGroup in react/addons is affected by a multitude of browser bugs with <a href="https://github.com/facebook/react/issues/1326">ontransitionend events not firing</a>.
                  You may stumble upon a <a href="http://khan.github.io/react-components/#timeout-transition-group">great fix</a> by the fine folks at Khan Academy</p>
                <p>If you just want to use stuff like Animate.css without too much hassle. If that's you then this is for you.</p>
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

module.exports = AnimationPage;