/* Example of a Stack Navigator */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

//import React Navigation navigators
import {createStackNavigator} from 'react-navigation';

class Screen1 extends Component {
  static navigationOptions = {
    title: "Home"
  }
  render() {
    let {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Screen1</Text>
        <Button title="Go to Screen2" onPress={() => {
          navigate('screen2', {
            data: 'Joseph',
            moreData: 'Good News!'
          })
        }} />
      </View>
    );
  }
}
class Screen2 extends Component {
  static navigationOptions = {
    title: "Details"
  }
  render() {
    let {goBack} = this.props.navigation;
    let data = this.props.navigation.getParam('data');
    let moreData = this.props.navigation.getParam('moreData');
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Screen2</Text>
        <Text>Hello {data}</Text>
        <Button title="Go Back" onPress={() => {
          goBack();
        }} />
      </View>
    );
  }
}

//App is a functional React Class/Element
let App = createStackNavigator({
  screen1: {
    screen: Screen1
  },
  screen2: {
    screen: Screen2
  }
}, {
  initialRouteName: 'screen1',
  mode: 'card', //card,modal
  headerMode: 'float'
});

//<App />
export default App;

//Root Element
// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
        
//       </View>
//     );
//   }
// }

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
  }
});
