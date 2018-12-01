import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import pic from './assets/images/img.jpg';
import styles from '.assets/css/styles';


export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.h1}>CS 125 Final Project</Text>
          
          <Text style={styles.h2}>
            Yo this is lit.
          </Text>
        </View>
        <View style={styles.middleContainer}>
          <Image source={pic} style={styles.pic} />
        </View>
          <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <Button
              title="GET STARTED"
              style={styles.button}
              onPress={() => this.getStarted()}
              color="#008F68"
            />
          </View>
        </View>
      </View>
     
    );
  }
}
