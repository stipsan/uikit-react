import renderer from 'react-test-renderer'

import Input from '../Input'

describe('Input', () => {
  it('renders correctly', () => {
    expect(renderer.create(
      <Input />
    ).toJSON()).toMatchSnapshot()
  })
})
