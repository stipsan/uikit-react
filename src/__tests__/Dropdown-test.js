import renderer from 'react-test-renderer'

import Dropdown from '../Dropdown'

jest.useFakeTimers()

describe('Dropdown', () => {
  it('renders correctly', () => {
    expect(renderer.create(
      <Dropdown>
        <button className="uk-button">Hover <i className="uk-icon-caret-down" /></button>
      </Dropdown>
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <Dropdown className="uk-parent" component="li" >
        <a>Parent <i className="uk-icon-caret-down" /></a>
      </Dropdown>
    ).toJSON()).toMatchSnapshot()
  })

  it('changes the class when hovered', () => {
    let component = renderer.create(
      <Dropdown>
        <button className="uk-button">Hover <i className="uk-icon-caret-down" /></button>
      </Dropdown>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    // manually trigger the callback
    tree.props.onMouseEnter()
    // re-rendering
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    // manually trigger the callback
    tree.props.onMouseLeave()
    // re-rendering
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    // Fast forward timers, class should now be gone
    jest.runAllTimers()
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    let instance = component.getInstance()
    instance.handleMouseEnter()
    expect(instance.state.isOpen).toBeTruthy()

    component = renderer.create(
      <Dropdown delay={400} remainTime={0}>
        <button className="uk-button">Hover <i className="uk-icon-caret-down" /></button>
      </Dropdown>
    )
    instance = component.getInstance()
    instance.handleMouseEnter()
    expect(instance.state.isOpen).toBeFalsy()

    jest.runAllTimers()
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    instance.handleMouseLeave()
    jest.runAllTimers()
    expect(tree).toMatchSnapshot()
    expect(instance.state.isOpen).toBe(false)
  })

  it('changes the class when clicked', () => {
    const component = renderer.create(
      <Dropdown mode="click">
        <button className="uk-button">Hover <i className="uk-icon-caret-down" /></button>
      </Dropdown>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    // manually trigger the callback
    tree.props.onClick()
    // re-rendering
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    // manually trigger the callback
    tree.props.onClick()
    // re-rendering
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
