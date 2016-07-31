import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Button } from 'uikit-react'

storiesOf('Button', module)
  .add('with text', () => (
    <div className="uk-container uk-margin-top">
      <Button primary>Submit</Button> &nbsp;
      <Button success>Submit</Button> &nbsp;
      <Button danger>Submit</Button> &nbsp;
      <Button link>Submit</Button> &nbsp;
      <Button type="submit">Submit</Button>
    </div>
  ))
