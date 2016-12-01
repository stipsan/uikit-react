import { storiesOf } from '@kadira/storybook'
import { Notify, Button } from 'uikit-react'
import { PureComponent, PropTypes } from 'react'

class NotificationsContainer extends PureComponent {
  static propTypes = {
    position: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    icon: PropTypes.string,
    isSticky: PropTypes.bool,
    timeout: PropTypes.number,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    isSticky: false,
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
    const { position, type, isSticky, icon, timeout, onClick } = this.props
    return (<div>
      <Button
        className={`uk-margin-bottom uk-button uk-button-${type}`}
        onClick={this.handleClick}
      >
        {`${type} ${position}`}
        {timeout !== undefined ? ' timeout' : ''}
        {isSticky === true ? ' isSticky' : ''}
        {typeof onClick === 'function' ? ' onClick' : ''}
      </Button>
      {onClick}
      <Notify
        handleMessageClick={onClick}
        icon={icon}
        isSticky={isSticky}
        notifications={notifications}
        position={position}
        timeout={timeout}
        type={type}
      />
    </div>)
  }
}

const handleMessageClick = () => {
  // eslint-disable-next-line no-alert
  alert('You clicked on this notification')
}

storiesOf('Notify', module)
  .addWithInfo('Basic Usage', '', () => (
    <div className="uk-margin-bottom">
      <NotificationsContainer type="info" />
      <NotificationsContainer position="bottom-center" type="warning" />
      <NotificationsContainer position="top-right" type="success" />
      <NotificationsContainer position="top-left" type="danger" />
      <NotificationsContainer isSticky position="top-right" type="info" />
      <NotificationsContainer icon="check" position="bottom-right" type="success" />
      <NotificationsContainer icon="check" position="bottom-left" timeout={5000} type="success" />
      <NotificationsContainer icon="check" position="bottom-left" type="danger" onClick={handleMessageClick} />

    </div>
  ), { header: false, inline: true, propTables: [Notify] })
