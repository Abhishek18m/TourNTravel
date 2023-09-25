import React from 'react';
import {Image, TextInput, TouchableOpacity, View,Text} from 'react-native';
import CSS from '../StyleSheet/CSS';

export default function InputComponentPswrd(props) {
  return (
    <View >
      <TextInput
        placeholder={props.title}
        autoCorrect={false}
        style={[CSS.InputCSS, {width: props.ww}]}
        secureTextEntry={props.Security}
        // onChangeText={(val)=>test(val)}
      />
    </View>
  );
}

