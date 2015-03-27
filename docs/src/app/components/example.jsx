var React = require('react');

var Example = React.createClass({

  getDefaultProps: function(){
    return {name: 'Example', uikit: ['']};
  },

  render: function() {
    
    return <ReactPlayground codeText={`
var {${this.props.uikit.join(', ')}} = uikit;
              
var ${this.props.name} = React.createClass({
  render: function(){
    return (
      <div>
        ${this.props.codeText}
      </div>
    );
  }
});

React.render(<${this.props.name}/>, mountNode);
        `} />;
  }

});

module.exports = Example;