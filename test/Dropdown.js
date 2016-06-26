import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'

import Dropdown from '../src/Dropdown'

describe('<Dropdown />', () => {
  it('should mirror the same options provided in the official jQuery plugin', () => {
    const wrapper = shallow(<Dropdown />)

    expect(wrapper.instance().props).toEqual({
      mode: 'hover',
      pos: 'bottom-left',
      offset: 0,
      remaintime: 800,
      justify: false,
      boundary: window,
      delay: 0,
      hoverDelayIdle: 250,
      preventflip: false,
    })
  })

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
    const wrapper = shallow(<Dropdown delay={100} />)

    expect(wrapper.hasClass('uk-button-dropdown')).toBe(true)
    wrapper.simulate('mouseenter')
    expect(wrapper.hasClass('uk-open')).toBe(false)

    return new Promise((resolve) => {
      setTimeout(() => {
        wrapper.simulate('mouseenter')
        resolve(expect(wrapper.hasClass('uk-open')).toBe(true))
      }, 100)
    })
  })
})
