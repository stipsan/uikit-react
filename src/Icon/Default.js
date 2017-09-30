import { PureComponent } from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import icons from './icons'
import { getDimensionsFromViewBox, getInnerSvg } from './utils'

export default class Default extends PureComponent {

  static propTypes = {
    component: PropTypes.string.isRequired,
    icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
    ratio: PropTypes.number.isRequired,
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
    component: 'span',
    ratio: 1,
  }

  render() {
    const { className, component, ratio, icon, ...props } = this.props
    const svg = icons[icon]
    const { width, height } = getDimensionsFromViewBox(svg)
    const innerSvg = getInnerSvg(svg)

    if (!svg) return false

    const Wrapper = component

    return (
      <Wrapper className={cx('uk-icon', className)} {...props}>
        <svg
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: innerSvg }}
          height={height * ratio}
          icon={icon}
          viewBox={`0 0 ${width} ${height}`}
          width={width * ratio}
          xmlns="http://www.w3.org/2000/svg"
        />
      </Wrapper>
    )
  }
}
