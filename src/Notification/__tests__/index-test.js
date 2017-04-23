import renderer from 'react-test-renderer'

import Notification from '../index'

jest.mock('react-portal', () => 'Portal')

describe('Notification', () => {
  const defaultProps = {
    notifications: [{ id: 1, type: 'warning', message: 'Notification #1', icon: 'check' }],
    position: 'top-center',
  }
  const component = renderer.create(
    <Notification {...defaultProps} />
  )
  it('should render correctly', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should hanlde click correctly', () => {
    const instance = component.getInstance()
    instance.handleClick()
    expect(instance.state.isOpened).toBe(true)
  })
})
