//Take a normal text input and make it print in password format

import React, { Component } from 'react';
import {
	View,
	TextInput,
	Text
} from 'react-native';

export default class TextInputPasswordExample extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: ""
		};
	}
	handleChage(val) {
		//console.log(val);
		//console.log(val.replace(/./gi, '*'));

		this.setState({text: val.replace(/./gi, '*')});
	}
	render() {
		return (
			<View style={{flex: 1, justifyContent: 'flex-start', padding: 25}}>
				<TextInput 
				  style={{
					width: '100%',
					borderBottomWidth: 1,
					borderBottomColor: '#dddddd',
					height: 50,
					fontSize: 20
				  }} 
				  value={this.state.text}
				  onChangeText={this.handleChage.bind(this)}
		  		/>
		  		<Text>{this.state.text}</Text>
			</View>
		);
	}
}