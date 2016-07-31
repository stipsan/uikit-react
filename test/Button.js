import React from 'react'
import expect, { createSpy } from 'expect'
import { shallow } from 'enzyme'

import Button from '../src/Button'

describe('<Button />', () => {
  it('toggles the className uk-active after click', () => {
    const wrapper = shallow(<Button />)

    expect(wrapper.is('button.uk-button')).toBe(true)

    wrapper.simulate('click')
    expect(wrapper.hasClass('uk-active')).toBe(true)
  })

  it('toggles classNames based on props', () => {
    const wrapper = shallow(<Button primary />)

    expect(wrapper.hasClass('uk-button-primary')).toBe(true)
  })

  it('ignores clicks when disabled', () => {
    const wrapper = shallow(<Button disabled />)

    wrapper.simulate('click')
    expect(wrapper.hasClass('uk-active')).toBe(false)
  })

  it('can be a submit type button', () => {
    const wrapper = shallow(<Button type="submit" />)

    expect(wrapper.html()).toBe('<button type="submit" class="uk-button"></button>')
  })

  it('can attach custom props', () => {
    const wrapper = shallow(<Button id="submit" />)

    expect(wrapper.html()).toBe('<button id="submit" type="button" class="uk-button"></button>')
  })

  it('supports additional event handlers, like onMouseMove', () => {
    const spy = createSpy()
    const wrapper = shallow(<Button onMouseMove={spy} />)

    wrapper.simulate('mousemove')
    expect(spy).toHaveBeenCalled()
  })

  it('allows onClick overrides', () => {
    const spy = createSpy()
    const wrapper = shallow(<Button onClick={spy} />)

    wrapper.simulate('click')
    expect(spy).toHaveBeenCalled()
    expect(wrapper.hasClass('uk-active')).toBe(false)
  })
})
