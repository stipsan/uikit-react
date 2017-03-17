import { storiesOf } from '@kadira/storybook'

import Dropdown from '../Dropdown'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
Dropdown.displayName = 'Dropdown'

const Nav = () => <ul className="uk-nav uk-nav-dropdown">
  <li><a className="uk-warning" href="#">Item</a></li>
  <li><a href="#">Another item</a></li>
  <li className="uk-nav-header">Header</li>
  <li><a href="#">Item</a></li>
  <li><a href="#">Another item</a></li>
  <li className="uk-nav-divider" />
  <li><a href="#">Separated item</a></li>
</ul>

const Menu = () => (
  <Nav />
)
Menu.displayName = 'Menu'

const DropdownMenu = () => (
  <div className="uk-dropdown uk-dropdown-navbar uk-dropdown-bottom">
    <Nav />
  </div>
)
DropdownMenu.displayName = 'Menu'

const LoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`

storiesOf('Dropdown', module)
  .addWithInfo('Basic Usage', '', () => (
    <div className="uk-margin-bottom">
      <Dropdown>
        {LoremIpsum}
      </Dropdown>
      <br />
      <Dropdown mode="click">
        {LoremIpsum}
      </Dropdown>
    </div>
  ), { header: false, inline: true, propTables: [Dropdown] })

  .addWithInfo('Nav in dropdown', '', () => (
    <div className="uk-margin-bottom">
      <Dropdown>
        <Menu />
      </Dropdown>
      <br /> <br />
      <Dropdown mode="click">
        <Menu />
      </Dropdown>
    </div>
  ), { header: false, inline: true, propTables: [Dropdown] })

  .addWithInfo('Advanced', '', () => (
    <div className="uk-margin-bottom">
      <nav className="uk-navbar">
        <ul className="uk-navbar-nav">
          <li className="uk-active"><a>Active</a></li>
          <li><a href="">Item</a></li>
          <Dropdown className="uk-parent" component="li" link="navbar">
            <a>Parent <i className="uk-icon-caret-down" /></a>
            <DropdownMenu />
          </Dropdown>
          <Dropdown className="uk-parent" component="li" link="navbar">
            <a>Parent <i className="uk-icon-caret-down" /></a>
            <DropdownMenu />
          </Dropdown>
        </ul>

      </nav>
    </div>
  ), { header: false, inline: true })
