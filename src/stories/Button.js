import { storiesOf } from '@kadira/storybook'
import { Button } from 'uikit-react'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
Button.displayName = 'Button'

storiesOf('Button', module)
  .addWithInfo('Basic Usage', '', () => (
    <div className="uk-margin-bottom">
      <Button primary>Primary</Button>
      &nbsp;
      <Button success>Success</Button>
      &nbsp;
      <Button danger>Danger</Button>
      &nbsp;
      <Button link>Link</Button>
      &nbsp;
      <Button type="submit">Submit</Button>
    </div>
  ), { header: false, inline: true, propTables: [Button] })
