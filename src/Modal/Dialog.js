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
    caption: PropTypes.string,
    children: PropTypes.node,
    footer: PropTypes.array,
    handleClose: PropTypes.func,
    header: PropTypes.string,
  }

  handleOverlayClick = event => event.stopPropagation()

  handleClose = event => {
    event.preventDefault()
    this.props.handleClose()
  }

  render() {
    const { handleOverlayClick, handleClose } = this
    const { children, header, footer, caption } = this.props

    return (
      <div className="uk-modal-dialog" onClick={handleOverlayClick}>
        <a
          className="uk-modal-close uk-close"
          onClick={handleClose}
        />
        {header && (<div className="uk-modal-header"><h2>{header}</h2></div>)}
        {caption && (<div className="uk-modal-caption">{caption}</div>)}
        {children}
        { footer &&
          (<div className="uk-modal-footer">
            {footer.map((node) => {
              console.log(node)
            })}
          </div>)
        }
      </div>
        )
  }
}
