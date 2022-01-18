import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import back from '../assets/img/back.png';
import save from '../assets/img/save.png';
import saveFilled from '../assets/img/save-filled.png';

const deviceWidth = Dimensions.get('screen').width;

export default class Detail extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.headerWrapper}>
          <TouchableOpacity style={style.btnIco}>
            <Image />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    width: deviceWidth - 40,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  btnIco: {
    width: 70,
    height: 70,
    borderRadius: 25,
  },
});
