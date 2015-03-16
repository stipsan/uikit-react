var React = require('react');
var {Close} = require('uikit');

var ClosePage = React.createClass({

  render: function() {

    return (
      <div>
        <h2>Close:</h2>
        <Close></Close>
        <Close alt={true}></Close>
      </div>
    );
  }

});

module.exports = ClosePage;