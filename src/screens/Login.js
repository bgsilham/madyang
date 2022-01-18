import React, {Component} from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';

import bg from '../assets/img/bg.png';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#000" />
        <ImageBackground style={styles.containerBg} source={bg}>
          <Text style={styles.title}>Cooking a Delicious Food Easily</Text>
          <Text style={styles.subTitle}>
            Discover more than 1000+ food recipes in you hands and cooking it
            easily!
          </Text>
          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSignUp}>
            <Text style={styles.btnTxt}>Sign Up</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBg: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 25,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '400',
    maxWidth: '60%',
    marginBottom: 20,
    letterSpacing: 2,
  },
  subTitle: {
    color: '#bfbfbfe3',
    fontSize: 12,
    fontWeight: '400',
    maxWidth: '50%',
    letterSpacing: 1,
  },
  btnLogin: {
    backgroundColor: '#229677',
    width: '100%',
    height: '8%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  btnSignUp: {
    borderWidth: 2,
    borderColor: '#104134',
    width: '100%',
    height: '8%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnTxt: {
    color: '#fff',
  },
});
