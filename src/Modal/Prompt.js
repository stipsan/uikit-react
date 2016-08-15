import { Component } from 'react'

export default class Prompt extends Component {

  static defaultProps = {
    isOpen: false,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen === false && this.props.isOpen === true) {
      this.input.focus()
    }
  }

  render() {
    return (
      <div className="uk-margin-small-top uk-modal-content uk-form">
        <p>
          <input
            className="uk-width-1-1"
            ref={node => {
              if (node) {
                this.input = node
              }
            }}
            type="text"
          />
        </p>
      </div>
    )
  }
}
