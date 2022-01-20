import React, {Component} from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import bg from '../assets/img/bg.png';

export default class Login extends Component {
  login = () => {
    GoogleSignin.configure({
      androidClientId: '227289042674-ob8h7k17e1huljbu1b7mmp3p52oir7bc.apps.googleusercontent.com',
      iosClientId: 'ADD_YOUR_iOS_CLIENT_ID_HERE',
    });
    GoogleSignin.hasPlayServices().then((hasPlayService) => {
      if (hasPlayService) {
        GoogleSignin.signIn().then((userInfo) => {
          alert(JSON.stringify(userInfo.user))
        }).catch((e) => {
        console.log("ERROR IS: " + JSON.stringify(e));
        })
      }
    }).catch((e) => {
      console.log("ERROR IS: " + JSON.stringify(e));
    })
  }
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
          <TouchableOpacity onPress={this.login} style={styles.btnLogin}>
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
