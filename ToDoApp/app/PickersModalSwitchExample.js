import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Picker,
	Modal,
	Switch,
	Button
} from 'react-native';


export default class PickersModalSwitchExample extends Component {
	constructor(props) {
		super(props);

		this.state = {
			language: 'c#',
			selected: true,
			isModalVisible: false
		}
	}
	handleValueChange(value, index) {
		this.setState({language: value});
	}
	render() {
		return (
			<View style={{flex: 1}}>
				<Picker 
					style={{backgroundColor: 'red'}}
					selectedValue={this.state.language}
					onValueChange={this.handleValueChange.bind(this)}>
					<Picker.Item label="Java" value="java"/>
					<Picker.Item label="C Sharp" value="c#"/>
				</Picker>

				<Switch 
					style={{marginTop: 20}}
					value={this.state.selected}
					onValueChange={(value) => this.setState({selected: value})}
					onTintColor="#ea4c89"/>

				<Modal 
					visible={this.state.isModalVisible}
					animationType="slide"
					transparent={true}>

					<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
						<View style={{width: 300, height: 300, backgroundColor: '#fff'}}>
							<Button title="Close Modal" onPress={() => this.setState({isModalVisible: false})} />
						</View>
					</View>

				</Modal>

				<Button 
					title="Open Modal" 
					onPress={() => {this.setState({isModalVisible: true})}}/>
			</View>
		);
	}
}