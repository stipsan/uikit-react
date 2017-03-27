import renderer from 'react-test-renderer'
import Spinner from '../Spinner'

jest.mock('react-dom')

it('should render correctly', () => {
  const component = renderer.create(<Spinner />)
  console.log(component)
  expect(component.toJSON()).toMatchSnapshot()
})
