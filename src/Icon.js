import { Component, PropTypes, createElement } from 'react'
import loader from 'uikit/dist/js/uikit-icons.min.js'

let icons
loader({ icon: { add: (UIkitIcons) => { icons = UIkitIcons } } })

const iconNames = Object.keys(icons)

export default class Icon extends Component {

  static propTypes = {
    icon: PropTypes.oneOf(iconNames).isRequired,
    load: PropTypes.func.isRequired,
    ratio: PropTypes.number.isRequired,
    // @TODO custom viewBox validator
    viewBox: PropTypes.string.isRequired,
  }

  static defaultProps = {
    ratio: 1,
    viewBox: '0 0 20 20',
  }

  render() {
    // @TODO parse icon size from viewbox
    const height = 20
    const width = 20

    const { ratio, viewBox, icon, ...props } = this.props

    return (
      <span className="uk-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={height * ratio}
          width={width * ratio}
          viewBox={viewBox}
          dangerouslySetInnerHTML={{ __html: icons[icon] }}
        />
      </span>
    )
  }
}
