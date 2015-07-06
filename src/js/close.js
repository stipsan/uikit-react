var React = require('react/addons'),
    classNames = require('classnames');

export default React.createClass({
	propTypes: {
		alt: React.PropTypes.bool
	},
	getDefaultProps: function () {
		return {
      alt: false, 
    };
	},

	render: function () {
		var classes = classNames('uk-close', {
			'uk-close-alt': this.props.alt, 
		});

		return <a {...this.props} className={classes} />;

	}
});