import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {connect} from 'react-redux'
import {dataLogin} from '../redux/actions/auth'

import back from '../assets/img/back-white.png'
import next from '../assets/img/next.png'
import more from '../assets/img/more.png'
import saved from '../assets/img/save-instagram.png'
import premium from '../assets/img/premium.png'
import setting from '../assets/img/setting.png'
import logout from '../assets/img/logout.png'

class Profile extends Component {
  signOut = async () => {
    GoogleSignin.configure({
      androidClientId: '227289042674-ob8h7k17e1huljbu1b7mmp3p52oir7bc.apps.googleusercontent.com',
      iosClientId: 'ADD_YOUR_iOS_CLIENT_ID_HERE',
    });
    try {
      await GoogleSignin.signOut();
      this.props.dataLogin('')
    } catch (error) {
      alert(JSON.stringify(error.message));
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#000" />
        <View style={styles.header}>
          <TouchableOpacity onPress={this.props.navigation.goBack} style={styles.backBtnWrapper}>
            <Image source={back} style={styles.backBtn} />
          </TouchableOpacity>
          <View style={styles.profileInfoWrapper}>
            <Image style={styles.imgAva} source={{uri: this.props.auth.dataLogin.photo}} />
            <Text style={styles.nameTxt}>{this.props.auth.dataLogin.name}</Text>
            <Text style={styles.emailTxt}>{this.props.auth.dataLogin.email}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.actionWrapper}>
            <View style={styles.actionNameWrapper}>
              <View style={styles.postWrapper}>
                <Image source={more} style={styles.imgIcon} />
              </View>
              <Text style={styles.txtAction} >Post</Text>
            </View>
            <Image style={styles.imgIcon} source={next} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionWrapper}>
            <View style={styles.actionNameWrapper}>
              <View style={styles.savedWrapper}>
                <Image source={saved} style={styles.imgIcon} />
              </View>
              <Text style={styles.txtAction} >Saved</Text>
            </View>
            <Image style={styles.imgIcon} source={next} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionWrapper}>
            <View style={styles.actionNameWrapper}>
              <View style={styles.premiumWrapper}>
                <Image source={premium} style={styles.imgIcon} />
              </View>
              <Text style={styles.txtAction} >Premium</Text>
            </View>
            <Image style={styles.imgIcon} source={next} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionWrapper}>
            <View style={styles.actionNameWrapper}>
              <View style={styles.settingWrapper}>
                <Image source={setting} style={styles.imgIcon} />
              </View>
              <Text style={styles.txtAction} >Setting</Text>
            </View>
            <Image style={styles.imgIcon} source={next} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.signOut} style={styles.actionWrapper}>
            <View style={styles.actionNameWrapper}>
              <View style={styles.logoutWrapper}>
                <Image source={logout} style={styles.imgIcon} />
              </View>
              <Text style={styles.txtAction} >Logout</Text>
            </View>
            <Image style={styles.imgIcon} source={next} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
})
const mapDispatchToProps = {dataLogin}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flex: 1,
    padding: 20,
  },
  footer: {
    flex: 1.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  backBtnWrapper: {
    width: 25,
    height: 25,
  },
  backBtn: {
    width: 25,
    height: 25,
  },
  profileInfoWrapper: {
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imgAva: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#229677',
  },
  nameTxt: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
    letterSpacing: 1,
  },
  emailTxt: {
    color: '#fff',
  },
  actionWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  actionNameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgIcon: {
    width: 25,
    height: 25,
  },  
  postWrapper: {
    width: 40,
    height: 40,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c8e6c9'
  },
  savedWrapper: {
    width: 40,
    height: 40,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1bee7'
  },
  premiumWrapper: {
    width: 40,
    height: 40,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffecb3'
  },
  settingWrapper: {
    width: 40,
    height: 40,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bbdefb'
  },
  logoutWrapper: {
    width: 40,
    height: 40,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffcdd2'
  },
  txtAction: {
    color: '#000',
    marginLeft: 15,
    fontSize: 17
  }
});
