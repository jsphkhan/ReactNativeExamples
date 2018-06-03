//Timers and TimeMixin

import React, {Component} from 'react';
import {
	View, 
	StyleSheet,
	Text
} from 'react-native';

let interval = null;

export default class TimerExample extends Component {
	state = {
		time: null
	}
	constructor(props) {
		super(props);

		interval = setInterval(function() {
			this.setState({time: new Date().toLocaleString()});
		}.bind(this), 1000);
	}
	componentWillUnMount() {
		//clear the interval
		clearInterval(interval); //always do this.
	}
	render() {
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}>
				<Text style={{fontSize: 20, color: '#fff'}}>{this.state.time}</Text>
			</View>
		);
	} 
}