import React from 'react';
import {TextInput, View, Text} from 'react-native';
import CSS from '../StyleSheet/CSS';

export default function InputComponent(props) {
  return (
    <TextInput
      placeholder={props.title}
      autoCorrect={false}
      style={[CSS.InputCSS, {width: props.ww}]}
      onChangeText={props.myData}
      value={props.value}
      spellCheck={false}
    />
  );
}
