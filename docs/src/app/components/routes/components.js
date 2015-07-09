var React = require('react');
//var Router = require('react-router');
var ButtonsPage = require('./buttons.js');
var ClosePage = require('./close.js');

var HomePage = React.createClass({

  //mixins: [Router.Navigation],

  render: function() {

    return <div className="uk-article">
      <h1 className="uk-article-title">Components</h1>
      <p className="uk-article-lead">Here you'll find all the UIkit React components too large to ship with uikit-react itself.</p>
    </div>;
  }

});

module.exports = HomePage;