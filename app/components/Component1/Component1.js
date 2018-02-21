import React, {Component} from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';

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

  goToComponent2() {
     this.props.navigation.navigate('Component2', {});
  }

  goHome() {
     this.props.navigation.navigate('Home', {});
  }

  render() {
    let name = this.state.showName ? this.state.name : "No Name";
    return (
      <View>
        <Text>{this.state.message}</Text>
        <Text>{name}</Text>
        <Button
           title="navigate"
           onPress={() => this.goToComponent2()}>
        </Button>
        <Button
           title="Go Home"
           onPress={() => this.goHome()}>
        </Button>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);
