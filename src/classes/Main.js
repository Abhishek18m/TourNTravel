import React, {useState} from 'react';
import {View} from 'react-native';
import BottomTab from '../component/Bottomtab';

import Homepage from './Homepage';
import Search from './Search';
import MyLikes from './MyLikes';
import Profile from './Profile';

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

export default function Main(props) {
  const [displayIndex, setDisplayIndex] = useState(0);
  const pages = [
    {
      title: I18n.t('home'),
      Image: require('../assets/home.png'),
      // path:props.navigation.navigate('HomePage')
    },
    {
      title: I18n.t('search'),
      Image: require('../assets/search.png'),
    },
    {
      title: I18n.t('likes'),
      Image: require('../assets/heart.png'),
    },
    {
      title: I18n.t('profile'),
      Image: require('../assets/user.png'),
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        {displayIndex == 0 ? (
          <Homepage navigation={props.navigation} />
        ) : displayIndex == 1 ? (
          <Search navigation={props.navigation} />
        ) : displayIndex == 2 ? (
          <MyLikes navigation={props.navigation} />
        ) : displayIndex == 3 ? (
          <Profile navigation={props.navigation} />
        ) : null}
      </View>

      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        {pages.map((item, index) => {
          return (
            <BottomTab
              title={item.title}
              Image={item.Image}
              index={index}
              displayIndex={displayIndex}
              tabClick={val => {
                setDisplayIndex(val);
              }}
            />
          );
        })}
      </View>
    </View>
  );
}
