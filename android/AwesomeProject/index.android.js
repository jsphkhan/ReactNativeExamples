/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require("react-native"),
    FirstScreen = require("./FirstScreen"),
    SecondScreen = require("./SecondScreen");

var {
  AppRegistry,
  Component,
  Navigator
} = React;

var AwesomeProject = React.createClass ({
  render: function() {
    return (
      <Navigator
        initialRoute={{id: 'FirstScreen', name: 'Index'}}
        renderScene={this.renderScene}
        configureScene={() => {return Navigator.SceneConfigs.FloatFromRight}}
      />
    );
  },
  renderScene: function(route, navigator) {
    var routeId = route.id;
    //console.log(route, navigator);
    if(routeId === 'FirstScreen') {
      return (
        <FirstScreen navigator={navigator}/>
      );
    }
    if(routeId === "SecondScreen") {
      return (
        <SecondScreen navigator={navigator}/>
      );
    }
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
