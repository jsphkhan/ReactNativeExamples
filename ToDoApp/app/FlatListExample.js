import React, { Component } from 'react';
import {
	View, 
	Text,
	Image,
	ImageBackground,
	StyleSheet,
	FlatList,
	Button
} from 'react-native';


export default class FlatListExample extends Component {
	constructor(props) {
		super(props);

		this.data = [
			{key: 1, name: 'Joseph'}, 
			{key: 2, name: 'Amit'},
			{key: 3, name: 'Joseph'}, 
			{key: 4, name: 'Amit'},
			{key: 5, name: 'Joseph'}, 
			{key: 6, name: 'Amit'},
			{key: 7, name: 'Joseph'}, 
			{key: 8, name: 'Amit'}
		];

		this.state = {
			isRefresh: false
		}
	}
	renderListItem = (info) => {
		//console.log(info);
		return (
			<View style={styles.listItem}>
				<Text>{info.item.name}</Text>
			</View>
		);
	}
	render() {
		return (
			<View style={{flex: 1, marginTop: 25, paddingHorizontal: 5}}>
				<FlatList
  					data={this.data}
  					renderItem={this.renderListItem}
  					keyExtractor={(item) => item.key + ""}
  					ListHeaderComponent={<Text>List Header</Text>}
  					horizontal={false}
  					onRefresh={() => {
  						console.log('refresh');
  						this.setState({isRefresh: true});
  						setTimeout(function() {
  							this.setState({isRefresh: false});
  						}.bind(this), 2000);
  					}}
					refreshing={this.state.isRefresh}
				/>	
			</View>

		);
	}
}

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		marginBottom: 5,
		backgroundColor: '#ddd'
	}
});
