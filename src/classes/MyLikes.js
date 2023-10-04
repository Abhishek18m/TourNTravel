import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, ScrollView, FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Design from '../StyleSheet/Design';
import CSS from '../StyleSheet/CSS';
import LikedImg from '../component/LikedImg';

import I18n from 'react-native-i18n';
import en from '../languages/en';
import hi from '../languages/hi';
import ja from '../languages/ja';

I18n.fallback = true;
I18n.translations = {
  hi,
  en,
  ja,
};

export default function MyLikes(props) {
  const [myLikes, setMyLikes] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let likeData = await AsyncStorage.getItem('mylikes');
    let newData = JSON.parse(likeData);
    // array = [...newData];
    setMyLikes(newData);
  };
  // const Delete = i => {
  //   let arr = [...myLikes];
  //   let data = arr[i];
  //   console.log(data);

  //   arr.splice(i, 1);
  //   setMyLikes(arr);
  //   AsyncStorage.setItem('mylikes', JSON.stringify(arr));
  // };

  const Delete = async (i, n) => {
    let arr = [...myLikes];
    arr.splice(i, 1);
    AsyncStorage.setItem('mylikes', JSON.stringify(arr));
    setMyLikes(arr);

    let data = await AsyncStorage.getItem('likeStatus');
    let newData = JSON.parse(data);
    console.log(newData);

    function findMovies(item) {
      return item.PlacesTxt1 === n;
    }
    let index = newData.findIndex(findMovies);
    console.log(index);
    newData[index].status = false;
    AsyncStorage.setItem('likeStatus', JSON.stringify(newData));
  };

  const _renderItem_Liked = ({item, index}) => {
    return (
      <LikedImg
        index={index}
        LikedImg={item.PlacesImg}
        LikedTxt1={item.PlacesTxt1}
        LikedTxt2={item.PlacesTxt2}
        navigation={props.navigation}
        Delete={(i, n) => Delete(i, n)}
      />
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Design.primaryColor}}>
      <View
        style={{
          alignItems: 'center',
          height: 50,
          justifyContent: 'center',
          backgroundColor: Design.primaryColor,
        }}>
        <Text style={{fontSize: 25, backgroundColor: Design.primaryColor}}>
          {I18n.t('likes')}
        </Text>
      </View>

      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Design.secondaryColor,
        }}>
        <Text style={CSS.HomeText1}>{I18n.t('yourlikes')}</Text>
        <View style={{marginHorizontal: 10}}>
          <FlatList
            horizontal={false}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            data={myLikes}
            renderItem={_renderItem_Liked}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
