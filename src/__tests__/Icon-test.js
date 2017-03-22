import renderer from 'react-test-renderer'
import Icon from '../Icon'

it('should render correctly', () => {
  expect(renderer.create(
    <Icon icon="check" load={jest.fn()} ratio={2} />
  ).toJSON()).toMatchSnapshot()
})
