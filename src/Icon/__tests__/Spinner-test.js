import React from 'react'
import renderer from 'react-test-renderer'
import Spinner from '../Spinner'

jest.mock('react-dom')

jest.mock('computed-style', () => () => 1)

it('should render correctly', () => {
  const createNodeMock = ({ type }) => {
    switch (type) {
      case 'span':
        return { clientWidth: 32 }
      case 'circle':
        return {}
      default:
        return null
    }
  }
  const options = { createNodeMock }
  const component = renderer.create(<Spinner />, options)

  expect(component.toJSON()).toMatchSnapshot()
})
