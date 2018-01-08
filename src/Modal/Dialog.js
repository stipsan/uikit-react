import classNames from 'classnames'
import React, { Component, createElement } from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'

export default class Dialog extends Component {
  static defaultProps = {
    blank: false,
    caption: '',
    close: true,
    footer: [],
    header: '',
    large: false,
    lightbox: false,
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    handleClose: PropTypes.func.isRequired,
    blank: PropTypes.bool,
    caption: PropTypes.string,
    close: PropTypes.bool,
    footer: PropTypes.array, // eslint-disable-line react/forbid-prop-types
    header: PropTypes.string,
    large: PropTypes.bool,
    lightbox: PropTypes.bool,
  }

  handleOverlayClick = event => event.stopPropagation()

  handleClose = (callback) => {
    this.props.handleClose(callback)
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
    const closeClassName = 'uk-modal-close-default uk-close'

    return (
      <div className={dialogClassName} onClick={handleOverlayClick}>
        {close && <Icon className={closeClassName} component="button" icon="close-icon" type="button" onClick={handleClose} />}
        {header && <div className="uk-modal-header"><h2>{header}</h2></div>}
        {caption && <div className="uk-modal-caption">{caption}</div>}
        <div className="uk-modal-body">{children}</div>
        { footer.length > 0 && (
          <div className="uk-modal-footer uk-text-right">
            {footer.map((component, i) => createElement(component, { key: i, handleClose }))}
          </div>
        )}
      </div>
    )
  }
}
