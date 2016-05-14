import React, { PropTypes } from 'react'

const LoadingExample = ({ name }) => <div className="uk-alert uk-alert-warning">
  {`Loading <${name} />...`}
</div>
LoadingExample.propTypes = {
  name: PropTypes.string.isRequired,
}

export default class Example extends React.Component {

  static propTypes = {
    codeText: PropTypes.string.isRequired,
    import: PropTypes.arrayOf(PropTypes.object.isRequired),
    initialState: PropTypes.object,
    name: PropTypes.string,
    uikit: PropTypes.arrayOf(
      PropTypes.oneOf(['Button', 'Close', 'Alert', 'SimpleTransitionGroup'])
    ),

  }

  static defaultProps = { name: 'Example', initialState: false }

  state = { component: false }

  componentDidMount() {
    require.ensure([], require => {
      let ReactPlayground = require('../live_editor.js') // eslint-disable-line

      this.setState({ component: ReactPlayground }) // eslint-disable-line
    })
  }

  render() {
    if (!this.state.component) return <LoadingExample name={this.props.name} />

    let getInitialState = ''

    if (this.props.initialState) {
      getInitialState = `
  state = ${JSON.stringify(this.props.initialState)}
  `
    }

    return React.createElement(this.state.component, { codeText: this.props.uikit ? `
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
        ` : this.props.codeText })
  }

}
