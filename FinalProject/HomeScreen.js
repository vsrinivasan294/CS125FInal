import React from 'react';
import { StyleSheet, Text, View, Image, Button, Navigator } from 'react-native';
import logo from './assets/images/logo.png';
import styles from './assets/css/styles';


export default class HomeScreen extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.h1}>MATCHER</Text>
        </View>
        <View style={styles.middleContainer}>
          <Image source={logo} style={styles.pic} />
        </View>
          <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <Button
              color="#828282"
              title="LOGIN!!"
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Login')}
            />
            <Button
              color="#828282"
              title="REGISTER!!"
              style={styles.button}
              onPress={() => this.props.navigation.navigate('SignUp')}
            />
          </View>
        </View>
      </View>
     
    );
  }
}


