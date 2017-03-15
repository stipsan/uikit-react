import { storiesOf, action } from '@kadira/storybook'
import { Button } from 'uikit-react'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
Button.displayName = 'Button'

storiesOf('Button', module)
  .addWithInfo('Basic Usage', '', () => (
    <div className="uk-margin-bottom">
      <Button primary onClick={action('onClick Primary')}>Primary</Button> &nbsp;
      <Button success onClick={action('onClick Success')}>Success</Button> &nbsp;
      <Button danger onClick={action('onClick Danger')}>Danger</Button> &nbsp;
      <Button link onClick={action('onClick Link')}>Link</Button> &nbsp;
      <Button type="submit" onClick={action('onClick Submit')}>Submit</Button>
    </div>
  ), { header: false, inline: true, propTables: [Button] })
