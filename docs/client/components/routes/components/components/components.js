import React from 'react';

export default class ComponentsPage extends React.Component {

  render() {

    return <div className="tm-middle">
        <div className="uk-container uk-container-center">
          <div className="uk-grid">
            <div className="tm-sidebar uk-width-medium-1-5 uk-hidden-small">
              <ul className="tm-nav uk-nav">

              </ul>
            </div>
            <div className="tm-main uk-width-medium-4-5">
	             <div className="uk-article">
			      <h1 className="uk-article-title">Components</h1>
			      <p className="uk-article-lead">Here you'll find all the UIkit React components too large to ship with uikit-react itself.</p>
			    </div>
            </div>
          </div>
        </div>
      </div>;
  }

}