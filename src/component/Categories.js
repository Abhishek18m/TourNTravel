import React from 'react';
import {Image, Text,  TouchableOpacity, View} from 'react-native';
import CSS from '../StyleSheet/CSS';

export default function Categories(props) {

  return (
    <TouchableOpacity 
    onPress={()=>props.cat_click(props.index)}
    >
    <View style={CSS.CategoriesView}>
      <View style={[CSS.ImgView, {backgroundColor: props.Color}]}>
        <Image source={props.Img} style={[CSS.CategoriesImg, {tintColor:props.tint}]} />
      </View>
      <Text>{props.Title}</Text>
    </View>
    </TouchableOpacity>
  );
}
