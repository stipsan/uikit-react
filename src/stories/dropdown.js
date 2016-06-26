import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Dropdown from '../DropDown'

storiesOf('Dropdown', module)
  .add('with text', () => (
    <div className="uk-container uk-margin-top">
      <h3>Delayed dropdowns in hover mode</h3>
      <Dropdown mode="hover">
        <button className="uk-button" onMouseOver={action('onMouseOver')}>
        Hover
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
      <br />
      <h3>Delayed dropdowns in Click mode</h3>
      <Dropdown mode="click">
        <button className="uk-button" onClick={action('onClick')}>
        Click me
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
      <br />
      <h3>Delayed dropdowns in Delayed mode</h3>
      <Dropdown delay={1000} >
        <button className="uk-button" onClick={action('onClick')}>
        Delay me
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
      <br />
      <h3>Dropdown with navs</h3>
      <Dropdown pos="right-top" >
        <button className="uk-button" onClick={action('onClick')}>
        Right Top
        </button>
        <div className="uk-dropdown uk-dropdown-right">
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
  ))
