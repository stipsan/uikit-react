import renderer from 'react-test-renderer'
import Dropdown from '../Dropdown'

jest.useFakeTimers()
const LoremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'

describe('Dropdown', () => {
  it('renders correctly', () => {
    expect(renderer.create(
      <Dropdown dropdownLabel="Hover">
        {LoremIpsum}
      </Dropdown>
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <Dropdown component="li" dropdownLabel="Parent" link="navbar">
        {LoremIpsum}
      </Dropdown>
    ).toJSON()).toMatchSnapshot()
  })

  it('changes the class when hovered', () => {
    let component = renderer.create(
      <Dropdown dropdownLabel="Hover">
        {LoremIpsum}
      </Dropdown>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    // manually trigger the callback
    tree.children[1].props.onMouseEnter()
    expect(component.toJSON()).toMatchSnapshot()

    // manually trigger the callback
    tree.children[1].props.onMouseLeave()
    expect(component.toJSON()).toMatchSnapshot()

    // Fast forward timers, class should now be gone
    jest.runAllTimers()
    expect(component.toJSON()).toMatchSnapshot()

    let instance = component.getInstance()
    instance.handleMouseEnter()
    expect(instance.state.isOpen).toBeTruthy()

    component = renderer.create(
      <Dropdown delay={400} dropdownLabel="Hover" mode="hover" remainTime={0}>
        {LoremIpsum}
      </Dropdown>
    )
    instance = component.getInstance()
    instance.handleMouseEnter()
    expect(instance.state.isOpen).toBeTruthy()

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
      <Dropdown dropdownLabel="Click" mode="click" >
        Click
      </Dropdown>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    // manually trigger the callback
    tree.children[0].props.onClick()
    // re-rendering
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    // manually trigger the callback
    tree.children[0].props.onClick()
    // re-rendering
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('closes sibling Dropdown on open', () => {
    const firstComponent = renderer.create(
      <Dropdown dropdownLabel="Hover" link="menu">
        First Instance
      </Dropdown>
    )
    let first = firstComponent.toJSON()
    expect(first).toMatchSnapshot()

    // manually trigger the callback
    first.children[1].props.onMouseEnter()

    first = firstComponent.toJSON()
    expect(first).toMatchSnapshot()
    expect(firstComponent.getInstance().state.isOpen).toBe(true)

    const secondComponent = renderer.create(
      <Dropdown dropdownLabel="Hover" link="menu">
        Second Instance
      </Dropdown>
    )
    let second = secondComponent.toJSON()
    expect(second).toMatchSnapshot()

    // manually trigger the callback
    second.children[1].props.onMouseEnter()

    // Verify that it is open
    second = secondComponent.toJSON()
    expect(second).toMatchSnapshot('should be open')
    expect(secondComponent.getInstance().state.isOpen).toBe(true)
    // Verify that the first component is closed
    first = firstComponent.toJSON()
    expect(first).toMatchSnapshot('should be closed')
    expect(firstComponent.getInstance().state.isOpen).toBe(false)

    // Verify there is a subscription
    const secondInstance = secondComponent.getInstance()
    expect({}.hasOwnProperty.call(secondInstance, 'unsubscribe')).toBe(true)
    const unsubscribe = secondInstance.unsubscribe

    // Start leave timeout before unmount
    second.children[1].props.onMouseLeave()

    // Trigger unmount
    secondComponent.update(<span />)
    // Should be no error from calling this again
    unsubscribe()
  })

  it('closes when clicked when in hover mode', () => {
    const component = renderer.create(
      <Dropdown dropdownLabel="Hover" mode="hover">
        Hover
      </Dropdown>
    )
    let tree = component.toJSON()

    // clicking the dropdown should not open it
    tree.children[0].props.onClick()
    tree = component.toJSON()
    expect(component.getInstance().state.isOpen).toBe(false)

    // open the dropdown
    tree.children[0].props.onMouseEnter()
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(component.getInstance().state.isOpen).toBe(true)

    // close the dropdown by click
    tree.children[0].props.onClick()
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(component.getInstance().state.isOpen).toBe(false)

    // clicking the dropdown again shouldn't open it
    tree.children[0].props.onClick()
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(component.getInstance().state.isOpen).toBe(false)
  })
})
