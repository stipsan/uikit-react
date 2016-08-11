// import Option from 'uikit-react/Select/Option'
// import Value from 'uikit-react/Select/Value'

import { storiesOf, action } from '@kadira/storybook'
import { cloneElement, Component, PropTypes } from 'react'
import { Select } from 'uikit-react'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
Select.displayName = 'Select'

class Form extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    defaultValue: PropTypes.any,
  }
  static props = {
    defaultValue: null,
  }
  state = {
    value: this.props.defaultValue,
  }
  logChange = action('onChange')
  handleChange = value => {
    this.setState({ value })
    this.logChange(value)
  }
  render() {
    return (
      <form className="uk-form uk-width-1-2">
        {cloneElement(this.props.children, {
          value: this.state.value,
          onChange: this.handleChange,
        })}
      </form>
    )
  }
}

storiesOf('Select', module)
  .addWithInfo('Basic Usage', '', () => (
    <div className="uk-grid uk-margin-bottom">
      <Form>
        <Select
          allowCreate
          options={[
            { value: 1, label: 'Color' },
            { value: 2, label: 'Size' },
            { value: 3, label: 'Material' },
          ]}
        />
      </Form>
      <Form defaultValue={[]}>
        <Select
          allowCreate
          multi
          options={[
            { value: 1, label: 'Red' },
            { value: 2, label: 'Green' },
            { value: 3, label: 'Blue' },
          ]}
        />
      </Form>
    </div>
  ), { header: false, inline: true, propTables: [/* Value, Option, */Select] })
