import { storiesOf } from '@kadira/storybook'

import Dropdown from '../Dropdown'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
Dropdown.displayName = 'Dropdown'

const Menu = () => (
  <div className="uk-dropdown uk-dropdown-bottom">
    <ul className="uk-nav uk-nav-dropdown">
      <li><a className="uk-warning" href="#">Item</a></li>
      <li><a href="#">Another item</a></li>
      <li className="uk-nav-header">Header</li>
      <li><a href="#">Item</a></li>
      <li><a href="#">Another item</a></li>
      <li className="uk-nav-divider" />
      <li><a href="#">Separated item</a></li>
    </ul>
  </div>
)

storiesOf('Dropdown', module)
  .addWithInfo(
    'Basic Usage',
    `
      This is the basic usage showing hover, and click mode.
    `,
    () => (
      <div className="uk-margin-bottom">
        <Dropdown>
          <button className="uk-button">
            Hover <i className="uk-icon-caret-down" />
          </button>
          <Menu />
        </Dropdown>
        <br /> <br />
        <Dropdown mode="click">
          <button className="uk-button">
            Click me <i className="uk-icon-caret-down" />
          </button>
          <Menu />
        </Dropdown>
      </div>
  ),
  { header: false, inline: true, propTables: [Dropdown] }
)
