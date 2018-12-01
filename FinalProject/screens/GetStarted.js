import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


export default class getStarted extends Component
{
  render()
  {
     return(
      <View>
        <Text>This is the Settings screen</Text>
        <Button onPress={() => this.props.navigation.navigate('LandingPageScreen')} title="LandingPage"/>
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
});

