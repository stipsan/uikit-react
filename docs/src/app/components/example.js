import React from 'react';

class LoadingExample extends React.Component {
  render() {
    return <div>Loading…</div>
  }
}

export default class Example extends React.Component {

  state = {component: false}

  static defaultProps = {name: 'Examples', uikit: [''], initialState: false}
  
  componentDidMount() {
    console.log('The component mounted');
    require.ensure([], (require) => {
      console.log('live editor loaded');
      let ReactPlayground = require('../live_editor.js');
      this.setState({component: ReactPlayground});
    })
  }

  render() {
    console.log(this.state.component);
    if(!this.state.component) return <LoadingExample />;
    
    var getInitialState = '';
    
    if(this.props.initialState) {
      getInitialState = `
  state = ${JSON.stringify(this.props.initialState)}
  `;
    }
    
    return React.createElement(this.state.component, {codeText: `
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
        `});
  }

}