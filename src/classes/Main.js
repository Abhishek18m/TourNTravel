import React, {useState} from 'react';
import {View} from 'react-native';
import BottomTab from '../component/Bottomtab';

import Homepage from './Homepage';
import Search from './Search';
import MyLikes from './MyLikes';
import Profile from './Profile';

export default function Main(props) {
  
  const [displayIndex, setDisplayIndex] = useState(0);
  const pages = [
    {
      title: 'Home',
      Image: require('../assets/home.png'),
      // path:props.navigation.navigate('HomePage')
    },
    {
      title: 'Search',
      Image: require('../assets/search.png'),
    },
    {
      title: 'Likes',
      Image: require('../assets/heart.png'),
    },
    {
      title: 'Profile',
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
