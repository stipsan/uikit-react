import './uikit.less'

import infoAddon from '@kadira/react-storybook-addon-info'
import { configure, setAddon, addDecorator } from '@kadira/storybook'

import Logo from './Logo'

setAddon(infoAddon)

addDecorator((fn, { kind, story }) => <div>
  <nav className="tm-navbar uk-navbar uk-navbar-attached">
    <Logo />
    <ul className="uk-navbar-nav">
      <li className="uk-active">
        <a className="uk-navbar-nav-subtitle">
          {kind}
          <div>{story}</div>
        </a>
      </li>
    </ul>
    <div className="uk-navbar-content">
      <iframe
        frameBorder="0"
        height="20px"
        scrolling="0"
        src="https://ghbtns.com/github-btn.html?user=stipsan&repo=uikit-react&type=star&count=true"
        width="170px"
      />
    </div>
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
    {/* <a
      href={`javascript:
      var script = document.createElement('script');
      script.setAttribute('src', 'https://getuikit.com/migrate.min.js');
      document.body.appendChild(script);
    `}>test</a> */}
    {fn()}
  </div>
</div>)

function loadStories() {
  require('../src/stories/Button')
  require('../src/stories/Dropdown')
  require('../src/stories/Modal')
  require('../src/stories/Notification')
  require('../src/stories/Input')
}

configure(loadStories, module)
