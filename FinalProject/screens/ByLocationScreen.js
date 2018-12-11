import React from 'react';
import { StyleSheet, Text, View, Image, Button, Navigator, TextInput, Alert } from 'react-native';
import logo from './assets/images/logo.png';
import styles from './assets/css/styles';
import { MapView } from "expo";

export default class ByLocationScreen extends React.Component {
  render() {
    return (

      <MapView
        style={{
          flex: 1
        }}
        initialRegion={{
          latitude: 40.1020,
          longitude: -88.2272,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
     
    );
  }
}


