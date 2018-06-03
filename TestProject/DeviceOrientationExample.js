/*
	Example that detects orientation change
	Applies ddifferent style based on Orientation change
*/

import React, { Component } from 'react';
import {
	View,
	Text,
	Dimensions,
	StyleSheet
} from 'react-native';


export default class DeviceOrientationExample extends Component {
	state = {
		orientation: ""
	}
	constructor(props) {
		super(props);
		//listen for Dimension change event
		Dimensions.addEventListener('change', this.handleLayoutChange.bind(this));
	}
	checkOrientation(windowObj) {
		//console.log(windowObj);
		let {width, height} = windowObj; //de-structuring
		if(height > width) {
			this.setState({orientation: 'portrait'});
		} else {
			this.setState({orientation: 'landscape'});
		}
	}
	handleLayoutChange(dimensions) {
		console.log(dimensions);
		//console.log(dimensions.window.width, dimensions.window.height);

		this.checkOrientation(dimensions.window);
		
		/*dimensions = {
			window: {width: , height: , scale: fontScale: },
			screen: {}
		};*/
	}
	componentDidMount() {
		this.checkOrientation(Dimensions.get('window'));
	}
	componentWillUnmount() {
		Dimensions.removeEventListener('change', this.handleLayoutChange);
	}
	render() {
		let orientationStyle = (this.state.orientation === 'portrait') ? styles.containerPortrait : styles.containerLandscape;
		return (
			<View style={[styles.containerGeneric, orientationStyle]}>
				<Text>{this.state.orientation}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerGeneric: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	containerPortrait: {
		backgroundColor: 'red'
	},
	containerLandscape: {
		backgroundColor: 'green'
	}
});