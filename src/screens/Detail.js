import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  ScrollView,
} from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

import back from '../assets/img/back.png';
import save from '../assets/img/save.png';
import saveFilled from '../assets/img/save-filled.png';

const deviceWidth = Dimensions.get('screen').width;

export default class Detail extends Component {
  render() {
    const dataIng = [
      {
        name: "Egg",
        image: 'https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg',
        much: 2,
        type: 'pcs'
      },
      {
        name: "Onion",
        image: 'https://produits.bienmanger.com/36700-0w470h470_Organic_Red_Onion_From_Italy.jpg',
        much: 1,
        type: 'pcs'
      },
      {
        name: "Salt",
        image: 'https://media.istockphoto.com/photos/salt-crystals-in-a-wooden-plate-on-a-white-background-top-view-picture-id1302310204?b=1&k=20&m=1302310204&s=170667a&w=0&h=xGamnepGi9YNitWV8QV6_KZ_f656VJG4hu5d6dBYHYs=',
        much: 1,
        type: 'tbsp'
      },
      {
        name: "Mint",
        image: 'https://cf.shopee.co.id/file/7a84eed0d3a69586c1dddc4447d9a917',
        much: 5,
        type: 'pcs'
      },
    ]
    return (
      <ScrollView style={style.container}>
        <StatusBar backgroundColor="#000" />
        <View>
          <TouchableOpacity onPress={this.props.navigation.goBack} style={style.btnIcoWrapper}>
            <Image style={style.btnIco} source={back} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={style.btnTrending}>
          <Text style={style.btnTrendingTxt}>#1 - Trending this week</Text>
        </TouchableOpacity>
        <Text style={style.menuTxt}>{this.props.route.params.name}</Text>
        <YoutubePlayer
          height={200}
          play={false}
          videoId={"iee2TATGMyI"}
        />
        <View style={style.authorWrapper}>
          <Image style={style.authorImg} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7UUD5_QfP3HFFTjOPEorII-S6WK-0Ux7GUQ&usqp=CAU'}} />
          <View>
            <Text style={style.authorHeaderTxt}>Recipe by</Text>
            <Text style={style.authorNameTxt}>{this.props.route.params.author}</Text>
          </View>
        </View>
        <Text style={style.menuDescTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum quis mauris vel aliquet. Aenean bibendum accumsan suscipit. Praesent justo dui, rutrum commodo risus at, cursus aliquet lectus. Mauris ut neque nunc. Etiam ultrices, orci non scelerisque malesuada, justo libero tincidunt nunc, id tempor leo erat a tellus.</Text>
        <Text style={style.ingredientsHeadertxt}>Ingredients</Text>
        <View style={style.cardIngWrapper}>
          {dataIng.map((val) => (
            <TouchableOpacity style={style.ingWrapper}>
              <View style={style.ingImageWrapper}>
                <Image style={style.ingImage} source={{uri: val.image}}/>
                <Text>{val.name}</Text>
              </View>
              <Text>{val.much} {val.type}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  btnIcoWrapper: {
    width: 25,
    height: 25,
  },
  btnIco: {
    width: 25,
    height: 25,
  },
  btnTrending: {
    alignSelf: 'flex-start',
    backgroundColor: '#22967759',
    borderRadius: 10,
    padding: 10,
    marginTop: 25,
  },
  btnTrendingTxt: {
    color: '#229677',
    fontWeight: 'bold',
  },
  menuTxt: {
    color: '#000',
    marginTop: 15,
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 10,
  },
  authorWrapper: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center'
  },
  authorImg: {
    width: 35,
    height: 35,
    borderRadius: 17,
    marginRight: 10,
  },
  authorHeaderTxt: {
    fontSize: 12,
  },
  authorNameTxt: {
    fontWeight: 'bold',
    color: '#229677'
  },
  menuDescTxt: {
    color: '#000',
    marginTop: 15,
  },
  ingredientsHeadertxt: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    letterSpacing: 1,
    marginBottom: 10,
  },
  ingWrapper: {
    marginVertical: 5,
    height: 50,
    backgroundColor: '#dbdbdb7a',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  ingImageWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ingImage: {
    width: 35,
    height: 35,
    borderRadius: 5,
    marginRight: 10,
  },
  cardIngWrapper: {
    marginBottom: 50
  }
});
