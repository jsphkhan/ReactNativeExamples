/* Example of Drawer Navigator that hosts a Stack Navigator */

import React, { Component } from 'react';
import {
	View,
	Text,
	Button
} from 'react-native';

import {createStackNavigator, createDrawerNavigator} from 'react-navigation';

/* Screens for Stack Nav */
class StackScreen1 extends Component {
	static navigationOptions = {
		title: 'Stack Screen1'
	}
	render() {
		let {navigation} = this.props;
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Button title="Go to Stack Screen2" onPress={() => {
					navigation.navigate('stackscreen2');
				}} />
				<Button title="Open Drawer" onPress={() => {
					navigation.openDrawer();
				}} />
			</View>
		);
	}
}

class StackScreen2 extends Component {
	static navigationOptions = {
		title: 'Stack Screen2'
	}
	render() {
		let {navigation} = this.props;
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Button title="Go Back" onPress={() => {
					navigation.goBack();
				}} />
			</View>
		);
	}
}

//Drawer Menu - Custom
class DrawerMenu extends Component {
	render() {
		let {navigation} = this.props;
		return (
			<View style={{flex: 1, padding: 20, alignItems: 'flex-start'}}>
				<Button title="Stack" onPress={() => {
					navigation.navigate('stack');
				}}/>
				<Button title="Drawer Screen1" onPress={() => {
					navigation.navigate('drawerscreen1');
				}}/>
				<Button title="Drawer Screen2" onPress={() => {
					navigation.navigate('drawerscreen2');
				}}/>
			</View>
		);
	}
}

class DrawerScreen1 extends Component {
	render() {
		let {navigation} = this.props;
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Text>Drawer Screen1</Text>
				<Button title="Open Drawer" onPress={() => {
					navigation.openDrawer();
				}} />
			</View>
		);
	}
}

class DrawerScreen2 extends Component {
	render() {
		let {navigation} = this.props;
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Text>Drawer Screen2</Text>
				<Button title="Open Drawer" onPress={() => {
					navigation.openDrawer();
				}} />
			</View>
		);
	}
}

//define a stack nav
let Stack = createStackNavigator({
  stackscreen1: {
    screen: StackScreen1
  },
  stackscreen2: {
    screen: StackScreen2
  }
}, {
  initialRouteName: 'stackscreen1',
  mode: 'card', //card,modal
  headerMode: 'float'
});

//drawer nav will 
let Drawer = createDrawerNavigator({
	stack: {
		screen: Stack
	},
	drawerscreen1: {
		screen: DrawerScreen1
	},
	drawerscreen2: {
		screen: DrawerScreen2
	}
}, {
	//headerMode: 'none',
	drawerWidth: 300,
	drawerPosition: 'left',
	contentComponent: DrawerMenu
});

//export default Drawer;

export default class DrawerNavigatorExample extends Component {
	constructor(props) {
		super(props);

		console.disableYellowBox = true; //to remove yellow warning
	}
	render() {
		return (
			<View style={{flex: 1, backgroundColor: 'yellow'}}>
				<Drawer />
			</View>
		);
	}
}