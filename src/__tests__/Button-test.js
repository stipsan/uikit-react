import renderer from 'react-test-renderer'

import Button from '../Button'

test('Button renders correctly', () => {
  const tree = renderer.create(
    <Button>Submit</Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
