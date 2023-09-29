import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';

export default function PopularImages(props) {
  const {likedButton} = props;
  return (
    <View
      style={{
        height: Dimensions.get('screen').height * 0.17,
        width: Dimensions.get('screen').width * 0.65,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.1,
        paddingHorizontal: 5,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Chandigarh')}>
          <Image
            source={props.PlacesImg}
            style={{
              height: Dimensions.get('screen').height * 0.16,
              width: Dimensions.get('screen').width * 0.25,

              borderRadius: 10,
              marginHorizontal: 1,
              marginRight: 7,
              marginVertical: 5,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Chandigarh')}>
          <Text
            style={{
              fontWeight: 'bold',
              width: Dimensions.get('screen').width * 0.27,
              fontSize: 16,
            }}>
            {props.PlacesTxt1}
          </Text>
          <Text style={{fontSize: 13, fontWeight: '300'}}>
            {props.PlacesTxt2}
          </Text>
          {/* <Image
            style={{height: 15, width: 70}}
            source={require('../assets/5stars.png')}
          /> */}
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => [
            // likedButton(props.status),
            props.button(props.index),
          ]}>
          <Image
            style={{
              height: 25,
              width: 25,
              // tintColor: 'black',
              marginTop: 10,
              marginRight: 10,
            }}
            source={props.liked}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
