import React, {Component} from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Component1 extends Component {

  constructor(props) {
    super(props);
    this.navigateTo = '';
    this.state = {
      name: "Tyler",
      showName: true,
      message: this.props.message
    }
  }

  static defaultProps = {
    message: "Hi There"
  }

  render() {
    let name = this.state.showName ? this.state.name : "No Name";
    return (
      <View>
        <Text>{this.state.message}</Text>
        <Text>{name}</Text>
        <Button
           title="navigate"
           onPress={Actions.component2}>
        </Button>
        <Button
           title="Go Home"
           onPress={Actions.home}>
        </Button>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);
