var React = require('react');

var Example = React.createClass({

  render: function() {
    
    return <div>
      <h3 className="tm-article-subtitle">Example</h3>
      {this.props.children}
      <h3 className="tm-article-subtitle">Markup</h3>
      <pre><code>{React.renderToString(React.Children.only(this.props.children))}</code></pre>
    </div>;
  }

});

module.exports = Example;