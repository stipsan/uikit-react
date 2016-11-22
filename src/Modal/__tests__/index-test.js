import renderer from 'react-test-renderer'
import Modal from '../index'

jest.mock('react-portal', () => 'Portal')
jest.useFakeTimers()

function createNodeMock(element) {
  if (element.type === 'modal') {
    return {
      focus() {},
    }
  }
  return null
}

describe('Modal', () => {
  it('renders correctly', () => {
    const options = { createNodeMock }
    const component = renderer.create(
      <Modal>Lorem ipsum</Modal>, options
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('renders a Header and Footer', () => {
    const component = renderer.create(
      <Modal
        footer={[
          // eslint-disable-next-line react/prop-types
          ({ handleClose }) => <button onClick={handleClose}>Yes!</button>,
        ]}
        header="Headline"
      >
        Lorem ipsum
      </Modal>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('renders a Caption', () => {
    const component = renderer.create(
      <Modal
        caption="Caption"
      >
        Lorem ipsum
      </Modal>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('renders a Lightbox', () => {
    const component = renderer.create(
      <Modal
        lightbox
      >
        <img role="presentation" src="http://getuikit.com/docs/images/placeholder_600x400.svg" />
      </Modal>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('renders a Blank Modal', () => {
    const component = renderer.create(
      <Modal
        blank
      >
        <div className="uk-grid uk-flex-middle">
          <div
            className="uk-width-medium-1-2 uk-height-viewport uk-cover-background uk-row-first"
            style={{
              backgroundImage: 'url(http://getuikit.com/docs/images/placeholder_120x255.svg)',
            }}
          />
          <div className="uk-width-medium-1-2">
            <h1>Headline</h1>
            <div className="uk-width-medium-1-3">
              <p>Lorem ipsum</p>
            </div>
          </div>
        </div>
      </Modal>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('renders a Spinner', () => {
    const component = renderer.create(
      <Modal
        close={false}
      >
        <div className="uk-modal-spinner" />
      </Modal>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('renders an alert modal', () => {
    const component = renderer.create(
      <Modal
        type="alert"
      >
        Something bad happened!
      </Modal>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('renders an confirm modal', () => {
    const component = renderer.create(
      <Modal
        type="confirm"
      >
        Are you absolutely sure about this?
      </Modal>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('renders an prompt modal', () => {
    const component = renderer.create(
      <Modal
        type="prompt"
      >
        Please enter the name of the repo you&quot;re deleting:
      </Modal>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  let component = renderer.create(
    <Modal>Lorem ipsum</Modal>
  )

  it('should handle handleClick', () => {
    const instance = component.getInstance()
    instance.handleClick()
    expect(instance.state.shouldDisplay).toBeTruthy()
  })

  it('should handle handleOpen', () => {
    const instance = component.getInstance()
    instance.handleOpen()
    jest.runAllTimers()
    expect(instance.state.isOpen).toBeTruthy()
  })

  it('should handle handleClose', () => {
    const instance = component.getInstance()
    instance.closePortal = jest.fn()
    instance.handleClose()
    expect(instance.state.isOpen).toBeFalsy()
  })

  it('should set modal to Portal', () => {
    const instance = component.getInstance()
    const node = { closePortal: jest.fn() }
    instance.setModal(node)
    instance.handleClose()
    jest.runAllTimers()
    expect(node.closePortal).toHaveBeenCalled()
  })

  it('should handle handleAfterClose', () => {
    const instance = component.getInstance()
    instance.handleAfterClose()
    expect(instance.state.shouldDisplay).toBeFalsy()
  })

  it('should handle handleBeforeClose', () => {
    const instance = component.getInstance()
    instance.handleBeforeClose({ removeFromDOM: jest.fn() })
    expect(instance.state.isOpen).toBeFalsy()
  })

  component = renderer.create(
    <Modal
      // eslint-disable-next-line react/prop-types,react/jsx-no-bind
      target={<button>Confirm</button>}
      type="confirm"
      onCancel={jest.fn()}
      onConfirm={jest.fn()}
    >
      Are you sure?
  </Modal>)

  it('should handle handleCancel', () => {
    const instance = component.getInstance()
    instance.handleCancel()
    expect(instance.props.onCancel).toHaveBeenCalled()
  })

  it('should handle handleConfirm', () => {
    const instance = component.getInstance()
    instance.handleConfirm()
    expect(instance.props.onConfirm).toHaveBeenCalled()
  })
})
