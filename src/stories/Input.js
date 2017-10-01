import { storiesOf } from '@storybook/react'
import { Input } from '..'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
Input.displayName = 'Input'

storiesOf('Input', module)
  .addWithInfo('Basic Usage', `
  ---
  For more advanced use cases please check out [redux-form-uikit](http://form.uikit-react.io).
  `, () => (
    <form className="uk-margin-bottom uk-form">
      <Input placeholder="Text input" />
      &nbsp;
      <Input danger defaultValue="danger" />
      &nbsp;
      <Input success defaultValue="success" />
      &nbsp;
      <Input blank placeholder="blank" />
    </form>
  ), { header: false, inline: true, propTables: [Input], mtrcConf: { // eslint-disable-line
    a: ({ href, children }) => <a href={href} target="_blank">{children}</a>, // eslint-disable-line
  } })
  .addWithInfo('Size modifiers', '', () => (
    <form className="uk-margin-bottom uk-form">
      <div className="uk-margin">
        <Input large placeholder="large" />
      </div>
      <div className="uk-margin">
        <Input placeholder="default" />
      </div>
      <div className="uk-margin">
        <Input small placeholder="small" />
      </div>
    </form>
  ), { header: false, inline: true })
  .addWithInfo('Width modifiers', '', () => (
    <form className="uk-margin-bottom uk-form">
      <div className="uk-margin">
        <Input placeholder="full" width="full" />
      </div>
      <div className="uk-margin">
        <Input placeholder="large" width="large" />
      </div>
      <div className="uk-margin">
        <Input placeholder="medium" width="medium" />
      </div>
      <div className="uk-margin">
        <Input placeholder="small" width="small" />
      </div>
    </form>
  ), { header: false, inline: true })
  .addWithInfo('Form and icons', '', () => (
    <form>
      <div className="uk-form-row">
        <div className="uk-margin">
          <Input icon="calendar" />
          &nbsp;
        </div>
        <div className="uk-margin">
          <Input flip icon="clock" />
        </div>
      </div>
      <div className="uk-form-row">
        <div className="uk-margin">
          <Input icon="twitter" />
          &nbsp;
        </div>
        <div className="uk-margin">
          <Input flip icon="spinner" />
        </div>
      </div>
    </form>
  ), { header: false, inline: true })
