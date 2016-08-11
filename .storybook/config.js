import './uikit.scss'

import infoAddon from '@kadira/react-storybook-addon-info'
import { configure, setAddon, addDecorator } from '@kadira/storybook'

import Logo from './Logo'

setAddon(infoAddon)

addDecorator((fn, { kind, story }) => <div>
  <nav className="tm-navbar uk-navbar">
    <Logo />
    <ul className="uk-navbar-nav">
      <li className="uk-active">
        <a className="uk-navbar-nav-subtitle" href="#/getting-started">
          {kind}
          <div>{story}</div>
        </a>
      </li>
    </ul>
    <div className="uk-navbar-flip">
      <ul className="uk-navbar-nav">
        <li>
          <a
            href="https://github.com/stipsan/uikit-react"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div className="uk-margin-top uk-margin-left uk-margin-right uk-margin-bottom">
    {fn()}
  </div>
</div>)

function loadStories() {
  require('../src/stories/Button')
  require('../src/stories/Dropdown')
  require('../src/stories/Select')
}

configure(loadStories, module)
