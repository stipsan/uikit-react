import cx from 'classnames'
import { Component, cloneElement } from 'react'
import PropTypes from 'prop-types'

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
    children: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
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
    link: '',
    className: 'uk-inline',
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
    const { mode, component, children, className } = this.props
    const { isOpen } = this.state

    const eventHandlers = {
      onClick: handleClick,
    }
    if (mode === 'hover') {
      eventHandlers.onMouseEnter = handleMouseEnter
      eventHandlers.onMouseLeave = handleMouseLeave
    }

    if (typeof children === 'function') {
      return children({ isOpen, ...eventHandlers })
    }

    if (!Array.isArray(children) || children.length !== 2) {
      throw new Error('Children must be passed as array and must have two components.')
    }
    const [target, body] = children

    // construct target Element
    const targetElement = cloneElement(target, {
      ...target.props,
      ...eventHandlers,
      className: cx(target.props.className, {
        'uk-open': isOpen,
      }),
    })

    // construct body Element
    const bodyElement = cloneElement(body, {
      ...body.props,
      ...eventHandlers,
      className: cx(body.props.className, {
        'uk-open': isOpen,
      }),
    })

    const WrapperComponent = component

    return (
      <WrapperComponent className={className}>
        {targetElement}
        {bodyElement}
      </WrapperComponent>
    )
  }
}
