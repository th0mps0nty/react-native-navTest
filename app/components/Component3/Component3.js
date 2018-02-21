import React, {Component} from 'react';
import {AppRegistry, Text, View, Switch, TextInput, Button} from 'react-native';
import {Actions} from 'react-native-router-flux'


export default class Component3 extends Component {
  constructor() {
    super();
    this.state = {
      textValue: 'Hello',
      switchValue: false
    }
  }

  onChangeText(value) {
    this.setState({
      textValue: value
    })
  }

  onSwitchChange(value) {
    this.setState({
      switchValue: value
    })
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter Text Here to go to Component 4, OR slide switch to go home"
          value={this.state.textValue}
          onChangeText={(value) => this.onChangeText(value)}
          onSubmitEditing={Actions.component4}
        />
        <Text >{this.state.textValue}</Text>
        <Switch
          value={this.state.switchValue}
          onValueChange={(value) => this.onSwitchChange(value)}
        />
        {this.state.switchValue && (
           <Button
             style={{padding: 25}}
              title="Go Home"
              onPress={Actions.home}
              ></Button>
        )}
      </View>

    );
  }
  }

AppRegistry.registerComponent('Component3', () => Component3);
