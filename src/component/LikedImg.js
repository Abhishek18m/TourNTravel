import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';

export default function LikedImg(props) {
  return (
    <View
      style={{
        height: Dimensions.get('screen').height * 0.24,
        width: Dimensions.get('screen').width * 0.45,
        borderRadius: 5,
        marginHorizontal: 5,
        marginVertical: 5,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        padding: 5,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.1,
      }}>
      <TouchableOpacity onPress={() => props.navigation.navigate('SukhnaLake')}>
        <Image
          source={props.LikedImg}
          style={{
            height: Dimensions.get('screen').height * 0.16,
            width: Dimensions.get('screen').width * 0.4,

            borderRadius: 5,

            marginVertical: 5,
          }}
        />
      </TouchableOpacity>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SukhnaLake')}>
          <Text style={{fontWeight: 'bold', fontSize: 15, width: 120}}>
            {props.LikedTxt1}
          </Text>
          <Text style={{fontSize: 13}}>{props.LikedTxt2}</Text>
          {/* <Image
            style={{height: 15, width: 70}}
            source={require('../assets/5stars.png')}
          /> */}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.Delete(props.index, props.LikedTxt1)}>
          <Image
            style={{
              height: 25,
              width: 25,
              tintColor: 'red',
            }}
            source={require('../assets/heart.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
