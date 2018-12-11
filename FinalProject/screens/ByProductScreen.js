import React from 'react';
import { StyleSheet, Text, View, Image, Button, Navigator, TextInput, Alert, AppRegistry, FlatList } from 'react-native';
import logo from './assets/images/logo.png';
import styles from './assets/css/styles';


export default class ByProductScreen extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.h3}>BROWSE BY PRODUCT</Text>
          <Text style={styles.h2}>By Location</Text>
           <FlatList
          data={[
<<<<<<< HEAD
            {key: 'IPhone'},
            {key: 'Mac'},
            {key: 'Sunglasses'},
            {key: 'Tea Kettle'},
            {key: 'Yeezys'},
            {key: 'Orange Juice'},
            {key: 'Bananas'},
            {key: 'Pen'},
            {key: 'Pencils'},
            {key: 'Paper'},
            {key: 'IPads'},
            {key: 'Chipotle Burrito'},
            {key: 'Glasses'},
            {key: 'Headphones'},
            {key: 'Old Car'},
            {key: 'Iced Tea'},
            {key: 'Phone Charger'},
          

          ]}
          renderItem={({item}) => <Text style={styles.items}>{item.key}</Text>}
        />
        </View>
      </View>
     
    );
  }
}


