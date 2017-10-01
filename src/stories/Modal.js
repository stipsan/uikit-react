import { storiesOf, action } from '@storybook/react'
import { Component } from 'react'
import { Button, Modal } from '..'

Modal.displayName = 'Modal'

/* eslint-disable */
class OpenButton extends Component {
  handleClick = (event) => {
    action('handleOpen')()
    this.props.onClick(event)
  }
  render() {
    const { handleClick } = this
    return <Button onClick={handleClick}>Open</Button>
  }
}

class CancelButton extends Component {
  handleClick = () => {
    action('handleCancel')()
    this.props.handleClose()
  }
  render() {
    const { handleClick } = this
    return <Button onClick={handleClick}>Cancel</Button>
  }
}

class SaveButton extends Component {
  handleClick = () => {
    action('handleSave')()
    this.props.handleClose()
  }
  render() {
    const { handleClick } = this
    return <Button primary onClick={handleClick} className="uk-margin-small-left">Save</Button>
  }
}
/* eslint-enable */

const LoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`

storiesOf('Modal', module)
  .addWithInfo('Basic Usage', '', () => (

    <div className="uk-margin-bottom">
      <Modal target={<OpenButton />}>
        <h2 className="uk-modal-title">Headline</h2>
        <p>{LoremIpsum}</p>
      </Modal>
    </div>
        ), { header: false, inline: true, propTables: [Modal] })
        .addWithInfo('Header and Footer', '', () => (
          <div className="uk-margin-bottom">
            <Modal
              footer={[CancelButton, SaveButton]}
              header="Headline"
              target={<OpenButton />}
            >
              <p>{LoremIpsum}</p>
            </Modal>
          </div>
  ), { header: false, inline: true })
  .addWithInfo('Caption', '', () => (
    <div className="uk-margin-bottom">
      <Modal caption="Caption" target={<OpenButton />}>
        <h1>Headline</h1>
        <p>{LoremIpsum}</p>
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Alert', '', () => (
    <div className="uk-margin-bottom">
      <Modal
        // eslint-disable-next-line react/prop-types,react/jsx-no-bind
        target={<Button>Alert</Button>}
        type="alert"
        onConfirm={action('onConfirm')}
      >
        Attention!
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Confirm', '', () => (
    <div className="uk-margin-bottom">
      <Modal
        cancelButtonClass="uk-button-primary"
        confirmButtonClass="uk-button-danger"
        confirmLabel="Delete"
        // eslint-disable-next-line react/prop-types,react/jsx-no-bind
        target={<Button>Confirm</Button>}
        type="confirm"
        onCancel={action('onCancel')}
        onConfirm={action('onConfirm')}
      >
        Are you sure?
      </Modal>
    </div>
  ), { header: false, inline: true })
