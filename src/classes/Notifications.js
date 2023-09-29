import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

import NotificationList from '../component/notificationsTab';

import I18n from 'react-native-i18n';
import en from '../languages/en';
import hi from '../languages/hi';
import ja from '../languages/ja';

I18n.fallback = true;
I18n.translations = {
  hi,
  en,
  ja,
};

export default function Notification(props) {
  // const [selectedIndex, setSelectedIndex] = useState(-1);
  const Nlists = [
    {
      date: I18n.t('date3'),
    },
    {
      date: I18n.t('date3'),
    },
    {
      date: I18n.t('date2'),
    },
    {
      date: I18n.t('date2'),
    },
    {
      date: I18n.t('date1'),
    },
  ];

  // const List = [
  //   {
  //     number: 1,
  //   },
  //   {
  //     number: 2,
  //   },
  //   {
  //     number: 3,
  //   },
  //   {
  //     number: 4,
  //   },
  // ];
  // const [id, setId] = useState(null);
  // const gg = () => {
  //   console.log(id);
  // };
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
          {I18n.t('notifi')}
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{marginTop: 20}}
        data={Nlists}
        renderItem={({item, index}) => {
          return (
            <NotificationList message={I18n.t('message')} date={item.date} />
          );
        }}
      />
      {/* <FlatList
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
      /> */}
    </SafeAreaView>
  );
}
