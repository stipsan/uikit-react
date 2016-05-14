import React from 'react';

export default class Gettingstarted extends React.Component {
    
  render() {
    return (
      <div className="tm-middle">
        <div className="uk-container uk-container-center">
          <div className="uk-grid">
            <div className="tm-sidebar uk-width-medium-1-5 uk-hidden-small">
              <ul className="tm-nav uk-nav">
                <li className="uk-nav-header">Install</li>
                <li>npm</li>
                <li>bower</li>
                <li>browserify</li>
              </ul>
            </div>
            <div className="tm-main uk-width-medium-4-5">
              @TODO
              <p>
              Grab the CSS from <a href="http://getuikit.com" target="_blank">UIkit</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};