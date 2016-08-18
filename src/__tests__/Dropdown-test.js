import renderer from 'react-test-renderer'

import Dropdown from '../Dropdown'

describe('Dropdown', () => {
  it('Dropdown renders correctly', () => {
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
  })
})
