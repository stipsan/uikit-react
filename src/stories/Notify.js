import { storiesOf } from '@kadira/storybook'
import { Notify, Button } from 'uikit-react'
import { PureComponent } from 'react'

class NotificationsContainer extends PureComponent {

  state = {
    notifications: [],
    count: 1,
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState({
      notifications: [{ id: this.state.count, type: 'success', message: `Notification #${this.state.count}` }, ...this.state.notifications],
      count: this.state.count + 1,
    })
  }

  render() {
    const { notifications } = this.state
    return (<div>
      <Button onClick={this.handleClick}>Show notification</Button>
      <Notify notifications={notifications} position="top-center" type="info" />
    </div>)
  }
}

storiesOf('Notify', module)
  .addWithInfo('Basic Usage', '', () => (
    <div className="uk-margin-bottom">
      <NotificationsContainer /> <br />
    </div>
  ))
