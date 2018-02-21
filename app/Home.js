import React, {Component} from 'react';
// import {
//    AppRegistry,
//    StyleSheet,
//    Text,
//    TextInput,
//    View,
//    Button,
//    TouchableOpacity,
//    Alert
// } from 'react-native';
// import {StackNavigator} from 'react-navigation';
import {View, Text, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

// import Component1 from './components/Component1/Component1.js'
// import Component2 from './components/Component2/Component2.js'
// import Component3 from './components/Component3/Component3.js'
// import Component4 from './components/Component4/Component4.js'
// import Component5 from './components/Component5/Component5.js'
// import Component6 from './components/Component6/Component6.js'

export default class Home extends Component {

   // constructor(props) {
   //    super(props);
   //    this.navigateTo = '';
   //    this.state = {
   //       test: 'test'
   //    }
   // }
   //
   // goToComponent1() {
   //    this.props.navigation.navigate('Component1', {});
   // }
   //
   // static navigationOptions = {
   //    header: null
   // };
   //
   // render() {
   //    return (
   //    <View>
   //       <Text>
   //          Home Screen
   //       </Text>
   //       <Button
   //          title="navigate"
   //          onPress={() => this.goToComponent1()}>
   //          Navigate
   //       </Button>
   //    </View>
   //    );
   // }

   render() {
      return (
      <View style={styles.main}>
         <View style={styles.mainText}>
            <Text onPress={Actions.component2}>This is Component 1!</Text>
         </View>
         <View style={styles.mainText}>
            <Text onPress={Actions.component2}>This is Component 2!</Text>
         </View>
         <View style={styles.mainText}>
            <Text onPress={Actions.component3}>This is Component 3!</Text>
         </View>
         <View style={styles.mainText}>
            <Text onPress={Actions.component4}>This is Component 4!</Text>
         </View>
         <View style={styles.mainText}>
            <Text onPress={Actions.component5}>This is Component 5!</Text>
         </View>
         <View style={styles.mainText}>
            <Text onPress={Actions.component6}>This is Component 6!</Text>
         </View>
      </View>
      )
   }
};

const styles = StyleSheet.create({
   main: {
         flexDirection: 'row',
         justifyContent: 'center',
         padding: 15,
         backgroundColor: '#f4f4f4',
         marginBottom: 3
   },
   mainText: {
      flex: 1
   }
});
