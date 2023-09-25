import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CSS from '../StyleSheet/CSS';

export default function CommonButton(props) {
  return (
    <TouchableOpacity onPress={() => props.onClick()}>
      <View style={[CSS.CommonButton, {backgroundColor: props.bg}]}>
        <Text style={[CSS.CommonButtonTxt, {color: props.txt}]}>
          {props.ButtonText}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
