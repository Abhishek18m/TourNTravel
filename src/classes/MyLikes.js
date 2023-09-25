import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, ScrollView, FlatList} from 'react-native';

import Design from '../StyleSheet/Design';
import CSS from '../StyleSheet/CSS';
import LikedImg from '../component/LikedImg';
import AsyncStorage from '@react-native-community/async-storage';
let array=[]
export default function MyLikes(props) {
  const [myLikes, setMyLikes] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let users = await AsyncStorage.getItem('mylikes');
    let parsedata = JSON.parse(users);
    array = [...parsedata];
    // setMyLikes(array)
   setMyLikes(array)
  };
  
  
  const _renderItem_Liked = ({item, index}) => {
    return (
      <LikedImg
        LikedImg={item.PlacesImg}
        LikedTxt1={item.PlacesTxt1}
        LikedTxt2={item.PlacesTxt2}
        navigation={props.navigation}
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
          Likes
        </Text>
      </View>

      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Design.secondaryColor,
        }}>
        <Text style={CSS.HomeText1}>Your Liked Images</Text>
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
