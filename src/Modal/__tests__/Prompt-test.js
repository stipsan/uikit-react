import React from 'react'
import renderer from 'react-test-renderer'
import Prompt from '../Prompt'

function createNodeMock(element) {
  if (element.type === 'input') {
    return {
      focus() {},
    }
  }
  return null
}

describe('Prompt', () => {
  it('renders correctly', () => {
    const options = { createNodeMock }
    const component = renderer.create(
      <Prompt isOpen={false} />, options
    )

    expect(component.toJSON()).toMatchSnapshot()

    component.update(
      <Prompt isOpen />, options
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
