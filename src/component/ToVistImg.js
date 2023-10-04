import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';

export default function ToVistImg(props) {
  return (
    <View
      style={{
        // height: Dimensions.get('screen').height * 0.17,
        // width: Dimensions.get('screen').width * 0.96,
        // borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: 'white',

        shadowColor: 'black',
        shadowOffset: {width: 1, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.1,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => props.navigation.navigate('SukhnaLake')}>
        <Image
          source={props.PlacesImg}
          style={{
            height: Dimensions.get('screen').height * 0.16,
            width: Dimensions.get('screen').width * 0.92,
            marginHorizontal: 1,
            marginVertical: 5,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('SukhnaLake')}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            color: 'black',
          }}>
          {props.PlacesTxt1}
        </Text>
        <Text style={{paddingBottom: 10, alignSelf: 'center', color: 'black'}}>
          {props.PlacesTxt2}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
