import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList,
	AsyncStorage
} from 'react-native';


export default class HTTPCallExample extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			dataArr: []
		}

		//AsyncStorage.setItem("@MyStore:key", JSON.stringify({name: 'joseph'})).then(() => console.log('ddone'));
	}
	componentDidMount() {
		//make an API call
		let url = "https://randomuser.me/api/?results=100"; //random user api

		fetch(url).then((response) => {
			//console.log(response);
			return response.json();
		}).then((responseJson) => {
			console.log(responseJson);

			this.setState({dataArr: responseJson.results, isLoading: false});
		}).catch((error) => {
			console.log(error);
		});

		// AsyncStorage.getItem("@MyStore:key").then((test) => {
		// 	console.log(JSON.parse(test));
		// });
	}
	render() {
		if(this.state.isLoading) {
			return (
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<Text>Loading</Text>
				</View>
			);
		}
		return (
			<View style={{flex: 1, backgroundColor: 'yellow'}}>
				<FlatList
					data={this.state.dataArr} 
					renderItem={(info) => {return (
						<Text>{info.item.email}</Text>
					)}}
					keyExtractor={(item) => item.email}/>
			</View>
		);
	}
}