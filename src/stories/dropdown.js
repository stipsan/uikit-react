import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Dropdown from '../DropDown'

storiesOf('Dropdown', module)
  .add('with text', () => (
    <div className="uk-container uk-margin-top">
      <Dropdown onHover>
        <button className="uk-button" onMouseOver={action('onMouseOver')}>Hover me <i className="uk-icon-caret-down"></i></button>
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
      <br /><br />
      <Dropdown refs="click">
        <button className="uk-button" onClick={action('onClick')}>Click me <i className="uk-icon-caret-down"></i></button>
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
  ))
