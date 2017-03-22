import renderer from 'react-test-renderer'
import cx from 'classnames'
import Dropdown from '../Dropdown'
import Button from '../Button'

jest.useFakeTimers()
const LoremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'

it('renders correctly', () => {
  expect(renderer.create(
    <Dropdown mode="hover">
      <Button>Hover</Button>
      <div className="uk-dropdown uk-dropdown-bottom-left">
        {LoremIpsum}
      </div>
    </Dropdown>
    ).toJSON()).toMatchSnapshot()

  expect(renderer.create(
    <Dropdown component="li" mode="hover" >
      <Button link>Parent</Button>
      <div className="uk-navbar-dropdown">
        <ul className="uk-nav uk-navbar-dropdown-nav">
          <li className="uk-active">Active</li>
          <li>Item</li>
        </ul>
      </div>
    </Dropdown>
    ).toJSON()).toMatchSnapshot()
})

it('changes the class when hovered', () => {
  let component = renderer.create(
    <Dropdown delay={400} mode="hover" remainTime={0}>
      <Button>Hover</Button>
      <div className="uk-dropdown uk-dropdown-bottom-left">
        {LoremIpsum}
      </div>
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
    <Dropdown delay={400} mode="hover">
      <Button>Hover</Button>
      <div className="uk-dropdown uk-dropdown-bottom-left">
        {LoremIpsum}
      </div>
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
    <Dropdown mode="click">
      <Button>Click</Button>
      <div className="uk-dropdown uk-dropdown-bottom-left">
        {LoremIpsum}
      </div>
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
    <Dropdown link="menu" mode="hover">
      <Button>Hover</Button>
      <div className="uk-dropdown uk-dropdown-bottom-left">
        {LoremIpsum}
      </div>
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
    <Dropdown link="menu" mode="hover">
      <Button>Hover</Button>
      <div className="uk-dropdown uk-dropdown-bottom-left">
        {LoremIpsum}
      </div>
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
    <Dropdown mode="hover">
      <Button>Hover</Button>
      <div className="uk-dropdown uk-dropdown-bottom-left">
        {LoremIpsum}
      </div>
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

it('it should throw Invalid proptytype error on invalid children', () => {
  expect(() => {
    const component = renderer.create(
      <Dropdown mode="hover">
        <Button>Hover</Button>
      </Dropdown>
   )
    component.toJSON()
  }).toThrowErrorMatchingSnapshot()

  expect(() => {
    const component = renderer.create(
      <Dropdown mode="hover">
        <Button>Hover</Button>
        <Button>Hover</Button>
        <Button>Hover</Button>
      </Dropdown>
   )
    component.toJSON()
  }).toThrowError('Children must be passed as array and must have two components.')
})

it('it should render correctly when children are passed as function', () => {
  const component = renderer.create(
    <Dropdown mode="hover">
      {({ open, onClick }) => (
        <div onClick={onClick}>
          <button className={cx({ 'uk-open': open })}>Target</button>
          <div className={cx('uk-navbar-dropdown', { 'uk-open': open })}>
            Dropdown content here
          </div>
        </div>
      )}
    </Dropdown>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
