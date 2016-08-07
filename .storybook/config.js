import './uikit.scss'

import infoAddon from '@kadira/react-storybook-addon-info'
import { configure, setAddon, addDecorator } from '@kadira/storybook'

setAddon(infoAddon)

addDecorator(story => (
  <div className="uk-margin-top uk-margin-left uk-margin-right uk-margin-bototm">
    {story()}
  </div>
))

function loadStories() {
  require('../src/stories/button')
  require('../src/stories/dropdown')
  require('../src/stories/Select')
}

configure(loadStories, module)
