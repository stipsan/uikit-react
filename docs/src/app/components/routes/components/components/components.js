import React from 'react';

export default class ComponentsPage extends React.Component {

  static loadProps(params, cb) {
    cb(null, {});
  }

  render() {

    return <div className="uk-article">
      <h1 className="uk-article-title">Components</h1>
      <p className="uk-article-lead">Here you'll find all the UIkit React components too large to ship with uikit-react itself.</p>
    </div>;
  }

}