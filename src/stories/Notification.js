import { storiesOf, action } from '@storybook/react'
import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Notification, Button } from '..'

class NotificationsContainer extends PureComponent {
  static propTypes = {
    position: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    icon: PropTypes.string, // eslint-disable-line react/require-default-props
    isSticky: PropTypes.bool, // eslint-disable-line react/require-default-props
    timeout: PropTypes.number, // eslint-disable-line react/require-default-props
    onClick: PropTypes.func, // eslint-disable-line react/require-default-props
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
      notifications: [
        {
          id: this.state.count,
          type: this.props.type,
          icon: this.props.icon,
          message: `Notification #${this.state.count}`,
          isSticky: this.props.isSticky,
          timeout: this.props.timeout,
          onClick: this.props.onClick ? this.props.onClick : () => {},
        },
        ...this.state.notifications],
      count: this.state.count + 1,
    })
  }

  render() {
    const { notifications } = this.state
    const { position, type } = this.props
    return (<div>
      <Button
        className={`uk-margin-bottom uk-button uk-button-${type}`}
        onClick={this.handleClick}
      >
        {`${type}-${position}`}
        {this.props.isSticky ? '- isSticky' : ''}
        {this.props.icon ? '- icon' : ''}
        {this.props.onClick ? '- click' : ''}
        {this.props.timeout ? '- timeout' : ''}
      </Button>
      <Notification
        notifications={notifications}
        position={position}
      />
    </div>)
  }
}

Notification.displayName = 'Notification'

storiesOf('Notification', module)
  .addWithInfo('Basic Usage', '', () => (
    <div className="uk-margin-bottom">
      <NotificationsContainer type="info" />
    </div>
  ), { header: false, inline: true, propTables: [Notification] })
  .addWithInfo('Position', '', () => (
    <div className="uk-margin-bottom">
      <NotificationsContainer position="top-left" type="info" />
      <NotificationsContainer position="top-center" type="info" />
      <NotificationsContainer position="top-right" type="info" />
      <NotificationsContainer position="bottom-left" type="info" />
      <NotificationsContainer position="bottom-center" type="info" />
      <NotificationsContainer position="bottom-right" type="info" />
    </div>
  ), { header: false, inline: true, propTables: [Notification] })
  .addWithInfo('Style', '', () => (
    <div className="uk-margin-bottom">
      <NotificationsContainer position="bottom-center" type="info" />
      <NotificationsContainer position="top-left" type="primary" />
      <NotificationsContainer position="top-center" type="success" />
      <NotificationsContainer position="top-right" type="warning" />
      <NotificationsContainer position="bottom-left" type="danger" />
    </div>
  ), { header: false, inline: true, propTables: [Notification] })
  .addWithInfo('Component options', '', () => (
    <div className="uk-margin-bottom">
      <NotificationsContainer icon="warning" position="bottom-left" timeout={10000} type="warning" />
      <NotificationsContainer icon="warning" position="top-right" timeout={5000} type="danger" onClick={action('handleClick')} />
      <NotificationsContainer position="top-center" type="success" />
      <NotificationsContainer position="top-right" type="warning" />
      <NotificationsContainer isSticky icon="check" position="top-left" type="success" />
    </div>
  ), { header: false, inline: true, propTables: [Notification] })
