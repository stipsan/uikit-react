import renderer from 'react-test-renderer'

import Button from '../Button'

test('Button renders correctly', () => {
  expect(renderer.create(
    <Button>Submit</Button>
  ).toJSON()).toMatchSnapshot()

  expect(renderer.create(
    <Button active>Submit</Button>
  ).toJSON()).toMatchSnapshot()

  expect(renderer.create(
    <Button type="submit">Save</Button>
  ).toJSON()).toMatchSnapshot()

  expect(renderer.create(
    <Button primary>Submit</Button>
  ).toJSON()).toMatchSnapshot()

  expect(renderer.create(
    <Button success>Submit</Button>
  ).toJSON()).toMatchSnapshot()

  expect(renderer.create(
    <Button danger>Submit</Button>
  ).toJSON()).toMatchSnapshot()

  expect(renderer.create(
    <Button link>Submit</Button>
  ).toJSON()).toMatchSnapshot()

  expect(renderer.create(
    <Button mini>Submit</Button>
  ).toJSON()).toMatchSnapshot()

  expect(renderer.create(
    <Button small>Submit</Button>
  ).toJSON()).toMatchSnapshot()

  expect(renderer.create(
    <Button large>Submit</Button>
  ).toJSON()).toMatchSnapshot()

  expect(renderer.create(
    <Button large disabled className="save-button">Save</Button>
  ).toJSON()).toMatchSnapshot()
})
