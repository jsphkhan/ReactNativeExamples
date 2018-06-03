import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationfactor: new Animated.Value(50),
      interpolationFactor: new Animated.Value(1),
      interpolationFactor1: new Animated.Value(0)
    };
  }
  componentDidMount() {
    Animated.timing(this.state.animationfactor, {
      toValue: 300,
      duration: 1000,
      delay: 1000,
      //useNativeDriver: true
    }).start(() => {
      alert('done'); //callback arrow fn calledd after animation is done
    });

    Animated.timing(this.state.interpolationFactor, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start();

    Animated.timing(this.state.interpolationFactor1, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View 
          style={{width: this.state.animationfactor, height: 10, backgroundColor: 'red', position: 'absolute', left: 20, top: 300}}>
        </Animated.View>

        <Animated.View style={{
          width: 100, 
          height: 100, 
          backgroundColor: 'green', 
          opacity: this.state.interpolationFactor.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0]
          }),
          transform: [{
            translateX: this.state.interpolationFactor.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 100]
            })
          }, {
            rotate: this.state.interpolationFactor.interpolate({
              inputRange: [0, 1],
              outputRange: ['360deg', '0deg']
            })
          }]
        }}>
        </Animated.View>

        <Animated.View style={{
          width: 50, 
          height: 50, 
          backgroundColor: 'blue', 
          marginTop: 40,
          transform: [{
            scale: this.state.interpolationFactor1.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 3]
            })
          }, {
            rotate: this.state.interpolationFactor1.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '-415deg']
            })
          }]
        }}>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
