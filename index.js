import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';

import { AppRegistry } from 'react-native';
// import {StackNavigator} from 'react-navigation';
import Home from './app/Home.js';
import Component1 from './app/components/Component1/Component1.js'
import Component2 from './app/components/Component2/Component2.js'
import Component3 from './app/components/Component3/Component3.js'
import Component4 from './app/components/Component4/Component4.js'
import Component5 from './app/components/Component5/Component5.js'
import Component6 from './app/components/Component6/Component6.js'

// const myapp = props => {
//    return <App navigation={props.navigation} />;
// };

// myapp.navigationOptions = {
//    title: 'My App'
// };

// const SimpleApp = StackNavigator({
//    Home: {
//       screen: App,
//       navigationOptions: ({navigation}) => ({
//          title: 'Home',
//       }),
//    },
//    Component1: {
//       screen: Component1,
//    },
//    Component2: {
//       screen: Component2,
//    },
//    Component3: {
//       screen: Component3,
//    },
//    Component4: {
//       screen: Component4,
//    },
//    Component5: {
//       screen: Component5,
//    },
//    Component6: {
//       screen: Component6,
//    }
// });

// AppRegistry.registerComponent('myapp', () => SimpleApp);

export default class myapp extends Component {
   render() {
      return (
         <Router>
            <Scene key="root">
               <Scene key="home" component={Home} title="Tyler's Nav App" initial={true} />
               <Scene key="component1" component={Component1} title="Component 1" />
               <Scene key="component2" component={Component2} title="Component 2" />
               <Scene key="component3" component={Component3} title="Component 3" />
               <Scene key="component4" component={Component4} title="Component 4" />
               <Scene key="component5" component={Component5} title="Component 5" />
               <Scene key="component6" component={Component6} title="Component 6" />
            </Scene>
         </Router>
      )
   }
}

AppRegistry.registerComponent('myapp', () => myapp);
