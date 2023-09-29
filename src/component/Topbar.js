import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import CSS from '../StyleSheet/CSS';
import Design from '../StyleSheet/Design';

export default function Topbar(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        backgroundColor: Design.primaryColor,
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}>
      <TouchableOpacity
        onPress={() => props.Map()}
        style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <Image source={require('../assets/location.png')} style={CSS.Icon} />
        <Text style={{fontSize: 25, marginHorizontal: 10}}>
          {props.location}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.News()}>
        <Text style={{color: 'yellow', fontSize: 16, fontWeight: '700'}}>
          {props.latest} {`\n`}
          {props.news}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.MyMenu()}>
        <View style={{backgroundColor: 'white', borderRadius: 30, padding: 10}}>
          <Image
            source={require('../assets/user.png')}
            style={{height: 40, width: 40}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
