import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

import Component5 from './app/components/Component5/Component5.js'
import Component6 from './app/components/Component6/Component6.js'

export class myapp extends Component {
  render() {
     const {navigate} = this.props.navigation;

    return (
      <View>
         <Text>
            Home Screen
         </Text>
      </View>
   );
  }
}

AppRegistry.registerComponent('myapp', () => myapp);
