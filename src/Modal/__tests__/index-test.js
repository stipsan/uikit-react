import renderer from 'react-test-renderer'

import Modal from '../index'

describe('Modal', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Modal>Lorem ipsum</Modal>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('renders a Header and Footer', () => {
    const component = renderer.create(
      <Modal
        header="Headline"
        footer={[
          ({ handleClose }) => <button onClick={handleClose}>Yes!</button>,
        ]}
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
        <img src="http://getuikit.com/docs/images/placeholder_600x400.svg" role="presentation" />
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
})
