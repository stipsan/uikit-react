import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'

import Dropdown from '../src/Dropdown'

describe('<Dropdown />', () => {
  it('toggles the className uk-open after mouse hover', () => {
    const wrapper = shallow(<Dropdown mode="hover" />)

    expect(wrapper.is('.uk-button-dropdown')).toBe(true)

    wrapper.simulate('mouseenter')
    expect(wrapper.hasClass('uk-open')).toBe(true)
  })

  it('toggles the class name uk-open after mouse click', () => {
    const wrapper = shallow(<Dropdown mode="click" />)

    expect(wrapper.is('.uk-button-dropdown')).toBe(true)
    wrapper.simulate('click')
    expect(wrapper.hasClass('uk-open')).toBe(true)
  })

  it('toggles the class name uk-open after mouse hover after 1000 second', () => {
    const wrapper = shallow(<Dropdown delay={1000} />)

    expect(wrapper.is('.uk-button-dropdown')).toBe(true)
    wrapper.simulate('hover')

    return new Promise((resolve) => {
      setTimeout(() => {
        wrapper.simulate('hover')
        resolve(expect(wrapper.hasClass('uk-open')).toBe(true))
      }, 1500)
    })
  })
})
