var React = require('react');
var Router = require('react-router');
var {Button} = require('uikit');

var HomePage = React.createClass({

  mixins: [Router.Navigation],

  render: function() {

    return (
      <div>
        <Button primary={true}>Submit</Button>
        <Button success={true}>Submit</Button>
        <Button danger={true}>Submit</Button>
      </div>
    );
  }

});

module.exports = HomePage;