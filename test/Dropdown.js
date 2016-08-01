import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'

import Dropdown from '../src/Dropdown'

describe('<Dropdown />', () => {
  it('should require a label prop', () => {
    expect(Dropdown.propTypes.label).toEqual(React.PropTypes.string.isRequired)
  })

  it('should have a state isOpen that toggles .uk-open', () => {
    const wrapper = shallow(<Dropdown />)

    expect(wrapper.state()).toEqual({
      isOpen: false,
    })

    wrapper.setState({ isOpen: true })
    expect(wrapper.hasClass('uk-open')).toBe(true, 'Setting state isOpen = true adds .uk-open')

    wrapper.setState({ isOpen: false })
    expect(wrapper.hasClass('uk-open')).toBe(false, 'Setting state isOpen = false removes .uk-open')
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

  it('toggles the class name uk-open after mouse hover after 100 milliseconds', () => {
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

  it('should delay removal of uk-open to the timeout in remainTime prop', () => {
    const wrapper = shallow(<Dropdown remainTime={100} />)

    wrapper.simulate('mouseenter')
    expect(wrapper.hasClass('uk-open')).toBe(true)

    wrapper.simulate('mouseleave')
    expect(wrapper.hasClass('uk-open')).toBe(true, '.uk-open was removed before remainTime timeout')

    return new Promise((resolve) => {
      setTimeout(() => {
        wrapper.update()
        resolve(expect(wrapper.hasClass('uk-open')).toBe(false))
      }, 120)
    })
  })

  it('should cancel removal of uk-open on mouseenter', () => {
    const wrapper = shallow(<Dropdown remainTime={100} />)

    wrapper.simulate('mouseenter')
    expect(wrapper.hasClass('uk-open')).toBe(true)

    wrapper.simulate('mouseleave')
    expect(wrapper.hasClass('uk-open')).toBe(true, '.uk-open was removed before remainTime timeout')
    wrapper.simulate('mouseenter')

    return new Promise((resolve) => {
      setTimeout(() => {
        wrapper.update()
        resolve(
          expect(wrapper.hasClass('uk-open')).toBe(true, 'failed to cancel remainTime timeout')
        )
      }, 200)
    })
  })
})
