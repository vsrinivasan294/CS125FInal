import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import logo from './assets/images/logo.png';
import styles from './assets/css/styles';
import { Constants } from 'expo';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import CameraScreen from './screens/CameraScreen';
import BrowseScreen from './screens/BrowseScreen';
import UploadScreen from './screens/UploadScreen';
import StartingScreen from './screens/StartingScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen,
    Camera: CameraScreen,
    Starting: StartingScreen,
    Browse: BrowseScreen,
    Upload: UploadScreen, 
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
