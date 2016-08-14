import { storiesOf, action } from '@kadira/storybook'
import { Component } from 'react'
import { Button, Modal } from 'uikit-react'

Modal.displayName = 'Modal'

class OpenButton extends Component {
  handleClick = () => {
    action('handleOpen')()
    this.props.handleOpen()
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
    return <Button primary onClick={handleClick}>Save</Button>
  }
}

const LoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`

storiesOf('Modal', module)
  .addWithInfo('Basic Usage', '', () => (
    <div className="uk-margin-bottom">
      <Modal target={OpenButton}>
        <h1>Headline</h1>
        <p>{LoremIpsum}</p>
      </Modal>
    </div>
  ), { header: false, inline: true, propTables: [Modal] })
  .addWithInfo('Header and Footer', '', () => (
    <div className="uk-margin-bottom">
      <Modal
        target={OpenButton}
        header="Headline"
        footer={[CancelButton, SaveButton]}
      >
        <p>{LoremIpsum}</p>
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Caption', '', () => (
    <div className="uk-margin-bottom">
      <Modal target={OpenButton} caption="Caption">
        <h1>Headline</h1>
        <p>{LoremIpsum}</p>
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Lightbox modifier', '', () => (
    <div className="uk-margin-bottom">
      <Modal target={OpenButton} lightbox>
        <img src="http://getuikit.com/docs/images/placeholder_600x400.svg" width="600" height="400" />
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Blank', '', () => (
    <div className="uk-margin-bottom">
      <Modal target={OpenButton} blank>
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
              <p>{LoremIpsum}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Spinner', '', () => (
    <div className="uk-margin-bottom">
      <Modal target={OpenButton} close={false}>
        <div className="uk-modal-spinner" />
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Center', '', () => (
    <div className="uk-margin-bottom">
      <Modal target={OpenButton} center>
        <h1>Headline</h1>
        <p>{LoremIpsum}</p>
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Large dialog modifier', '', () => (
    <div className="uk-margin-bottom">
      <Modal target={OpenButton} large>
        <h1>Headline</h1>
        <p>{LoremIpsum}</p>
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Overflow container in modal', '', () => (
    <div className="uk-margin-bottom">
      <Modal target={OpenButton}>
        <h1>Headline</h1>
        <h2>Some text above the scrollable box</h2>
        <p>{LoremIpsum}</p>
        <div className="uk-overflow-container">
          <h2>Overflow container</h2>
          <p>{LoremIpsum}</p>
          <p>{LoremIpsum}</p>
          <p>{LoremIpsum}</p>
          <p>{LoremIpsum}</p>
          <p>{LoremIpsum}</p>
          <p>{LoremIpsum}</p>
          <p>{LoremIpsum}</p>
          <p>{LoremIpsum}</p>
          <p>{LoremIpsum}</p>
          <p>{LoremIpsum}</p>
          <p>{LoremIpsum}</p>
          <p>{LoremIpsum}</p>
          <p>{LoremIpsum}</p>
          <p>{LoremIpsum}</p>
          <p>{LoremIpsum}</p>
          <p>{LoremIpsum}</p>
        </div>
        <p>{LoremIpsum}</p>
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Alert', '', () => (
    <div className="uk-margin-bottom">
      <Modal
        target={({ handleOpen }) => <Button onClick={handleOpen}>Alert</Button>}
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
        target={({ handleOpen }) => <Button onClick={handleOpen}>Confirm</Button>}
        type="confirm"
        onConfirm={action('onConfirm')}
        onCancel={action('onCancel')}
      >
        Are you sure?
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Prompt', '', () => (
    <div className="uk-margin-bottom">
      <Modal
        target={({ handleOpen }) => <Button onClick={handleOpen}>Prompt</Button>}
        type="prompt"
        onConfirm={action('onConfirm')}
        onChange={action('onChange')}
        onBlur={action('onBlur')}
        onFocus={action('onFocus')}
        onCancel={action('onCancel')}
      >
        Name:
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Block UI', '', () => (
    <div className="uk-margin-bottom">
      <Modal
        target={({ handleOpen }) => <Button onClick={handleOpen}>Block UI</Button>}
        onOpen={close => setTimeout(() => close(), 5000)}
        type="blockUI"
      >
        Wait 5 sec...
      </Modal>
    </div>
  ), { header: false, inline: true })
