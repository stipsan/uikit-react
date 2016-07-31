import 'uikit/dist/css/uikit.css'

import { configure } from '@kadira/storybook'

function loadStories() {
  require('../src/stories/button')
  require('../src/stories/dropdown')
  require('../src/stories/modal')
}

configure(loadStories, module)
