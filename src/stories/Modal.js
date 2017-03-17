import { storiesOf, action } from '@kadira/storybook'
import { Component } from 'react'
import { Button, Modal } from 'uikit-react'

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
        <h1>Headline</h1>
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
  .addWithInfo('Lightbox modifier', '', () => (
    <div className="uk-margin-bottom">
      <Modal lightbox target={<OpenButton />}>
        <img
          alt=""
          height="400"
          role="presentation"
          src="http://getuikit.com/docs/images/placeholder_600x400.svg"
          width="600"
        />
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Blank', '', () => (
    <div className="uk-margin-bottom">
      <Modal blank target={<OpenButton />} >
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
      <Modal
        close={false}
        target={<OpenButton />}
      >
        <div className="uk-modal-spinner" />
      </Modal>
    </div>
  ), { header: false, inline: true })
  /*
  .addWithInfo('Center', '', () => (
    <div className="uk-margin-bottom">
      <Modal center target={OpenButton} >
        <h1>Headline</h1>
        <p>{LoremIpsum}</p>
      </Modal>
    </div>
  ), { header: false, inline: true })
  // */
  .addWithInfo('Large dialog modifier', '', () => (
    <div className="uk-margin-bottom">
      <Modal large target={<OpenButton />} >
        <h1>Headline</h1>
        <p>{LoremIpsum}</p>
      </Modal>
    </div>
  ), { header: false, inline: true })
  /*
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
  // */
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
  /*
  .addWithInfo('Prompt', '', () => (
    <div className="uk-margin-bottom">
      <Modal
        // eslint-disable-next-line react/prop-types,react/jsx-no-bind
        target={({ handleOpen }) => <Button onClick={handleOpen}>Prompt</Button>}
        type="prompt"
        onBlur={action('onBlur')}
        onCancel={action('onCancel')}
        onChange={action('onChange')}
        onConfirm={action('onConfirm')}
        onFocus={action('onFocus')}
      >
        Name:
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Block UI', '', () => (
    <div className="uk-margin-bottom">
      <Modal
        // eslint-disable-next-line react/prop-types,react/jsx-no-bind
        target={({ handleOpen }) => <Button onClick={handleOpen}>Block UI</Button>}
        type="blockUI"
        // eslint-disable-next-line react/jsx-no-bind
        onOpen={close => setTimeout(() => close(), 5000)}
      >
        Wait 5 sec...
      </Modal>
    </div>
  ), { header: false, inline: true })
  //*/
