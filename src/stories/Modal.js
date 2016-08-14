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
      <Modal headline="This is the Headline" target={OpenButton}>
        <h1>Headline</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.</p>
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Spinner', '', () => (
    <div className="uk-margin-bottom">
      <Modal headline="This is the Headline" target={OpenButton}>
        <h1>Headline</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.</p>
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Center', '', () => (
    <div className="uk-margin-bottom">
      <Modal headline="This is the Headline" target={OpenButton}>
        <h1>Headline</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.</p>
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Large dialog modifier', '', () => (
    <div className="uk-margin-bottom">
      <Modal headline="This is the Headline" target={OpenButton}>
        <h1>Headline</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.</p>
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Overflow container in modal', '', () => (
    <div className="uk-margin-bottom">
      <Modal headline="This is the Headline" target={OpenButton}>
        <h1>Headline</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.</p>
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Alert', '', () => (
    <div className="uk-margin-bottom">
      <Modal headline="This is the Headline" target={OpenButton}>
        <h1>Headline</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.</p>
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Confirm', '', () => (
    <div className="uk-margin-bottom">
      <Modal headline="This is the Headline" target={OpenButton}>
        <h1>Headline</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.</p>
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Prompt', '', () => (
    <div className="uk-margin-bottom">
      <Modal headline="This is the Headline" target={OpenButton}>
        <h1>Headline</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.</p>
      </Modal>
    </div>
  ), { header: false, inline: true })
  .addWithInfo('Block UI', '', () => (
    <div className="uk-margin-bottom">
      <Modal headline="This is the Headline" target={OpenButton}>
        <h1>Headline</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.</p>
      </Modal>
    </div>
  ), { header: false, inline: true })
