import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CSS from '../StyleSheet/CSS';
import InputComponent from '../component/InputText';
import CommonButton from '../component/CommonButtons';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
import Snackbar from 'react-native-snackbar';
import PhoneInput from 'react-native-phone-number-input';

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

// Toast.show('This is a short toast');

// Toast.show('This is a long toast.', Toast.LONG);

// Toast.showWithGravity(
//   'This is a long toast at the top.',
//   Toast.LONG,
//   Toast.TOP,
// );

// Toast.show('This is a styled toast on iOS.', Toast.LONG, {
//   backgroundColor: 'blue',
// });

var array = [];
export default function SignUp(props) {
  useEffect(() => {
    getData();
  }, []);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const getData = async () => {
    let users = await AsyncStorage.getItem('users');
    let parsedata = JSON.parse(users);
    array = [...parsedata];
  };

  const SignUp = async () => {
    if (firstName.length < 3 || !firstName) {
      // Alert.alert('Please enter your first name');
      Toast.show('First name must be a 3 letters');
    } else if (lastName.length < 3 || !lastName) {
      // Alert.alert('Please enter your last name');
      Toast.show('Please enter your last name');
    } else if (email == '') {
      // Alert.alert('Please enter your email');
      Toast.show('Please enter your email');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      Toast.show('Please enter valid email');
    } else if (password == '') {
      // Alert.alert('Please enter your password');
      Toast.show('Please enter your password');
    } else if (password != confirm) {
      // Alert.alert('Confirm password not match with confirm password');
      Toast.show('Confirm password not match with confirm password');
    } else if (array.some(el => el.email === email.toLowerCase()) === true) {
      // Alert.alert('This email already taken by another account');
      // Toast.show('This email already taken by another account');
      // Toast.show('This email already taken by another account', Toast.LONG, {
      //   backgroundColor: 'red',
      // });
      Snackbar.show({
        text: 'Hello world',
        duration: Snackbar.LENGTH_SHORT,
        marginBottom: 20,
        // backgroundColor: 'blue',
        action: {
          text: 'UNDO',
          textColor: 'yellow',
          onPress: () => {
            Toast.show('Hahahahahah');
          },
        },
      });
    } else {
      let obj = {
        first_name: firstName,
        last_name: lastName,
        email: email.toLowerCase(),
        password: password,
      };

      array.push(obj);
      let str = JSON.stringify(array);
      AsyncStorage.setItem('users', str);
      Alert.alert('Signup Successfully');
      props.navigation.navigate('Login');

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirm('');
    }
  };

  return (
    <SafeAreaView style={CSS.LoginSafeview}>
      <View
        style={{
          height: 450,
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          // backgroundColor: 'red',
        }}>
        <Text style={CSS.HeaderText}>{I18n.t('signup')}</Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flex: 0.48}}>
            <InputComponent
              title={I18n.t('fname')}
              // ww={Dimensions.get('screen').width * 0.33}
              myData={val => setFirstName(val)}
              value={firstName}
            />
          </View>
          <View style={{flex: 0.48}}>
            <InputComponent
              title={I18n.t('lname')}
              // ww={Dimensions.get('screen').width * 0.33}
              myData={val => setLastName(val)}
              value={lastName}
            />
          </View>
        </View>

        <InputComponent
          title={I18n.t('email')}
          myData={val => setEmail(val)}
          value={email}
        />
        <PhoneInput
          defaultCode="IN"
          layout="second"
          countryPickerButtonStyle={{
            width: Dimensions.get('screen').width * 0.2,
          }}
          textContainerStyle={{backgroundColor: 'white', borderRadius: 8}}
          textInputStyle={{fontSize: 14}}
          containerStyle={{
            width: Dimensions.get('screen').width * 0.85,
            height: 50,
            // marginBottom: 10,
            // marginTop: 5,
            // paddingLeft: 10,
            backgroundColor: 'white',
            borderRadius: 8,
            elevation: 3,
            shadowColor: 'black',
            shadowOpacity: 0.1,
            shadowRadius: 1,
            shadowOffset: {width: 1, height: 2},
          }}
        />
        <InputComponent
          title={I18n.t('password')}
          myData={val => setPassword(val)}
          value={password}
        />
        <InputComponent
          title={I18n.t('cpswrd')}
          myData={val => setConfirm(val)}
          value={confirm}
        />

        <CommonButton
          ButtonText={I18n.t('signup')}
          bg={'blue'}
          txt={'white'}
          onClick={() => SignUp()}
        />
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text>{I18n.t('account')}</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={{color: 'blue'}}>{I18n.t('signin')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
