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
      <ul className="uk-pagination" uk-margin="">
        <li className="uk-first-column"><a href="#"><span uk-pagination-previous="" className="uk-pagination-previous uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" icon="pagination-previous" ratio="1"><polyline fill="none" stroke="#000" strokeWidth="1.2" points="6 1 1 6 6 11" /></svg></span></a></li>
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
        <li><a href="#"><span uk-pagination-next="" className="uk-pagination-next uk-icon"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" icon="pagination-next" ratio="1"><polyline fill="none" stroke="#000" strokeWidth="1.2" points="1 1 6 6 1 11" /></svg></span></a></li>
      </ul>
    </div>
  ), { header: false, inline: true, propTables: [Icon] })
