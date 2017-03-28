import { Component, PropTypes } from 'react'
import cx from 'classnames'

import icons from './icons'
import Spinner from './Spinner'
console.log(icons)
const iconNames = Object.keys(icons)

export default class Icon extends Component {

  static propTypes = {
    icon: PropTypes.oneOf([...iconNames, 'spinner']).isRequired,
    ratio: PropTypes.number.isRequired,
    // @TODO custom viewBox validator
    viewBox: PropTypes.string.isRequired,
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
    ratio: 1,
    viewBox: '0 0 20 20',
  }

  render() {
    // @TODO parse icon size from viewbox
    const height = 20
    const width = 20

    const { className, ratio, viewBox, icon, ...props } = this.props

    if (icon === 'spinner') {
      return <Spinner className={className} />
    }

    const svg = icons[icon] && icons[icon].replace(/^<svg[^>]*>|<\/svg>$/g, '')

    return (
      <span className={cx('uk-icon', className)}>
        <svg
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: svg }}
          {...props}
          // @TODO optimize

          height={height * ratio}
          viewBox={viewBox}
          icon={icon}
          width={width * ratio}
          xmlns="http://www.w3.org/2000/svg"
        />
      </span>
    )
  }
}
