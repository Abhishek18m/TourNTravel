import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Dimensions,
  Alert,
  BackHandler,
} from 'react-native';

import CSS from '../StyleSheet/CSS';
import Topbar from '../component/Topbar';
import Categories from '../component/Categories';
import {SliderBox} from 'react-native-image-slider-box';
import PopularImages from '../component/MyImages';
import Design from '../StyleSheet/Design';
import ToVistImg from '../component/ToVistImg';
import AsyncStorage from '@react-native-community/async-storage';

let array = [];
export default function Homepage(props) {
  function handleBackButtonClick() {
    BackHandler.exitApp();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const [categories, setCategories] = useState(0);

  const HomeCategories = [
    {
      id: 1,
      Img: require('../assets/categories.png'),
      Title: 'All',
    },
    {
      id: 2,
      Img: require('../assets/beach.png'),
      Title: 'Beach',
    },
    {
      id: 3,
      Img: require('../assets/forest.png'),
      Title: 'Forest',
    },
    {
      id: 4,
      Img: require('../assets/mountain.png'),
      Title: 'Mountain',
    },
    {
      id: 5,
      Img: require('../assets/boating.png'),
      Title: 'Boating',
    },
    {
      id: 6,
      Img: require('../assets/restaurant.png'),
      Title: 'Cafe',
    },
    {
      id: 7,
      Img: require('../assets/swimming.png'),
      Title: 'Swim',
    },
  ];
  const Recomended = [
    require('../assets/SukhnaLake.png'),
    require('../assets/RockGarden.webp'),
    require('../assets/RoseGarden.webp'),
    require('../assets/Elante.jpeg'),
  ];
  const PopularPlaces = [
    {
      id: 1,
      PlacesImg: require('../assets/SukhnaLake.png'),
      PlacesTxt1: 'Sukhna Lake',
      PlacesTxt2: 'Chandigarh, India',
    },
    {
      id: 2,
      PlacesImg: require('../assets/Elante.jpeg'),
      PlacesTxt1: 'Elante',
      PlacesTxt2: 'Chandigarh, India',
    },
    {
      id: 3,
      PlacesImg: require('../assets/RockGarden.webp'),
      PlacesTxt1: 'Rock Garden',
      PlacesTxt2: 'Chandigarh, India',
    },
  ];
  const PlacesToVist = [
    {
      id: 1,

      PlacesImg: require('../assets/SukhnaLake.png'),
      PlacesTxt1: 'Sukhna Lake',
      PlacesTxt2: 'Chandigarh, India',
    },
    {
      id: 2,
      PlacesImg: require('../assets/Elante.jpeg'),
      PlacesTxt1: 'Elante',
      PlacesTxt2: 'Chandigarh, India',
    },
    {
      id: 3,
      PlacesImg: require('../assets/RockGarden.webp'),
      PlacesTxt1: 'Rock Garden',
      PlacesTxt2: 'Chandigarh, India',
    },
    {
      id: 4,
      PlacesImg: require('../assets/RoseGarden.webp'),
      PlacesTxt1: 'Rose Garden',
      PlacesTxt2: 'Chandigarh, India',
    },
    {
      id: 5,
      PlacesImg: require('../assets/mansadevi.jpg'),
      PlacesTxt1: 'Mata Mansa Devi',
      PlacesTxt2: 'Chandigarh, India',
    },
    {
      id: 6,
      PlacesImg: require('../assets/museum.jpg'),
      PlacesTxt1: 'Museum',
      PlacesTxt2: 'Chandigarh, India',
    },
  ];

  const _renderItem_Category = ({item, index}) => {
    return (
      <Categories
        Img={item.Img}
        Title={item.Title}
        index={index}
        cat_click={index => setCategories(index)}
        Color={index == categories ? Design.primaryColor : Design.tertiaryColor}
        tint={index == categories ? 'white' : 'black'}
        navigation={props.navigation}
      />
    );
  };
  const _renderItem_PopularPlaces = ({item, index}) => {
    return (
      <PopularImages
        PlacesImg={item.PlacesImg}
        PlacesTxt1={item.PlacesTxt1}
        PlacesTxt2={item.PlacesTxt2}
        navigation={props.navigation}
        likedButton={text => likedButton(text)}
      />
    );
  };
  const likedButton = async text => {
    if (text) {
      const newData = PopularPlaces.filter(item => {
        return item.PlacesTxt1.toUpperCase().indexOf(text.toUpperCase()) > -1;
      });
      if (array.some(el => el.PlacesTxt1 === text) === true) {
        Alert.alert('This email already taken by another account');
      } else {
        array.push(newData[0]);
        console.log(array);
        let str = JSON.stringify(array);
        AsyncStorage.setItem('mylikes', str);
      }
    } else {
      null;
    }
  };
  const _renderItem_PlacesToVisit = ({item, index}) => {
    return (
      <ToVistImg
        PlacesImg={item.PlacesImg}
        PlacesTxt1={item.PlacesTxt1}
        PlacesTxt2={item.PlacesTxt2}
        navigation={props.navigation}
      />
    );
  };
  // const getData = async () => {
  //   let users = await AsyncStorage.getItem('user_login');
  //    let parsedata = JSON.parse(users);
  //    setUserData(parsedata)
  //   console.log(parsedata)
  // }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Design.primaryColor}}>
      <View
        style={{
          backgroundColor: Design.secondaryColor,
          flex: 1,
        }}>
        <Topbar
          MyMenu={() => props.navigation.navigate('Contact')}
          News={() => props.navigation.navigate('News')}
          Map={() => props.navigation.navigate('Map')}
        />

        <View
          style={{
            paddingVertical: 10,
          }}>
          <Text style={CSS.HomeText1}>Categories </Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            data={HomeCategories}
            renderItem={_renderItem_Category}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={CSS.HomeText1}>Recomended for You : </Text>
            <SliderBox
              style={{
                height: 200,
                marginHorizontal: 10,
                width: Dimensions.get('screen').width * 0.95,
              }}
              images={Recomended}
              dotColor={'blue'}
              circleLoop
            />
          </View>

          <View style={{borderRadius: 15}}>
            <Text style={CSS.HomeText1}>Popular Places : </Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              data={PopularPlaces}
              renderItem={_renderItem_PopularPlaces}
            />
          </View>
          <Text style={CSS.HomeText1}>Places to Visit : </Text>
          <FlatList
            // inverted={-1}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            data={PlacesToVist}
            renderItem={_renderItem_PlacesToVisit}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
