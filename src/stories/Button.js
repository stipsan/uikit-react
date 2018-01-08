import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { Button, Icon } from '..'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
Button.displayName = 'Button'

storiesOf('Button', module)
  .addWithInfo('Basic Usage', '', () => (
    <div className="uk-margin-bottom">
      <Button onClick={action('onClick')}>Default</Button>
      &nbsp;
      <Button disabled>Disabled</Button>
      &nbsp;
      <Button primary onClick={action('onClick')}>
        <Icon className="uk-margin-small-right" icon="trash" />
        Delete
      </Button>
    </div>
  ), { header: false, inline: true, propTables: [Button] })

  .addWithInfo('Style modifiers', '', () => (
    <div className="uk-margin-bottom">
      <Button onClick={action('onClick')}>Default</Button>
      &nbsp;
      <Button primary onClick={action('onClick')}>Primary</Button>
      &nbsp;
      <Button secondary onClick={action('onClick')}>Secondary</Button>
      &nbsp;
      <Button danger onClick={action('onClick')}>Danger</Button>
      &nbsp;
      <Button text onClick={action('onClick')}>Text</Button>
      &nbsp;
      <Button link onClick={action('onClick')}>Link</Button>
      &nbsp;
    </div>
  ), { header: false, inline: true, propTables: [Button] })

  .addWithInfo('Size modifiers', '', () => (
    <div className="uk-margin-bottom">
      <Button small onClick={action('onClick')}>SMALL BUTTON</Button>
      &nbsp;
      <Button primary small onClick={action('onClick')}>SMALL BUTTON</Button>
      &nbsp;
      <Button secondary small onClick={action('onClick')}>SMALL BUTTON</Button>
      &nbsp;
      <br /><br />
      <Button large onClick={action('onClick')}>LARGE BUTTON</Button>
      &nbsp;
      <Button large primary onClick={action('onClick')}>LARGE BUTTON</Button>
      &nbsp;
      <Button large secondary onClick={action('onClick')}>LARGE BUTTON</Button>
      &nbsp;
    </div>
  ), { header: false, inline: true, propTables: [Button] })
