/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LottieView from 'lottie-react-native';

export default class App extends Component {
  componentDidMount() {
    this._animation.play();
  }
  render() {
    return (
      <View style={styles.container}>
        <LottieView 
          ref={(ref) => {this._animation = ref}} 
          source={require('./lottie_assets/furtune.json')}
        />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
