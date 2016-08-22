import { storiesOf } from '@kadira/storybook'
import { Input } from 'uikit-react'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
Input.displayName = 'Input'

storiesOf('Input', module)
  .addWithInfo('Basic Usage', '', () => (
    <form className="uk-margin-bottom uk-form">
      <Input placeholder="Text input" /> &nbsp;
      <Input danger defaultValue="danger" /> &nbsp;
      <Input success defaultValue="success" /> &nbsp;
      <Input blank placeholder="blank" />
    </form>
  ), { header: false, inline: true, propTables: [Input] })
  .addWithInfo('Size modifiers', '', () => (
    <form className="uk-margin-bottom uk-form">
      <div className="uk-form-row">
        <Input large placeholder="large" />
      </div>
      <div className="uk-form-row">
        <Input placeholder="default" />
      </div>
      <div className="uk-form-row">
        <Input small placeholder="small" />
      </div>
    </form>
  ), { header: false, inline: true })
  .addWithInfo('Width modifiers', '', () => (
    <form className="uk-margin-bottom uk-form">
      <div className="uk-form-row">
        <Input placeholder="full" width="full" />
      </div>
      <div className="uk-form-row">
        <Input placeholder="large" width="large" />
      </div>
      <div className="uk-form-row">
        <Input placeholder="medium" width="medium" />
      </div>
      <div className="uk-form-row">
        <Input placeholder="small" width="small" />
      </div>
      <div className="uk-form-row">
        <Input placeholder="mini" width="mini" />
      </div>
    </form>
  ), { header: false, inline: true })
