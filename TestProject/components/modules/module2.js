//exports 2 classes

import React from 'react';
import {
	Text
} from 'react-native';


//so here I am using export default, 
//but exporting multiple components

//normal export
export class MyComp3 extends React.Component {
	render() {
		return (
			<Text>Component3</Text>
		);
	}
}

//Default class exported
export default class MyComp4 extends React.Component {
	render() {
		return (
			<Text>Component4</Text>
		);
	}
}