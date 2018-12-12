import React from 'react';
import { StyleSheet, Text, View, Image, Button, Navigator, TextInput, Alert } from 'react-native';
import Expo from "expo"
import logo from './assets/images/logo.png';
import styles from './assets/css/styles';


export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: ""
    }
  }
  signIn = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId:
          "1060907411628-vu97vrlhls1qper7no6evqi5m5tvve0o.apps.googleusercontent.com",
        //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        scopes: ["profile", "email"]
      })

      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        })
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }
  login() {
    Alert.alert('Test');
  }

  forgetPassword() {
    Alert.alert('RIP');
  }

  render() {
    return (
      // <View style={styles.container}>
      //   <TextInput
      //     value={this.state.username}
      //     onChangeText={(username) => this.setState({ username })}
      //     placeholder={'Username'}
      //     style={styles.input}
      //   />
      //   <TextInput
      //     value={this.state.password}
      //     onChangeText={(password) => this.setState({ password })}
      //     placeholder={'Password'}
      //     secureTextEntry={true}
      //     style={styles.input}
      //   />
        
      //   <Text style={styles.h2} onPress={() => this.props.navigation.navigate('Starting')}> Login </Text>
      //   <Text style={styles.h2} onPress={this.forgetPassword.bind(this)}> Forgot your password? </Text>
       
      // </View>
      <View style={styles.container}>
        {this.state.signedIn ? (
          // <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
          // <View>
          // <Text style={styles.h2}>Welcome to Matcher: {props.name}</Text>
          // </View>
          <Button title="Browse Items" onPress={() => this.props.navigation.navigate('Browse')} />
         
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    );
  }
}
const LoginPage = props => {
  return (
    <View>
      <Text style={styles.h2}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  )
}

const LoggedInPage = props => {
  return (
    <View>
      <Text style={styles.h2}>Welcome to Matcher: {props.name}</Text>
      <Image source={{ uri: props.photoUrl }} />
      <Button title="New Post" onPress={() => this.props.navigation.navigate('SignUp')} />
    </View>
  )
}




