import { storiesOf, action } from '@kadira/storybook'
import { Select } from 'uikit-react'

storiesOf('Select', module)
  .addWithInfo(
    'Basic Usage',
    `
      This is the basic usage examples
    `,
    () => (
      <form className="uk-form">
        <Select options={['Color', 'Size', 'Material']} />
      </form>
  ),
  { inline: true, propTables: [Select] }
)
