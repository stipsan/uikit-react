import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

storiesOf('Button', module)
  .add('with text', () => (
    <div className="uk-container uk-margin-top">
      <button onClick={action('clicked')} className="uk-button uk-button-primary">Primary</button>
      <button onClick={action('clicked')} className="uk-button uk-button-success">Success</button>
      <button onClick={action('clicked')} className="uk-button uk-button-danger">Danger</button>
      <button onClick={action('clicked')} className="uk-button uk-button-link">Link</button>
    </div>
  ))
  .add('with no text', () => (
    <button></button>
))
