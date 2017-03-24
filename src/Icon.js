import { Component, PropTypes } from 'react'
import loader from 'uikit/dist/js/uikit-icons.min.js'
import cx from 'classnames'
import Spinner from './Spinner'

let icons
loader({ icon: { add: (UIkitIcons) => { icons = UIkitIcons } } })

const iconNames = Object.keys(icons)

export default class Icon extends Component {

  static propTypes = {
    icon: PropTypes.oneOf(iconNames).isRequired,
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
    const svg = icons[icon] && icons[icon].replace(/^<svg[^>]*>|<\/svg>$/g, '')

    if (icon === 'spinner') {
      return <Spinner className={className} />
    }

    return (
      <span className={cx('uk-icon', className)}>
        <svg
          {...props}
          // @TODO optimize
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: svg }}
          height={height * ratio}
          viewBox={viewBox}
          width={width * ratio}
          xmlns="http://www.w3.org/2000/svg"
        />
      </span>
    )
  }
}
