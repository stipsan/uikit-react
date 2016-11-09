import { storiesOf } from '@kadira/storybook'
import { Notify, Button } from 'uikit-react'
import { PureComponent, PropTypes } from 'react'

class NotificationsContainer extends PureComponent {
  static propTypes = {
    position: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }

  static defaultProps = {
    position: 'top-center',
    type: 'info',
  }

  state = {
    notifications: [],
    count: 1,
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState({
      notifications: [{ id: this.state.count, type: this.props.type, message: `Notification #${this.state.count}` }, ...this.state.notifications],
      count: this.state.count + 1,
    })
  }

  render() {
    const { notifications } = this.state
    const { position, type } = this.props
    return (<div>
      <Button onClick={this.handleClick}>Show {`${type} ${position}`} notification</Button>
      <Notify notifications={notifications} position={position} type={type} />
    </div>)
  }
}

storiesOf('Notify', module)
  .addWithInfo('Basic Usage', '', () => (
    <div className="uk-margin-bottom">
      <NotificationsContainer type="info" /> <br />
      <NotificationsContainer position="bottom-center" type="warning" /> <br />
      <NotificationsContainer position="top-right" type="success" /> <br />
      <NotificationsContainer position="top-left" type="danger" /> <br />
    </div>
  ))
