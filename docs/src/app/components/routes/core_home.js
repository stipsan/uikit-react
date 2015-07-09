var React = require('react');

var CoreHomePage = React.createClass({

  render: function() {

    return (
      <div className="uk-article">
        <h1 className="uk-article-title">Core</h1>
        <p className="uk-article-lead">All UIkit core components at a glance. These are all included when you run npm install uikit-react, bigger components are split up into stand-alone components.</p>
      </div>
    );
  }

});

module.exports = CoreHomePage;