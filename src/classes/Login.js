import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CSS from '../StyleSheet/CSS';
import InputComponent from '../component/InputText';
import CommonButton from '../component/CommonButtons';
import Social from '../component/Social';
import Design from '../StyleSheet/Design';
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

let array = [];
export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mSignIn = () => {
    if (email === '') {
      Alert.alert('Please fill email');
    } else if (password === '') {
      Alert.alert('Please fill password');
    } else {
      getData();
    }
  };
  const getData = async () => {
    let users = await AsyncStorage.getItem('users');
    let parsedata = JSON.parse(users);
    array = [...parsedata];

    let res = array
      .filter(item => item.email == email.toLowerCase())
      .map(({email, password, first_name, last_name}) => ({
        email,
        password,
        first_name,
        last_name,
      }));

    if (res.length == 0) {
      Alert.alert("email doesn't exist");
    } else {
      if (res[0].email == email.toLowerCase() && res[0].password == password) {
        let str = JSON.stringify(res[0]);
        // console.warn(str);
        // console.log(res);
        AsyncStorage.setItem('user_login', str);

        props.navigation.navigate('Main');
      } else {
        Alert.alert('Invalid Credentails');
      }
    }
  };
  return (
    <SafeAreaView style={CSS.LoginSafeview}>
      <View style={CSS.LoginView}>
        <Text style={{alignSelf: 'center', fontSize: 30, fontWeight: 'bold'}}>
          {I18n.t('greetings')}
        </Text>
        <Image
          source={require('../assets/departures.png')}
          style={{
            height: 100,
            width: 100,
            alignSelf: 'center',
            tintColor: 'blue',
            marginBottom: 50,
          }}
        />

        <Text style={CSS.HeaderText}> {I18n.t('login')}</Text>

        <InputComponent title={I18n.t('email')} myData={val => setEmail(val)} />

        <InputComponent
          title={I18n.t('password')}
          myData={val => setPassword(val)}
        />

        <TouchableOpacity
          onPress={() => props.navigation.navigate('ForgotPswrd')}>
          <Text style={{alignSelf: 'flex-end', color: 'blue'}}>
            {I18n.t('forgot')}
          </Text>
        </TouchableOpacity>

        <CommonButton
          ButtonText={I18n.t('signin')}
          bg={Design.primaryColor}
          txt={'white'}
          onClick={() => mSignIn()}
        />

        <Text style={{alignSelf: 'center'}}>{I18n.t('orSignInWith')}</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-evenly',
          }}>
          <Social Img={require('../assets/gmail.png')} />
          <Social Img={require('../assets/apple.png')} />
          <Social Img={require('../assets/facebook.png')} />
          <Social Img={require('../assets/twitter.png')} />
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text>{I18n.t('dontHaveAccount')}</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={{color: 'blue'}}>{I18n.t('signup')}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Language')}
          style={{alignSelf: 'center'}}>
          <Text style={{color: 'blue'}}>change language?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
