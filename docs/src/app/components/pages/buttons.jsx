var React = require('react');
var {Button} = require('uikit');

var ButtonsPage = React.createClass({

  render: function() {

    return (
        <div>
          <Button primary={true}>Submit</Button>
          <Button success={true}>Submit</Button>
          <Button danger={true}>Submit</Button>
          <Button link={true}>Submit</Button>
          <Button type="submit">Submit</Button>
        </div>
    );
  }

});

module.exports = ButtonsPage;