import { storiesOf } from '@kadira/storybook'
import { Button } from 'uikit-react'

storiesOf('Button', module)
  .addWithInfo(
    'Basic Usage',
    `
      This is the basic usage with the button with providing a label to show the text.
    `,
    () => (
      <div>
        <Button primary>Submit</Button> &nbsp;
        <Button success>Submit</Button> &nbsp;
        <Button danger>Submit</Button> &nbsp;
        <Button link>Submit</Button> &nbsp;
        <Button type="submit">Submit</Button>
      </div>
  ),
  { inline: true, propTables: [Button] }
)
