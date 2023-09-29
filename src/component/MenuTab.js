import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import Design from '../StyleSheet/Design';

export default function MenuTab(props) {
  const {ClickProfile} = props;
  return (
    <TouchableOpacity
      onPress={() => ClickProfile(props.title)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Design.tertiaryColor,
        marginBottom: 6,
        borderRadius: 5,
        padding: 5,
      }}>
      <Image
        source={props.MenuIcon}
        style={{
          height: 30,
          width: 30,
          marginVertical: 10,
          marginRight: 20,
          marginLeft: 10,
        }}
      />
      <Text style={{fontSize: 20}}>{props.title}</Text>
    </TouchableOpacity>
  );
}
