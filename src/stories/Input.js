import { storiesOf } from '@kadira/storybook'
import { Input } from 'uikit-react'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
Input.displayName = 'Input'

storiesOf('Input', module)
  .addWithInfo('Basic Usage', '', () => (
    <form className="uk-margin-bottom uk-form">
      <Input /> &nbsp;
      <Input danger /> &nbsp;
      <Input success />
    </form>
  ), { header: false, inline: true, propTables: [Input] })
