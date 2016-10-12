import { storiesOf } from '@kadira/storybook'
import { Notify } from 'uikit-react'

Notify.displayName = 'Notify'

storiesOf('Notify', module)
  .addWithInfo('Basic Usage', '', () => (
    <div className="uk-margin-bottom">
      <Notify position="top-center" type="info">Notify Info</Notify> <br /><br />
      <Notify position="top-left" type="success">Notify Success</Notify><br /><br />
      <Notify position="top-left" type="success">Notify Success</Notify><br /><br />
      <Notify position="bottom-center" type="danger">Bottom Center Danger</Notify><br /><br />
    </div>
  ))
