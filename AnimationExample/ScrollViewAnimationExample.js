import React, { Component} from 'react';
import {
	View, 
	Text,
	Animated,
	ScrollView,
	StyleSheet,
	Dimensions
} from 'react-native';

export default class ScrollViewAnimationExample extends Component {
	constructor(props) {
		super(props);
		this.data = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
		this.state = {
			xOffset: new Animated.Value(0)
		}
	}
	render() {
		return (
			<View style={{flex: 1, padding: 20}}>
				<Animated.View style={{
					width: 50, 
					height: 50, 
					backgroundColor: 'red',
					transform: [{
						translateX: this.state.xOffset
					}]
				}}>
				</Animated.View>
				<Animated.ScrollView 
				  scrollEventThrottle={16}
				  horizontal={false}
				  paginEnabled={false}
				  showsHorizontalScrollIndicator={false}
				  onScroll={Animated.event(
				  	[
				  		{
				  			nativeEvent: {
				  				contentOffset: {
				  					y: this.state.xOffset
				  				}
				  			}
				  		}
			  	  	], 
			  	  	{useNativeDriver: true})
				  }>
					{this.data.map((item, index) => {
						return (
							<View key={index} style={styles.row}>
								<Text>{`This is row ${item}`}</Text>
							</View>
						)
					})}	
				</Animated.ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	row: {
		padding: 10,
		backgroundColor: '#ccc',
		marginBottom: 5,
		flex: 1,
		width: Dimensions.get('window').width
	}
});