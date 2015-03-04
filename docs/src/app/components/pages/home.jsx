var React = require('react');
var Router = require('react-router');
var {Button, Close} = require('uikit');

var HomePage = React.createClass({

  mixins: [Router.Navigation],

  render: function() {

    return (
      <div>
        <div>
          <Button primary={true}>Submit</Button>
          <Button success={true}>Submit</Button>
          <Button danger={true}>Submit</Button>
        </div>
        <div>
          <h2>Close:</h2>
          <Close></Close>
          <Close alt={true}></Close>
        </div>
      </div>
    );
  }

});

module.exports = HomePage;