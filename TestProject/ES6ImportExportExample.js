import React, { Component } from 'react';
import {
	View,
	Text
} from 'react-native';

import {MyComp1, MyComp2} from './components/modules/module1';

//mycomp4 is the default export
import MyComp4, {MyComp3} from './components/modules/module2';

export default class ES6ImportExportExample extends Component {
	render() {
		return (
			<View style={{flex: 1, padding: 25}}>
				<Text>ES6 Module import export example</Text>
				<MyComp1 />
				<MyComp2 />

				<MyComp4 />
				<MyComp3 />
			</View>
		);
	}
}