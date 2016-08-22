import renderer from 'react-test-renderer'

import Input from '../Input'

describe('Input', () => {
  it('renders correctly', () => {
    expect(renderer.create(
      <Input />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <Input className="uk-search-field" type="search" />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <Input danger />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <Input success />
    ).toJSON()).toMatchSnapshot()
  })
})
