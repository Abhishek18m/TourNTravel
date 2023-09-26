import React from 'react';
import {Text, View} from 'react-native';

export default function TextView(props) {
  return (
    <Text
      style={{
        fontSize: props.size,
        fontWeight: props.weight,
        color: props.color,

        margin: props.margin,
        marginHorizontal: props.Horizon,
        marginVertical: props.Vertical,
        marginTop: props.Tmargin,
        marginLeft: props.Lmargin,
        marginRight: props.Rmargin,

        padding: props.padding,
        paddingBottom: props.padB,
        paddingTop: props.padT,
        paddingHorizontal: props.padH,
        paddingVertical: props.padV,
        paddingLeft: props.padL,
        paddingRight: props.padR,

        textAlign: props.tAlign,
      }}>
      {props.text}
    </Text>
  );
}
