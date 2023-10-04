import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import CSS from '../StyleSheet/CSS';

export default function Categories(props) {
  return (
    <TouchableOpacity
      onPress={() => [props.cat_click(props.index), props.filter(props.Title)]}>
      <View style={CSS.CategoriesView}>
        <View style={[CSS.ImgView, {backgroundColor: props.Color}]}>
          <Image
            source={props.Img}
            style={[CSS.CategoriesImg, {tintColor: props.tint}]}
          />
        </View>
        <Text style={{color: 'black'}}>{props.Title}</Text>
      </View>
    </TouchableOpacity>
  );
}
