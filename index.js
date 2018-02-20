import React from 'react';
import { AppRegistry } from 'react-native';
import {StackNavigator} from 'react-navigation';
import App from './app/Home.js';
import Component1 from './app/components/Component1/Component1.js'
import Component2 from './app/components/Component2/Component2.js'
import Component3 from './app/components/Component3/Component3.js'
import Component4 from './app/components/Component4/Component4.js'
import Component5 from './app/components/Component5/Component5.js'
import Component6 from './app/components/Component6/Component6.js'

const myapp = props => {
   return <App navigation={props.navigation} />;
};

myapp.navigationOptions = {
   title: 'My App'
};

const SimpleApp = StackNavigator({
   Home: {
      screen: App,
      navigationOptions: ({navigation}) => ({
         title: 'Home',
      }),
   },
   Component1: {
      screen: Component1,
   },
   Component2: {
      screen: Component2,
   },
   Component3: {
      screen: Component3,
   },
   Component4: {
      screen: Component4,
   },
   Component5: {
      screen: Component5,
   },
   Component6: {
      screen: Component6,
   }
});

AppRegistry.registerComponent('myapp', () => SimpleApp);
