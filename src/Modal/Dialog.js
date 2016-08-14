import { Component, PropTypes } from 'react'

export default class Dialog extends Component
{
  static defaultProps = {
    style: {
      overlay: {},
      content: {},
    },
  }

  static propTypes = {
    children: PropTypes.node,
    handleClose: PropTypes.func,
  }

  handleOverlayClick = event => event.stopPropagation()

  handleClose = event => {
    event.preventDefault()
    this.props.handleClose()
  }

  render() {
    const { handleOverlayClick, handleClose } = this
    const { children } = this.props

    return (
      <div className="uk-modal-dialog" onClick={handleOverlayClick}>
        <a
          className="uk-modal-close uk-close"
          onClick={handleClose}
        />
        {children}
      </div>
        )
  }
}
