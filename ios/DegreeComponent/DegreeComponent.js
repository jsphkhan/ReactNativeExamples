'use strict'

var React = require('react-native');

var {
	View,
	StyleSheet
} = React;

var DegreeComponent = React.createClass({
	render: function() {
		return (
			<View style={[styles.degree, this.props.style]}></View>
		);
	}
});

var styles = StyleSheet.create({
	degree: {
		borderColor: 'black',
		backgroundColor: 'transparent',
		borderWidth: 1
	}
});

module.exports = DegreeComponent;