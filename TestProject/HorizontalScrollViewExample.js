import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class HorizontalScrollViewExample extends Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<ScrollView 
				  horizontal
				  pagingEnabled
				  showsHorizontalScrollIndicator={false}>
					<View style={[styles.screen, {backgroundColor: 'red'}]}>
						<Text style={styles.screenText}>Screen1</Text>
					</View>
					<View style={[styles.screen, {backgroundColor: 'green'}]}>
						<Text style={styles.screenText}>Screen2</Text>
					</View>
					<View style={[styles.screen, {backgroundColor: 'blue'}]}>
						<Text style={styles.screenText}>Screen3</Text>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		width: width,
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	screenText: {
		color: '#fff',
		fontSize: 20
	}
});