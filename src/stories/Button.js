import { storiesOf } from '@kadira/storybook'
import { Button } from 'uikit-react'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
Button.displayName = 'Button'

storiesOf('Button', module)
  .addWithInfo('Basic Usage', '', () => (
    <div className="uk-margin-bottom">
      <Button primary>Primary</Button>
      <Button success>Success</Button>
      <Button danger>Danger</Button>
      <Button link>Link</Button>
      <Button type="submit">Submit</Button>
    </div>
  ), { header: false, inline: true, propTables: [Button] })
