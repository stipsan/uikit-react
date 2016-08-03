import { storiesOf, action } from '@kadira/storybook'
import { Select } from 'uikit-react'

storiesOf('Select', module)
  .addWithInfo(
    'Basic Usage',
    `
      This is the basic usage examples
    `,
    () => (
      <div>
        <Select options={['Color', 'Size', 'Material']} />
      </div>
  ),
  { inline: true, propTables: [Select] }
)
