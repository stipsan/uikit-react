var React = require('react');

var Alert = React.createClass({

    propTypes: {
      success: React.PropTypes.bool, 
      danger: React.PropTypes.bool,
      warning: React.PropTypes.bool,
      large: React.PropTypes.bool,
      className: React.PropTypes.string,
      closeButton: React.PropTypes.node
    },

    render: function() {
        return (
            <div />
        );
    }

});

module.exports = Alert;