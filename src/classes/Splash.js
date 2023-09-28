import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  LogBox,
} from 'react-native';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

import CSS from '../StyleSheet/CSS';
import AsyncStorage from '@react-native-community/async-storage';

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

export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 2000);
  }, []);

  const getData = async () => {
    const language = await AsyncStorage.getItem('language');
    let status = await AsyncStorage.getItem('status');
    // {
    //   language ? (I18n.locale = language) : (I18n.locale = 'en');
    // }
    if (language == undefined || language == null || language == '') {
      I18n.locale = 'en';
    } else {
      I18n.locale = language;
    }
    if (status == 'true') {
      props.navigation.navigate('Main');
    } else {
      props.navigation.navigate('Login');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/4.jpg')}
      style={CSS.ImageBackground}>
      <SafeAreaView style={CSS.SplashSheet}>
        <View style={CSS.SplashView1}>
          <Text style={CSS.SplashText1}>Demlyk</Text>
          <Text style={CSS.SplashText2}>Explore and Travel</Text>
          <Image source={require('../assets/bg.png')} style={CSS.SplashLogo} />
        </View>
        <View style={CSS.SplashView2}>
          <Text style={CSS.SplashText3}>Discover and Enjoy</Text>
          <Text style={CSS.SplashText4}>Wherever you want to go</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
