import React from 'react'
import renderer from 'react-test-renderer'
import Icon from '../index'
import icons from '../icons'

jest.mock('../Spinner', () => 'Spinner')

const iconNames = Object.keys(icons)
iconNames.forEach((iconName) => {
  test(iconName, () => {
    const component = renderer.create(<Icon icon={iconName} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
