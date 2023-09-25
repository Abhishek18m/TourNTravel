import React from 'react';
import {View, Image, TouchableOpacity, TextInput, Icon} from 'react-native';
import CSS from '../StyleSheet/CSS';
import Design from '../StyleSheet/Design';

export default function SearchBar(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Design.tertiaryColor,
        
        borderWidth: 0.5,
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical:10,

        paddingVertical: 5,
        paddingHorizontal: 15,
        
      }}>
      <TextInput
        placeholder="Chandigarh, India"
        style={CSS.InputText}></TextInput>

      <TouchableOpacity onPress={props.onClick}>
        <Image
          source={require('../assets/search.png')}
          style={{height: 30, width: 30, margin:5}}
        />
      </TouchableOpacity>
    </View>
  );
}
