import 'uikit/dist/css/uikit.css'

import { configure } from '@kadira/storybook'

function loadStories() {
  require('../src/stories/button')
  require('../src/stories/dropdown')
}

configure(loadStories, module)
