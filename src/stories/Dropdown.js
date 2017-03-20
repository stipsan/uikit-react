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

const Menu = () => <Nav />
Menu.displayName = 'Menu'

const DropdownMenu = () => <Nav />
DropdownMenu.displayName = 'Menu'

const LoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`

storiesOf('Dropdown', module)
.addWithInfo('Basic Usage', '', () => (
  <div className="uk-margin-bottom">
    <Dropdown dropdownLabel="Hover" >
      {LoremIpsum}
    </Dropdown>
    <Dropdown dropdownLabel="Click" mode="click">
      {LoremIpsum}
    </Dropdown>
  </div>
), { header: false, inline: true, propTables: [Dropdown] })

  .addWithInfo('Navbar in Dropdown', '', () => (
    <div className="uk-margin-bottom">
      <Dropdown dropdownLabel="Hover">
        <Menu />
      </Dropdown>
      <Dropdown dropdownLabel="Click" mode="click">
        <Menu />
      </Dropdown>
    </div>
  ), { header: false, inline: true, propTables: [Dropdown] })

  .addWithInfo('Advanced', '', () => (
    <div className="uk-margin-bottom">
      <nav className="uk-navbar-container">
        <ul className="uk-navbar-nav">
          <li className="uk-active"><a>Active</a></li>
          <li><a href="">Item</a></li>
          <Dropdown
            className="uk-parent"
            component="li"
            dropdownLabel="Parent"
            link="navbar"
          >
            <DropdownMenu />
          </Dropdown>
          <Dropdown
            className="uk-parent"
            component="li"
            dropdownLabel="Parent"
            link="navbar"
          >
            <DropdownMenu />
          </Dropdown>
        </ul>

      </nav>
    </div>
  ), { header: false, inline: true })
