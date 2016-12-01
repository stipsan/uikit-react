import renderer from 'react-test-renderer'

import NotifyMesssage from '../NotifyMesssage'

jest.useFakeTimers()

describe('NotifyMesssage', () => {
  const defaultProps = {
    children: 'children',
    icon: 'check',
    position: 'top-center',
    handleMessageClick: jest.fn(),
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
    jest.runAllTimers()
    expect(instance.state.isOpen).toBe(false)

    instance.openNotification()
    expect(instance.state.isOpen).toBe(true)
  })

  it('should handle Message Click', () => {
    const instance = component.getInstance()

    instance.handleClick()

    expect(defaultProps.handleMessageClick).toHaveBeenCalled()
  })
})
