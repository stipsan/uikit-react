import renderer from 'react-test-renderer'

import Notify from '../index'

jest.mock('react-portal', () => 'Portal')

describe('Notify', () => {
  const defaultProps = {
    notifications: [{ id: 1, type: 'warning', message: 'Notification #1', icon: 'check' }],
    position: 'top-center',
  }
  const component = renderer.create(
    <Notify {...defaultProps} />
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
