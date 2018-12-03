import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import logo from './assets/images/logo.png';
import styles from './assets/css/styles';
import { Constants } from 'expo';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';




const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    
    return <AppContainer />;
  }
}
