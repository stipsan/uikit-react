import { storiesOf, action } from '@kadira/storybook'
import { Button } from 'uikit-react'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
Button.displayName = 'Button'

storiesOf('Button', module)
  .addWithInfo('Basic Usage', '', () => (
    <div className="uk-margin-bottom">
      <Button onClick={action('onClick Default')}>Default</Button>
      &nbsp;
      <Button disabled>Default Disabled</Button>
    </div>
  ), { header: false, inline: true, propTables: [Button] })

  .addWithInfo('Style modifiers', '', () => (
    <div className="uk-margin-bottom">
      <Button onClick={action('onClick Default')}>Default</Button>
      &nbsp;
      <Button primary onClick={action('onClick Primary')}>Primary</Button>
      &nbsp;
      <Button secondary onClick={action('onClick Primary')}>Secondary</Button>
      &nbsp;
      <Button danger onClick={action('onClick Danger')}>Danger</Button>
      &nbsp;
      <Button text onClick={action('onClick Danger')}>Text</Button>
      &nbsp;
      <Button link onClick={action('onClick Link')}>Link</Button>
      &nbsp;
    </div>
  ), { header: false, inline: true, propTables: [Button] })

  .addWithInfo('Size modifiers', '', () => (
    <div className="uk-margin-bottom">
      <Button small onClick={action('onClick Success')}>SMALL BUTTON</Button>
      &nbsp;
      <Button primary small onClick={action('onClick Success')}>SMALL BUTTON</Button>
      &nbsp;
      <Button secondary small onClick={action('onClick Success')}>SMALL BUTTON</Button>
      &nbsp;
      <br /><br />
      <Button large onClick={action('onClick Submit')}>LARGE BUTTON</Button>
      &nbsp;
      <Button large primary onClick={action('onClick Submit')}>LARGE BUTTON</Button>
      &nbsp;
      <Button large secondary onClick={action('onClick Submit')}>LARGE BUTTON</Button>
      &nbsp;
    </div>
  ), { header: false, inline: true, propTables: [Button] })
