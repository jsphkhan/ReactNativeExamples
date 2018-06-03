import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
	Dimensions,
	StyleSheet
} from 'react-native';

let data = [1,2,3,4,5,6,7,8];
const {width, height} = Dimensions.get('window');

export default class GridLayoutExample extends Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<Text>Grid Layout Example</Text>
				<ScrollView>
					<View style={styles.gridContainer}>
						<Text>khkjhkjgjhfhfhfhfgjhgjhgjgjgjhfgddfgdtyrytrhvhgfhghjhnhvhhjffhfhfjhfjfjfjgjhgjg</Text>
						{data.map((item, index) => {
							return (
								<View style={styles.rowStyle} key={index}>
									<Text>{item}</Text>
								</View>
							)
						})}
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	gridContainer: {
		flexDirection: 'row',
		backgroundColor: 'yellow',
		flexWrap: 'wrap', //<---- this is important for grid layout
		justifyContent: 'center',
	},
	rowStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 1,
		backgroundColor: 'red',
		width: width/2 - 10,
		height: width/2
	}
});