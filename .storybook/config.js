import 'uikit/src/less/uikit.theme.less'

import infoAddon from '@kadira/react-storybook-addon-info'
import { configure, setAddon, addDecorator } from '@kadira/storybook'

import Logo from './Logo'

setAddon(infoAddon)

addDecorator((fn, { kind, story }) => <div>
  <nav className="uk-navbar-container uk-navbar">
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <li className="uk-active">
          <a>
            <div>
              {kind}
              <div className="uk-navbar-subtitle">{story}</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div className="uk-navbar-center">
      <Logo />
      <div className="uk-navbar-center-right">
        <div>
          <div className="uk-flex uk-flex-middle" style={{ height: '80px' }}>
            <iframe
              frameBorder="0"
              height="20px"
              scrolling="0"
              src="https://ghbtns.com/github-btn.html?user=stipsan&repo=uikit-react&type=star&count=true"
              width="170px"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="uk-navbar-right">
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
  require('../src/stories/Modal')
  require('../src/stories/Notification')
  require('../src/stories/Input')
  require('../src/stories/Icon')
}

configure(loadStories, module)
