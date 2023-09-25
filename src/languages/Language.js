import {Button, FlatList, NativeModules, SafeAreaView} from 'react-native';
import LngComp from './LngComp';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {StackActions, NavigationActions} from 'react-navigation';

export default function Language(props) {
  const [code, setCode] = useState('');
  const [val, setVal] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   NativeModules.DevSettings.reload();
  // }, [id]);

  const Action = language => {
    AsyncStorage.setItem('language', language);
    getData();
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Splash'})],
    });
    props.navigation.dispatch(resetAction);
  };

  const getData = async () => {
    let Data = await AsyncStorage.getItem('language');

    setCode(Data);
  };

  const List = [
    {
      img: require('../assets/uk.png'),
      title: 'English',
      code: 'en',
    },
    {
      img: require('../assets/india.png'),
      title: 'Hindi',
      code: 'hi',
    },

    {
      img: require('../assets/japan.png'),
      title: 'Japanese',
      code: 'ja',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={List}
        renderItem={({item, index}) => {
          return (
            <LngComp
              data={item}
              Language={language => Action(language)}
              btn={
                item.code == code
                  ? require('../assets/on.png')
                  : require('../assets/off.png')
              }
            />
          );
        }}
      />
      <Button
        title="click me"
        color={val ? 'red' : 'green'}
        onPress={() => setVal(!val)}
      />
    </SafeAreaView>
  );
}
