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

    expect(renderer.create(
      <Input blank />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <Input large />
    ).toJSON()).toMatchSnapshot()

    expect(renderer.create(
      <Input small />
    ).toJSON()).toMatchSnapshot()
  })
})
