import renderer from 'react-test-renderer'

import NotifyMesssage from '../NotifyMesssage'

describe('NotifyMesssage', () => {
  const defaultProps = {
    children: 'children',
    icon: 'check',
    position: 'top-center',
  }
  const component = renderer.create(
    <NotifyMesssage {...defaultProps} />
  )
  it('should render correctly', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should return if state is closed', () => {
    const instance = component.getInstance()
    instance.handleClose()
    expect(instance.state.isOpen).toBe(false)

    instance.openNotification()
    expect(instance.state.isOpen).toBe(true)
  })
})
