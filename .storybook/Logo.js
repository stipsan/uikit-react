import src from './static/logo.svg'

const logoStyle = Object.freeze({
  height: '64px',
})

const Logo = () => <a className="uk-navbar-item uk-logo">
  <img alt="UIkit React Logo" src={src} style={logoStyle} />
</a>

export default Logo
