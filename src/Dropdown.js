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
  for (let i = 0; i < listeners.length; i++) {
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
    className: PropTypes.string,
    component: PropTypes.node,
    link: PropTypes.string,
  }

  static defaultProps = {
    mode: 'hover',
    remainTime: 800,
    delay: 0,
    component: 'div',
    className: 'uk-button-dropdown',
  }

  state = {
    isOpen: false,
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
    this.setState({ isOpen: !this.state.isOpen })
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

  render() {
    const className = cx(this.props.className, {
      'uk-open': this.state.isOpen,
    })
    const DropdownProps = {
      'aria-expanded': this.state.isOpen,
      'aria-haspopup': true,
      className,
      onClick: this.props.mode === 'click' && this.handleClick,
      onMouseEnter: this.props.mode === 'hover' && this.handleMouseEnter,
      onMouseLeave: this.props.mode === 'hover' && this.handleMouseLeave,
      children: this.props.children,
    }
    return (
      createElement(this.props.component, DropdownProps)
    )
  }
}
