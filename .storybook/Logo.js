import src from './static/logo.svg'

const linkStyle = Object.freeze({
  height: '40px',
  overflow: 'hidden',
  paddingRight: 0,
  paddingLeft: 0,
  marginLeft: '-15px',
})

const logoStyle = Object.freeze({
  height: '70px',
  marginTop: '-15px',
  opacity: 0.9,
  width: '82px',
})

const Logo = () => <a className="uk-navbar-brand" style={linkStyle}>
  <img role="presentation" src={src} style={logoStyle} title="UIkit React Logo" />
</a>

export default Logo
