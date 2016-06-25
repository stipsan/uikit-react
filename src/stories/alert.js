import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Alert', module)
  .add('with text', () => (
    <div className="uk-container uk-margin-top">
    <div className="uk-alert uk-alert-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
    <div className="uk-alert uk-alert-success">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
    <div className="uk-alert uk-alert-warning">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
    <div className="uk-alert uk-alert-danger">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
    </div>
  ));
