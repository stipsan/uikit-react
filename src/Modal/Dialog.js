import classNames from 'classnames'
import { Component, PropTypes, createElement } from 'react'

export default class Dialog extends Component
{
  static defaultProps = {
    close: true,
  }

  static propTypes = {
    blank: PropTypes.bool,
    caption: PropTypes.string,
    children: PropTypes.node,
    close: PropTypes.bool,
    footer: PropTypes.array, // eslint-disable-line react/forbid-prop-types
    handleClose: PropTypes.func,
    header: PropTypes.string,
    large: PropTypes.bool,
    lightbox: PropTypes.bool,
  }

  handleOverlayClick = event => event.stopPropagation()

  handleClose = () => {
    this.props.handleClose()
  }

  render() {
    const { handleOverlayClick, handleClose } = this
    const {
      children,
      header,
      footer,
      caption,
      lightbox,
      blank,
      close,
      large,
     } = this.props

    const dialogClassName = classNames('uk-modal-dialog', {
      'uk-modal-dialog-lightbox': lightbox,
      'uk-modal-dialog-blank': blank,
      'uk-modal-dialog-large': large,
    })
    const closeClassName = classNames('uk-modal-close uk-close', {
      'uk-close-alt': lightbox,
    })

    return (
      <div className={dialogClassName} onClick={handleOverlayClick}>
        {close && (
          <a
            className={closeClassName}
            onClick={handleClose}
          />
        )}
        {header && (<div className="uk-modal-header"><h2>{header}</h2></div>)}
        {caption && (<div className="uk-modal-caption">{caption}</div>)}
        {children}
        { footer && footer.length > 0 &&
          (<div className="uk-modal-footer uk-text-right">
            {
              footer.map((component, i) => createElement(component, { key: i, handleClose }))
            }
          </div>)
        }
      </div>
    )
  }
}
