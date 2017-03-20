import cx from 'classnames'
import { Component, PropTypes, createElement } from 'react'

const links = {}

const subscribe = (namespace, listener) => {
  if (!links[namespace]) {
    links[namespace] = []
  }

  let isSubscribed = true

  links[namespace].push(listener)

  return function unsubscribe() {
    if (!isSubscribed) {
      return
    }

    isSubscribed = false

    const index = links[namespace].indexOf(listener)
    links[namespace].splice(index, 1)
  }
}
const dispatch = (namespace) => {
  const listeners = links[namespace]
  for (let i = 0; i < listeners.length; i++) { // eslint-disable-line no-plusplus
    const listener = listeners[i]
    listener()
  }
}

export default class Dropdown extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    delay: PropTypes.number.isRequired,
    mode: PropTypes.oneOf(['hover', 'click']).isRequired,
    remainTime: PropTypes.number.isRequired,
    component: PropTypes.node,
    dropdownLabel: PropTypes.string,
    link: PropTypes.string,
  }

  static defaultProps = {
    dropdownIcon: '',
    dropdownLabel: 'Open',
    mode: 'hover',
    remainTime: 800,
    delay: 0,
    component: 'div',
    link: '',
  }

  state = {
    isOpen: false,
  }

  componentDidMount() {
    if (this.props.link) {
      // listen to linked components
      this.unsubscribe = subscribe(this.props.link, () => {
        if (this.state.isOpen) {
          this.setState({ isOpen: false })
        }
      })
    }
  }

  componentWillUnmount() {
    if (this.leaveTimeout) {
      clearTimeout(this.leaveTimeout)
    }

    if (this.unsubscribe) {
      this.unsubscribe()
      this.unsubscribe = false
    }
  }

  handleMouseEnter = () => {
    if (this.leaveTimeout) {
      clearTimeout(this.leaveTimeout)
    }
    if (this.props.delay) {
      setTimeout(() => {
        this.setState({ isOpen: true })
      }, this.props.delay)
    } else {
      if (this.props.link) {
        dispatch(this.props.link)
      }
      this.setState({ isOpen: true })
    }

    if (this.props.mode === 'hover') {
      this.setState({ isOpen: true })
    }
  }

  handleMouseLeave = () => {
    if (this.props.remainTime) {
      this.leaveTimeout = setTimeout(() => {
        this.setState({ isOpen: false })
      }, this.props.remainTime)
    } else {
      this.setState({ isOpen: false })
    }
  }

  handleClick = () => {
    if (this.props.mode === 'click') {
      this.setState({ isOpen: !this.state.isOpen })
    }

    if (this.props.mode === 'hover') {
      this.setState({ isOpen: false })
    }
  }

  render() {
    const { handleMouseEnter, handleMouseLeave, handleClick } = this
    const { mode, children, component, link } = this.props
    const { isOpen } = this.state
    const className = cx('uk-button uk-button-default', {
      'uk-open': isOpen,
    })

    const dropdownClassName = cx('uk-dropdown uk-dropdown-bottom-left', {
      'uk-open': isOpen,
    })

    const labelProps = {
      'aria-expanded': isOpen,
      'aria-haspopup': true,
      className: link !== 'navbar' ? className : '',
      onClick: handleClick,
      onMouseEnter: mode === 'hover' && handleMouseEnter,
      onMouseLeave: mode === 'hover' && handleMouseLeave,
      children: this.props.dropdownLabel || mode,
    }

    const childrenProps = {
      'aria-expanded': isOpen,
      'aria-haspopup': true,
      className: dropdownClassName,
      onClick: handleClick,
      onMouseEnter: mode === 'hover' && handleMouseEnter,
      onMouseLeave: mode === 'hover' && handleMouseLeave,
      children,
    }

    const parentProps = {
      className: link !== 'navbar' ? 'uk-inline' : '',
      children: [
        createElement(link === 'navbar' ? 'a' : 'button', labelProps),
        createElement('div', childrenProps),
      ],
    }

    return (
      createElement(component, parentProps)
    )
  }
}
