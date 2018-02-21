import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Component2 extends Component {

constructor(props) {
   super(props);
   this.navigateTo = '';
   this.state = {

   }
}

render() {
  return (
      <View>
          <View style={styles.myView}>
            <Text style={styles.myText}>Hello Tyler!</Text>
          </View>
          <View style={styles.container}>
            <TouchableHighlight
              style={styles.v1}
              onPress={Actions.home}>
              <View>
                <Text>Go Home</Text>
              </View>
            </TouchableHighlight>
            <TouchableOpacity
              onPress={Actions.component3}
              style={styles.v2}>
              <View>
                <Text>Component 3</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.v3}>
              <Text style={styles.vText}>View 3</Text>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: 'blue'
  },
  myText: {
    color: 'white'
  },
  container: {
    flexDirection: 'row',
    height: 100
  },
  v1: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10
  },
  v2: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10
  },
  v3: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10
  },
  vText: {
    color: 'white'
  }
});

AppRegistry.registerComponent('Component2', () => Component2);
