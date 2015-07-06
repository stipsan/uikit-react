import React from 'react';
import classNames from 'classnames';

export default class Close extends React.Component {
	
  static propTypes = {
		alt: React.PropTypes.bool
	};
	static defaultProps = {
    alt: false, 
  };

	render() {
		var classes = classNames('uk-close', {
			'uk-close-alt': this.props.alt, 
		});

		return <a {...this.props} className={classes} />;

	}
};