import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import pic from './assets/img.jpg';


export default class LandingPage extends React.Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F08080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    color: '#008F68',
    fontSize: 40,
  },
  h2: {
    color: '#FAE042',
    fontSize: 18,
    marginTop: 8,
  },
  pic: {
  width: 300,
  height: 260,
  justifyContent: 'center',
},
topContainer: {
  flex: 2,
  justifyContent: 'center',
  alignItems: 'center',
},
middleContainer: {
  flex: 3,
  justifyContent: 'flex-start',
  alignItems: 'center',
},
bottomContainer: {
  justifyContent: 'flex-end',
  width: '90%',
  margin: 20,
  padding: 10,
},
});
