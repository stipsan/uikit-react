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
    let component = renderer.create(
      <Prompt isOpen={false} />, options
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    component = renderer.create(
      <Prompt isOpen>Lorem ipsum</Prompt>, options
    )
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
