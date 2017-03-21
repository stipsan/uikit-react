import { storiesOf } from '@kadira/storybook'
import { Icon } from 'uikit-react'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
Icon.displayName = 'Icon'

storiesOf('Icon', module)
  .addWithInfo('Basic Usage', '', () => (
    <div className="uk-margin-bottom">
      <Icon primary>Primary</Icon> &nbsp;
      <Icon success>Success</Icon> &nbsp;
      <Icon danger>Danger</Icon> &nbsp;
      <Icon link>Link</Icon> &nbsp;
      <Icon type="submit">Submit</Icon>
    </div>
  ), { header: false, inline: true, propTables: [Icon] })
