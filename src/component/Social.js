import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

export default function Social(props){
    return(
<TouchableOpacity
style={{
  shadowColor: 'black',
  shadowOffset: {width: 1, height: 3},
  shadowRadius: 1,
  shadowOpacity: 0.5,

  backgroundColor: 'white',
  paddingHorizontal: '5%',
  paddingVertical: '2.5%',
  borderRadius: 5,
  
}}>
<Image
  source={props.Img}
  style={{
    height: 30,
    width: 30,
  }}
/>
</TouchableOpacity>
)}