import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'

import Dropdown from '../src/Dropdown'

describe('<Dropdown />', () => {
  it('toggles the className uk-open after mouse hover', () => {
    const wrapper = shallow(<Dropdown onHover />)

    expect(wrapper.is('.uk-button-dropdown')).toBe(true)

    wrapper.simulate('mouseover')
    expect(wrapper.hasClass('uk-open')).toBe(true)
  })

  it('toggles the class name uk-open after mouse click', () => {
    const wrapper = shallow(<Dropdown handleClick />)

    expect(wrapper.is('.uk-button-dropdown')).toBe(true)

    wrapper.simulate('click')
    expect(wrapper.hasClass('uk-open')).toBe(true)
  })
})
