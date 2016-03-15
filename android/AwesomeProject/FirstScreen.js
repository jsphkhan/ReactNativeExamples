'use strict';

var React = require("react-native");

var {
	Component,
	StyleSheet,
	Text,
	View,
	TouchableHighlight
} = React;

class FirstScreen extends Component {
	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
				<Text>This is my First Screen</Text>
				<TouchableHighlight onPress={this.handleClick.bind(this)} style={{marginTop: 20}}>
					<Text>Navigate to Second Screen</Text>
				</TouchableHighlight>
			</View>
		);
	}
	handleClick() {
		//alert('test');
		var navigator = this.props.navigator;
		navigator.push({
			id: 'SecondScreen',
			name: 'Test'
		});
	}
}

module.exports = FirstScreen;