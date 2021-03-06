import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';

import search from '../assets/img/search.png';
import lunch1 from '../assets/img/lunch1.png';
import lunch2 from '../assets/img/lunch2.png';
import lunch3 from '../assets/img/lunch3.jpeg';
import clock from '../assets/img/clock.png';

const deviceWidth = Dimensions.get('screen').width;

class Home extends Component {
  render() {
    const menuList = [
      {
        author: 'Marry Smith',
        authorAva: 'https://duetaz.org/wp-content/uploads/2018/02/placeholder-woman.jpg',
        name: 'Boiled Egg Mint',
        diff: 'Easy',
        min: 15,
        image: lunch3,
        yt: 'OzsCgmRsWMI',
        category: 'Lunch',
        trending: 1,
        desc: "A spicy & flavorful Indian Egg Curry with boiled eggs cooked in mint leaves, Indian whole spices and coriander leaves. An easy dinner recipe for all which is extremely easy and very tasty to enjoy with rice or roti's.",
      },
      {
        author: 'Samantha William',
        authorAva: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Vegetables Beef Onion',
        diff: 'Normal',
        min: 25,
        image: lunch2,
        yt: 'EfRpZ3GnvBM',
        category: 'Dinner',
        trending: 2,
        desc: 'Hi I love stir fried beef with ginger and scallion (spring onion)! The divine combination of ginger and tender beef is too irresistible - I need a plate of this now with a bowl of rice! *salivating* This is an easy stir-fry dish which I highly recommend anyone to remember the recipe by heart.',
      },
      {
        author: 'John Doe',
        authorAva: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7UUD5_QfP3HFFTjOPEorII-S6WK-0Ux7GUQ&usqp=CAU',
        name: 'Mix Vegetables Bread',
        diff: 'Hard',
        min: 15,
        image: lunch1,
        yt: 'y6gnXQJrB5Y',
        category: 'Breakfast',
        trending: 3,
        desc: "Today's recipe is flower-shaped savory bread with vegetable filling. Soft fluffy delicious, the stir-fried vegetable filling is adjustable.",
      },
    ]
    return (
      <ScrollView>
      <StatusBar backgroundColor="#000" />
        <View style={style.headerWrapper}>
          <View style={style.headerTitleWrapper}>
            <Text style={style.headerTitle}>Hello, {this.props.auth.dataLogin.givenName}</Text>
            <Text>What do you want to cook today?</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')} style={style.headerImgWrapper}>
            <Image
              style={style.img}
              source={{
                uri: this.props.auth.dataLogin.photo,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={style.searchWrapper}>
          <View style={style.searchIcoWrapper}>
            <Image style={style.imgSearch} source={search} />
          </View>
          <TextInput
            style={style.searchInput}
            placeholder="Search something to cook"
            placeholderTextColor="grey"
          />
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={style.storiesWrapper}>
          <TouchableOpacity style={style.storiesBubble}>
            <Image
              style={style.img}
              source={{
                uri: 'https://cdn.antaranews.com/cache/800x533/2021/08/08/Photo_MasterchefRenata_LZDINA.jpg',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={style.storiesBubble}>
            <Image
              style={style.img}
              source={{
                uri: 'https://3.bp.blogspot.com/-59qxn8eGIvY/W1MiS-1Q2zI/AAAAAAAAEKA/Uhi8J9yE-aclm-2y9VnOoEbVFep3o7IVACLcBGAs/w1200-h630-p-k-no-nu/Arnol%2Bchef.jpg',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={style.storiesBubble}>
            <Image
              style={style.img}
              source={{
                uri: 'https://asset.kompas.com/crops/TZvXDrCNKfQvoijJUwvEwRW4xA8=/67x45:1000x667/750x500/data/photo/2017/06/22/163250620170622-042902-3586-chef.juna-.atau-.junior-.rorimpandey-.jpg',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={style.storiesBubble}>
            <Image
              style={style.img}
              source={{
                uri: 'https://media.suara.com/pictures/original/2021/09/06/47519-bobon-santoso.jpg',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={style.storiesBubble}>
            <Image
              style={style.img}
              source={{
                uri: 'https://victoria.mediaplanet.com/app/uploads/sites/105/2019/05/Main-6-576x486.jpg',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={style.storiesBubble}>
            <Image
              style={style.img}
              source={{
                uri: 'https://i.pinimg.com/736x/bc/e8/cd/bce8cd182631e7436a3f739921a3d98f--food-dishes-indonesia.jpg',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={style.storiesBubble}>
            <Image
              style={style.img}
              source={{
                uri: 'https://images.detik.com/content/2014/04/22/297/085655_2.jpg',
              }}
            />
          </TouchableOpacity>
        </ScrollView>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={style.categoriesWrapper}>
          <TouchableOpacity style={style.categoriesBtnDis}>
            <Text style={style.categoriesBtnDisTxt}>Breakfast</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.categoriesBtnAct}>
            <Text style={style.categoriesBtnActTxt}>Lunch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.categoriesBtnDis}>
            <Text style={style.categoriesBtnDisTxt}>Dinner</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.categoriesBtnDis}>
            <Text style={style.categoriesBtnDisTxt}>Sushi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.categoriesBtnDis}>
            <Text style={style.categoriesBtnDisTxt}>Indonesian</Text>
          </TouchableOpacity>
        </ScrollView>
        {menuList.map((val) => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', 
            {
              author: val.author,
              authorAva: val.authorAva,
              name: val.name,
              desc: val.desc,
              yt: val.yt,
              trending: val.trending,
            } 
          )} style={style.foodCard}>
            <ImageBackground
              imageStyle={style.foodImg}
              style={style.foodImg}
              source={val.image}>
              <View style={style.foodCardHederWrapper}>
                <Text style={style.foodCardTxtHeader}>{val.author}</Text>
                <Text style={style.foodCardTxtHeader}>{val.diff}</Text>
              </View>
              <View>
                <Text style={style.foodCardTxtTitle}>{val.name}</Text>
                <View style={style.foodCardIcoWrapper}>
                  <Image style={style.foodCardIco} source={clock} />
                  <Text style={style.foodCardTxtHeader}>{val.min} min</Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
})
export default connect(mapStateToProps)(Home)

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  headerTitleWrapper: {
    height: 50,
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#229677',
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerImgWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 25,
  },
  searchWrapper: {
    width: deviceWidth - 40,
    height: 50,
    backgroundColor: '#dbdbdb7a',
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  searchIcoWrapper: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
  },
  imgSearch: {
    width: 35,
    height: 35,
  },
  searchInput: {
    width: '80%',
    color: '#000',
  },
  storiesWrapper: {
    width: deviceWidth - 40,
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  storiesBubble: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#229677',
    borderRadius: 25,
    marginRight: 10,
  },
  categoriesWrapper: {
    width: deviceWidth - 40,
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 25,
  },
  categoriesBtnDis: {
    height: 40,
    backgroundColor: '#dbdbdb7a',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginRight: 10,
  },
  categoriesBtnDisTxt: {
    color: 'grey',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  categoriesBtnAct: {
    height: 40,
    backgroundColor: '#22967759',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginRight: 10,
  },
  categoriesBtnActTxt: {
    color: '#229677',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  foodCard: {
    width: deviceWidth - 40,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  foodImg: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 25,
    padding: 15,
    justifyContent: 'space-between',
  },
  foodCardHederWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  foodCardTxtHeader: {
    color: '#fff',
    fontWeight: 'bold',
  },
  foodCardTxtTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  foodCardIcoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  foodCardIco: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
});
