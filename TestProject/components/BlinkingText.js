//Blinking Text component
//showcases the use of state and props

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default class BlinkingText extends Component {
	// state = {
	// 	isShowing: true
	// }
	constructor(props) {
		super(props);

		this.state = {
			isShowing: true
		}
	}
	componentDidMount() {
		setInterval(function() {
			//update the state
			//this.setState({isShowing: !this.state.isShowing});
			this.setState((prevState) => {
				//console.log(prevState);
				return {isShowing: !prevState.isShowing}
			});
		}.bind(this), 1000);
	}
	render() {
		let {text} = this.props;
		let content = (this.state.isShowing) ? text : "";
		return (
			<Text style={styles.textStyle}>{content}</Text>
		);
	}
}

const styles = StyleSheet.create({
	textStyle: {
		color: 'red',
		fontSize: 20
	}
});