import 'uikit/dist/css/uikit.css'

import { configure } from '@kadira/storybook'

function loadStories() {
  require('../src/stories/button')
  require('../src/stories/dropdown')
  // require as many stories as you need.
}

configure(loadStories, module)
