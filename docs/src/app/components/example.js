import React from 'react';
import ReactPlayground from '../live_editor.js';

var Example = React.createClass({

  getInitialState: function(){
    return {es7: false};
  },

  getDefaultProps: function(){
    return {name: 'Example', uikit: [''], initialState: false};
  },
  
  handleModeChange: function(event){
    this.setState({es7: !this.state.es7});
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
let {${this.props.uikit.join(', ')}} = UIkitReact;
              
let ${this.props.name} = React.createClass({
  ${getInitialState}
  render: function(){
    return (
      <div>
        ${this.props.codeText}
      </div>
    );
  }
});

ReactDOM.render(<${this.props.name}/>, mountNode);
        `} />;
  }

});

module.exports = Example;