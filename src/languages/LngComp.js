import AsyncStorage from '@react-native-community/async-storage';
import {useEffect, useState} from 'react';
import {Image, NativeModules, Text, TouchableOpacity, View} from 'react-native';
import I18n from 'react-native-i18n';

export default LngComp = props => {
  return (
    <TouchableOpacity
      onPress={() => [
        props.Language(props?.data?.code),
        // NativeModules.DevSettings.reload(),
      ]}>
      <View
        style={{
          backgroundColor: 'lightgrey',
          height: 100,
          borderRadius: 10,
          margin: 10,
          flexDirection: 'row',
          // justifyContent:'space-around',
          alignItems: 'center',
        }}>
        <Image
          source={props.data.img}
          style={{height: 90, width: 90, margin: 15}}
        />
        <Text style={{fontSize: 30, flex: 1}}>{props.data.title}</Text>
        <Image source={props.btn} style={{height: 50, width: 50, margin: 15}} />
      </View>
    </TouchableOpacity>
  );
};
