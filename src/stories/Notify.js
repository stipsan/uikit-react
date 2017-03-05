import { storiesOf, action } from '@kadira/storybook'
import { Notify, Button } from 'uikit-react'
import { PureComponent, PropTypes } from 'react'

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
      <Notify
        notifications={notifications}
        position={position}
      />
    </div>)
  }
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
      <NotificationsContainer icon="warning" position="bottom-left" timeout={10000} type="warning" />
      <NotificationsContainer icon="warning" position="top-right" timeout={5000} type="danger" onClick={action('handleClick')} />

    </div>
  ), { header: false, inline: true, propTables: [Notify] })
