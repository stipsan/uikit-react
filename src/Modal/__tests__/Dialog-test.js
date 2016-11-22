import renderer from 'react-test-renderer'
import Dialog from '../Dialog'

describe('Dialog', () => {
  const component = renderer.create(
    <Dialog handleClose={jest.fn()} isOpen={false} >Lorem Ipsum</Dialog>
  )
  it('renders correctly', () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should handle handleClose', () => {
    const instance = component.getInstance()
    instance.handleClose()
    expect(instance.props.handleClose).toHaveBeenCalled()
  })

  it('should handle handleOverlayClick', () => {
    const instance = component.getInstance()
    const event = { stopPropagation: jest.fn() }
    instance.handleOverlayClick(event)
    expect(event.stopPropagation).toHaveBeenCalled()
  })
})
