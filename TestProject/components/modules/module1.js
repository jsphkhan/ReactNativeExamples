//exports 2 classes

import React from 'react';
import {
	Text
} from 'react-native';


//so here I am not using export default, 
//but exporting multiple components
export class MyComp1 extends React.Component {
	render() {
		return (
			<Text>Component1</Text>
		);
	}
}

export class MyComp2 extends React.Component {
	render() {
		return (
			<Text>Component2</Text>
		);
	}
}