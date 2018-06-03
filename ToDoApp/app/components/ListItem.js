import React, {Component} from 'react';
import {
	View, 
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native';


export default class ListItem extends Component {
	render() {
		let {taskName, onItemDelete} = this.props;
		return (
			<TouchableOpacity 
			  style={styles.listItem} 
			  onPress={onItemDelete}>
				<Text>{taskName}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		backgroundColor: '#efefef',
		marginBottom: 5
	}
});