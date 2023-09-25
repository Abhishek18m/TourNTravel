import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Design from '../StyleSheet/Design';

export default function BottomTab(props) {
  const {tabClick} = props;
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 15,
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
      }}>
      <TouchableOpacity onPress={() => tabClick(props.index)}>
        <View
          style={{
            backgroundColor:
            props.index == props.displayIndex ? Design.primaryColor : 'white',
            marginHorizontal: 10,
            marginVertical: 5,
            paddingVertical: 5,
            borderRadius: 15,
          }}>
          <Image
            style={{
              height: 30,
              width: 30,
              tintColor: props.index == props.displayIndex ? 'white' : 'black',
              alignSelf: 'center',
            }}
            source={props.Image}
          />

          <Text
            style={{
              color: props.index == props.displayIndex ? 'white' : 'black',
              fontSize: 18,
              alignSelf: 'center',
            }}>
            {props.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
