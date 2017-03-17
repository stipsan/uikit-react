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
    buttonLabel: PropTypes.string,
    className: PropTypes.string,
    component: PropTypes.node,
    link: PropTypes.string,
  }

  static defaultProps = {
    buttonLabel: 'hover',
    mode: 'hover',
    remainTime: 800,
    delay: 0,
    component: 'button',
    className: 'uk-button uk-button-default',
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
    const { mode, children, component, buttonLabel } = this.props
    const { isOpen } = this.state
    const className = cx(this.props.className, {
      'uk-open': isOpen,
    })
    const dropdownClassnames = cx('uk-dropdown uk-dropdown-bottom-left', {
      'uk-open': isOpen,
    })
    const DropdownProps = {
      'aria-expanded': isOpen,
      'aria-haspopup': true,
      className,
      onClick: handleClick,
      onMouseEnter: mode === 'hover' && handleMouseEnter,
      onMouseLeave: mode === 'hover' && handleMouseLeave,
      children: buttonLabel || mode,
    }
    return (
      <div className="uk-inline">
        {createElement(component, DropdownProps)}
        <div className={dropdownClassnames}>
          {children}
        </div>
      </div>
    )
  }
}
