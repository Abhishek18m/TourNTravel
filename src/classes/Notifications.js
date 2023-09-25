import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

import NotificationList from '../component/notificationsTab';

export default function Notification(props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const Nlists = [
  //   {
  //     date: 'August 2023',
  //   },
  //   {
  //     date: 'August 2023',
  //   },
  //   {
  //     date: 'August 2023',
  //   },
  //   {
  //     date: 'August 2023',
  //   },
  //   {
  //     date: 'August 2023',
  //   },

  // ];

  const List = [
    {
      number: 1,
    },
    {
      number: 2,
    },
    {
      number: 3,
    },
    {
      number: 4,
    },
  ];
  const [id, setId] = useState(null);
  const gg = () => {
    console.log(id);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 25,
            color: 'white',
            alignSelf: 'center',
            color: 'black',
          }}>
          Notifications
        </Text>
      </View>
      {/* <FlatList
        showsVerticalScrollIndicator={false}
        style={{marginTop: 20}}
        data={Nlists}
        renderItem={({item, index}) => {
          return <NotificationList date={item.date} />;
        }}
      /> */}
      <FlatList
        data={List}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSelectedIndex(index);
              }}
              style={{
                backgroundColor: index == selectedIndex ? 'green' : 'grey',
                height: 50,
                width: 50,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
              }}>
              <Text>{item.number}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}
