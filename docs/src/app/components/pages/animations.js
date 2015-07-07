import React from 'react';
import {TransitionGroup as UikitTransitionGroup} from 'uikit-react';
import Example from '../example.js';

export default class AnimationPage extends React.Component{
  render() {

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
            <Example uikit={['TransitionGroup']} initialState={{items: [1,2,3,4,5,6,7,8,9], next: 10}} codeText={`
              <div className="uk-grid uk-text-center">
                  {this.state.items.map((item, key) => <div className="bounceIn animated uk-width-medium-1-5 uk-margin-bottom">
                    <div className="uk-panel uk-panel-box uk-margin-bottom" 
                         style={{minHeight: 20}} 
                         onClick={function(i){
                           this.state.items.splice(i, 1), this.setState(this.state);
                    }.bind(this, key)}>
                      <h1>{item}</h1>
                    </div>
                  </div>)}
                  <div className="uk-width-medium-1-5 uk-margin-bottom" style={{opacity: 0.6}}>
                    <div className="uk-panel uk-panel-box uk-margin-bottom" 
                         style={{minHeight: 20}} 
                         onClick={function(i){
                           this.state.items.push(this.state.next++), this.setState(this.state);
                    }.bind(this)}>
                      <h1><i className="uk-icon-plus-circle"></i></h1>
                    </div>
                  </div>
              </div>
            `} />
          <p>If you're more interested in using the animations that ship with UIkit, stop worrying and just use it <a href="http://getuikit.com/docs/animation.html">like you always have</a>.</p>
          </article>
    );
  }
};