import React from 'react';
import ReactPlayground from '../live_editor.js';

export default class Example extends React.Component {

  state = {es7: false}

  static defaultProps = {name: 'Example', uikit: [''], initialState: false}
  
  handleModeChange(event) {
    this.setState({es7: !this.state.es7});
  }

  render() {
    
    var getInitialState = '';
    
    if(this.props.initialState) {
      getInitialState = `
  state = ${JSON.stringify(this.props.initialState)}
  `;
    }
    
    return <ReactPlayground codeText={`
let {${this.props.uikit.join(', ')}} = UIkitReact;
              
class ${this.props.name} extends React.Component {
  ${getInitialState}
  render() {
    return <div>
        ${this.props.codeText}
      </div>;
  }
};

ReactDOM.render(<${this.props.name}/>, mountNode);
        `} />;
  }

}