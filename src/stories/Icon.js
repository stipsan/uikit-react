import { storiesOf } from '@kadira/storybook'
import { Icon } from 'uikit-react'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
Icon.displayName = 'Icon'

storiesOf('Icon', module)
  .addWithInfo('Basic Usage', '', () => (
    <div className="uk-margin-bottom">
      <Icon icon="check" />
      &nbsp;
      <Icon icon="check" ratio={2} />
      &nbsp;

      <span className="uk-text-danger"><Icon icon="heart" /></span>
      <br />
      <ul className="uk-pagination" uk-margin="">
        <li className="uk-first-column"><a href="#"><Icon className="uk-pagination-previous" icon="pagination-previous" /></a></li>
        <li><a href="#">1</a></li>
        <li className="uk-disabled"><span>...</span></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li className="uk-active"><span>7</span></li>
        <li><a href="#">8</a></li>
        <li><a href="#">9</a></li>
        <li><a href="#">10</a></li>
        <li className="uk-disabled"><span>...</span></li>
        <li><a href="#">20</a></li>
        <li><a href="#"><Icon className="uk-pagination-next" icon="pagination-next" /></a></li>
      </ul>
    </div>
  ), { header: false, inline: true, propTables: [Icon] })
