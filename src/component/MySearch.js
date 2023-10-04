import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import Design from '../StyleSheet/Design';

export default function MySearch(props) {
  return (
    <View
      style={{
        // height: Dimensions.get('screen').height * 0.07,
        marginHorizontal: 10,
        borderRadius: 10,
        marginVertical: 5,
        backgroundColor: Design.tertiaryColor,
        flexDirection: 'row',

        shadowColor: 'black',
        shadowOffset: {width: 1, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.1,

        paddingHorizontal: 5,
        alignSelf: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SukhnaLake')}>
          <Image
            source={props.PlacesImg}
            style={{
              height: Dimensions.get('screen').height * 0.06,
              width: Dimensions.get('screen').width * 0.15,

              borderRadius: 10,
              // margin:5,
              marginRight: 30,
              marginVertical: 5,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SukhnaLake')}>
          <Text style={{fontWeight: '600', fontSize: 16, color: 'black'}}>
            {props.PlacesTxt1}
          </Text>
          <Text style={{fontWeight: '300', color: 'black'}}>
            {props.PlacesTxt2}
          </Text>
          {/* <Image
            style={{height: 15, width: 70}}
            source={require('../assets/5stars.png')}
          /> */}
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Image
          style={{
            height: 25,
            width: 25,
            tintColor: 'black',
            marginTop: 10,
            marginRight: 10,
          }}
          source={require('../assets/unlike.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
