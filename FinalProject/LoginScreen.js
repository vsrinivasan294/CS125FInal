import React from 'react';
import { StyleSheet, Text, View, Image, Button, Navigator } from 'react-native';
import logo from './assets/images/logo.png';
import styles from './assets/css/styles';


export default class LoginScreen extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.h1}>Login!!</Text>
        </View>
      </View>
     
    );
  }
}


