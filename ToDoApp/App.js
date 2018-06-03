import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';

import ListItem from './app/components/ListItem';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      taskName: '',
      taskArr: []
    };

    console.ddisableYellowBox = true;
  }
  handlePress() {
    //alert(this.state.taskName);
    //update task array
    this.setState((prevState) => {
      return {taskArr: prevState.taskArr.concat({key: Math.random(), taskName: this.state.taskName})}
    });

    //empty the text input
    //this.setState({taskName: ''});
  }
  handleDelete(key) {
    //alert('hello' + key);
    this.setState((prevState) => {
      return {taskArr: prevState.taskArr.filter((arrItem, index) => {
        return arrItem.key !== key;
      })}
    });
  }
  renderListItem(info) {
    //date come inside info.item
    //console.log(info);
    return (
      <ListItem 
        taskName={info.item.taskName} 
        onItemDelete={() => this.handleDelete(info.item.key)} />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.taskNameInput}
            placeholder="Type your task name"
            value={this.state.taskName}
            onChangeText={(val) => {this.setState({taskName: val})}}/>
          <Button 
            title="Add" 
            onPress={this.handlePress.bind(this)}/>
        </View>

        {/*<ScrollView style={styles.scrollContainer}>
          {this.state.taskArr.map((item, index) => {
            return (
                <ListItem key={index} taskName={item} />
            );
          })}
        </ScrollView>*/}

        <FlatList 
          data={this.state.taskArr} 
          renderItem={this.renderListItem.bind(this)} 
          ListEmptyComponent={<Text>List Empty</Text>}
          keyExtractor={(item) => item.key}/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
    paddingTop: 25
  },
  inputContainer: {
    //backgroundColor: 'red',
    flexDirection: 'row',
    marginBottom: 10
    //alignItems: 'flex-end'
  },
  scrollContainer: {
    // backgroundColor:'red',
    // padding: 20,
    flex: 1
  },
  taskNameInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'teal',
    fontSize: 20
  }
});
