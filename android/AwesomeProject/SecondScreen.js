'use strict';

var React = require("react-native");

var {
	Component,
	StyleSheet,
	Text,
	View,
	TouchableHighlight
} = React;

class SecondScreen extends Component {
	render() {
		return (
			<View style={{flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center'}}>
				<Text>This is my Second Screen</Text>
				<TouchableHighlight onPress={this.handleClick.bind(this)} style={{marginTop: 20}}>
					<Text>Back</Text>
				</TouchableHighlight>
			</View>
		);
	}
	handleClick() {
		var navigator = this.props.navigator;
		navigator.pop();
	}
}

module.exports = SecondScreen;