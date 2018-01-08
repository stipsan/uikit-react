import { storiesOf } from '@storybook/react'
import cx from 'classnames'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Button, Dropdown } from '..'

// This is to work around: https://github.com/kadirahq/react-storybook-addon-info/issues/26#issuecomment-229029177
Dropdown.displayName = 'Dropdown'

const Nav = () => (
  <ul className="uk-nav uk-nav-dropdown">
    <li><a className="uk-warning" href="#">Item</a></li>
    <li><a href="#">Another item</a></li>
    <li className="uk-nav-header">Header</li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Another item</a></li>
    <li className="uk-nav-divider" />
    <li><a href="#">Separated item</a></li>
  </ul>
)

const Menu = () => <Nav />
Menu.displayName = 'Menu'

const LoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`

class MyDropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
  }

  handleMouseLeave = () => {
    this.props.onMouseLeave()
  }

  handleMouseEnter = () => {
    this.props.onMouseEnter()
  }

  render() {
    const { ...props } = this.props
    const { handleMouseEnter, handleMouseLeave } = this
    return (
      <div
        {...props}
        className={cx('uk-dropdown uk-dropdown-bottom-left', props.className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {LoremIpsum}
      </div>
    )
  }
}

storiesOf('Dropdown', module)
    .addWithInfo('Basic Usage', '', () => (
      <div className="uk-margin-bottom">
        <Dropdown mode="hover">
          <Button>Hover</Button>
          <MyDropdown />
        </Dropdown>
        &nbsp;
        <Dropdown mode="click">
          <Button primary>Click</Button>
          <MyDropdown />
        </Dropdown>
      </div>
), { header: false, inline: true, propTables: [Dropdown] })

  .addWithInfo('Nav in dropdown', '', () => (
    <div className="uk-margin-bottom">
      <Dropdown>
        <Button>Hover</Button>
        <div className="uk-dropdown uk-dropdown-bottom-left">
          <Nav />
        </div>
      </Dropdown>
    </div>
  ), { header: false, inline: true, propTables: [Dropdown] })

  .addWithInfo('Advanced', '', () => (
    <div className="uk-margin-bottom">
      <nav className="uk-navbar-container">
        <ul className="uk-navbar-nav">
          <li className="uk-active"><a>Active</a></li>
          <li><a href="">Item</a></li>
          <Dropdown className="" component="li" key="first" link="navbar">
            <a href="#">Parent</a>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li className="uk-active"><a href="#">Active</a></li>
                <li><a href="#">Item</a></li>
                <li className="uk-nav-header">Header</li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
                <li className="uk-nav-divider" />
                <li><a href="#">Item</a></li>
              </ul>
            </div>
          </Dropdown>
          <Dropdown className="" component="li" key="second" link="navbar">
            <a href="#">Parent</a>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li className="uk-active"><a href="#">Active</a></li>
                <li><a href="#">Item</a></li>
                <li className="uk-nav-header">Header</li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
                <li className="uk-nav-divider" />
                <li><a href="#">Item</a></li>
              </ul>
            </div>
          </Dropdown>
        </ul>
      </nav>
    </div>
  ), { header: false, inline: true })
