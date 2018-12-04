import React from 'react';
import { StyleSheet, Text, View, Image, Button, Navigator, TextInput, Alert, AppRegistry, FlatList } from 'react-native';
import logo from './assets/images/logo.png';
import styles from './assets/css/styles';


export default class BrowseScreen extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.h3} onPress={() => this.props.navigation.navigate('ByProduct')}>Browse By Product</Text>
          <Text style={styles.h3} onPress={() => this.props.navigation.navigate('ByLocation')}>Browse By Location</Text>
          
        </View>
      </View>
     
    );
  }
}


