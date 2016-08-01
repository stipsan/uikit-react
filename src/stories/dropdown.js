import { storiesOf, action } from '@kadira/storybook'

import Dropdown from '../Dropdown'

storiesOf('Dropdown', module)
  .addWithInfo(
    'Basic Usage',
    `
      This is the basic usage with the button with providing a label to show the text.
    `,
    () => (
      <div className="">
        <Dropdown>
          <button className="uk-button" onMouseOver={action('onMouseOver')}>
            Hover
            <i className="uk-icon-caret-down"></i>
          </button>
          <div className="uk-dropdown uk-dropdown-bottom">
            <ul className="uk-nav uk-nav-dropdown">
              <li><a className="uk-warning" href="#">Item</a></li>
              <li><a href="#">Another item</a></li>
              <li className="uk-nav-header">Header</li>
              <li><a href="#">Item</a></li>
              <li><a href="#">Another item</a></li>
              <li className="uk-nav-divider"></li>
              <li><a href="#">Separated item</a></li>
            </ul>
          </div>
        </Dropdown>
        <br /> <br />
        <Dropdown mode="click">
          <button className="uk-button" onClick={action('onClick')}>
            Click me
            <i className="uk-icon-caret-down"></i>
          </button>
          <div className="uk-dropdown uk-dropdown-bottom">
            <ul className="uk-nav uk-nav-dropdown">
              <li><a className="uk-warning" href="#">Item</a></li>
              <li><a href="#">Another item</a></li>
              <li className="uk-nav-header">Header</li>
              <li><a href="#">Item</a></li>
              <li><a href="#">Another item</a></li>
              <li className="uk-nav-divider"></li>
              <li><a href="#">Separated item</a></li>
            </ul>
          </div>
        </Dropdown>
      </div>
  ),
  { inline: true, propTables: [Dropdown] }
)
