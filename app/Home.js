import React, {Component} from 'react';
import {
   AppRegistry,
   StyleSheet,
   Text,
   TextInput,
   View,
   Button,
   TouchableOpacity,
   Alert
} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Component1 from './components/Component1/Component1.js'
import Component2 from './components/Component2/Component2.js'
import Component3 from './components/Component3/Component3.js'
import Component4 from './components/Component4/Component4.js'
import Component5 from './components/Component5/Component5.js'
import Component6 from './components/Component6/Component6.js'

export default class Home extends Component {

   constructor(props) {
      super(props);
      this.navigateTo = '';
      this.state = {
         test: 'test'
      }
   }

   goToComponent1() {
      this.props.navigation.navigate('Component1', {});
   }

   static navigationOptions = {
      header: null
   };

   render() {
      return (
      <View>
         <Text>
            Home Screen
         </Text>
         <Button
            title="navigate"
            onPress={() => this.goToComponent1()}>
            Navigate
         </Button>
      </View>
      );
   }
};
