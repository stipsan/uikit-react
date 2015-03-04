/** @jsx React.DOM */
var React = require('react/addons'),
    classNames = require('classnames');

var Close = React.createClass({
	propTypes: {
		alt: React.PropTypes.bool
	},
	getDefaultProps: function () {
		return {
      alt: false, 
    };
	},

	render: function () {
		var classes = classNames('uk-button', {
			'uk-close-alt': this.props.alt, 
		});

		return (
      <a 
      	className={classes}
       >
       {this.props.children}
    </a>
    );

	}
});

module.exports = Close;