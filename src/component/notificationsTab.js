import React from 'react';
import {Text, View, Image} from 'react-native';

export default function NotificationList(props) {
  return (
    <View
      style={{
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 12,
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/users.png')}
        style={{
          height: 40,
          width: 40,
          borderRadius: 25,
          margin: 10,
        }}
      />

      <View style={{flex: 1}}>
        <Text>{props.date}</Text>

        <Text>You got a notification</Text>
      </View>
      <Text style={{alignSelf: 'flex-end', margin: 5}}>15 min</Text>
    </View>
  );
}
