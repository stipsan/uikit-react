import renderer from 'react-test-renderer'
import Icon from '../index'

jest.mock('../Spinner', () => 'Spinner')

it('should render correctly', () => {
  expect(renderer.create(
    <Icon icon="check" ratio={2} />
  ).toJSON()).toMatchSnapshot()

  expect(renderer.create(
    <Icon icon="spinner" />
  ).toJSON()).toMatchSnapshot()
})
