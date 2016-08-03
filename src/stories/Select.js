// import Option from 'uikit-react/Select/Option'
// import Value from 'uikit-react/Select/Value'

import { storiesOf, action } from '@kadira/storybook'
import { cloneElement, Component } from 'react'
import { Select } from 'uikit-react'

class Form extends Component {
  state = {
    value: '',
  }
  handleChange = ({ value }) => this.setState({ value }, () => action('onChange')(value))
  render() {
    return (
      <form className="uk-form">
        {cloneElement(this.props.children, {
          value: this.state.value,
          onChange: this.handleChange,
        })}
      </form>
    )
  }
}

storiesOf('Select', module)
  .addWithInfo(
    'Basic Usage',
    `
      This is the basic usage examples
    `,
    () => (
      <Form>
        <Select
          options={[
            { value: 1, label: 'Color' },
            { value: 2, label: 'Size' },
            { value: 3, label: 'Material' },
          ]}
        />
      </Form>
  ),
  { inline: true, propTables: [/* Value, Option, */Select] }
)
