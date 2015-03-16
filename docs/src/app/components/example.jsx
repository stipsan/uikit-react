var React = require('react');

var CodeBlock = React.createClass({

  render: function() {
    
    return <pre><code>{this.props.value}</code></pre>;
  }

});

module.exports = CodeBlock;