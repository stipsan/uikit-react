import React from 'react';
import ReactPlayground from '../live_editor.js';

var Example = React.createClass({

  getDefaultProps: function(){
    return {name: 'Example', uikit: [''], initialState: false};
  },

  render: function() {
    
    var getInitialState = '';
    
    if(this.props.initialState) {
      getInitialState = `
  getInitialState: function(){
    return ${JSON.stringify(this.props.initialState)};
  },`;
    }
    
    return <ReactPlayground codeText={`
var {${this.props.uikit.join(', ')}} = UIkitReact;
              
var ${this.props.name} = React.createClass({
  ${getInitialState}
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