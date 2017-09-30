import renderer from 'react-test-renderer'

import NotifyMesssage from '../NotifyMesssage'

jest.useFakeTimers()

describe('NotifyMesssage', () => {
  const defaultProps = {
    children: 'children',
    icon: 'check',
    position: 'top-center',
    onClick: jest.fn(),
  }

  it('should render correctly', () => {
    const component = renderer.create(
      <NotifyMesssage {...defaultProps} />
    )
    expect(component.toJSON()).toMatchSnapshot()

    // Test unmount
    component.update(<span />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should return if state is closed', () => {
    const component = renderer.create(
      <NotifyMesssage {...defaultProps} />
    )
    const instance = component.getInstance()
    instance.handleClose()
    jest.runAllTimers()
    expect(instance.state.isOpen).toBe(false)

    instance.openNotification()
    expect(instance.state.isOpen).toBe(true)
  })
})
