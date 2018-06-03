import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput
} from 'react-native';

export default class GettingElementRefExample extends Component {
	handlePress() {
		this.refs['myView'].setNativeProps({
			opacity: 0.6,
			backgroundColor: 'green',
			width: '50%'
		});

		this.refs['myView'].measure(function(x, y, width, height, pageX, pageY) {
			console.log(x, y, width, height, pageX, pageY);
		});

		//empty the text input
		this._myTxtInput.setNativeProps({
			text: ''
		});

	}
	handleOnLayout(e) {
		//onLayout values are availabe before measure()
		console.log(e.nativeEvent);
		/* 
			layout: {
				height: 667,
				width: 375,
				x: 0,
				y: 0
			}
		*/
	}
	render() {
		return (
			<View
			  ref="myView"
			  style={{flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}
			  onLayout={this.handleOnLayout.bind(this)}>
				<TouchableOpacity onPress={this.handlePress.bind(this)}>
					<Text>Click</Text>
				</TouchableOpacity>
				<TextInput 
				  value="Some intial value"
				  ref={(ref) => this._myTxtInput = ref}
				  style={styles.textInput} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	textInput: {
		width: 200,
		borderBottomWidth: 1,
		borderBottomColor: 'black'
	}
});