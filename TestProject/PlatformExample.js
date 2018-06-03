import React, { Component } from 'react';
import {
	View,
	Text,
	Platform,
	StyleSheet
} from 'react-native';

export default class PlatformExample extends Component {
	state = {

	}
	constructor(props) {
		super(props);
	}
	render() {

		let element = (Platform.OS === 'ios') ? (<Text>iOS</Text>) : (<Text>Android</Text>);
		let version = Platform.Version;

		//console.log(Platform);

		return (
			<View style={styles.container}>
				{element}
				<Text>{version}</Text>
			</View>
		);
	} 
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});