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
    const component = renderer.create(
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
