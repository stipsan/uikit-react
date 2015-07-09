import React from 'react';

export default class Gettingstarted extends React.Component {

  static loadProps(params, cb) {
    setTimeout(() => {
      cb(null, {})
    }, 1000);
  }
    
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
            </div>
          </div>
        </div>
      </div>
    );
  }
};