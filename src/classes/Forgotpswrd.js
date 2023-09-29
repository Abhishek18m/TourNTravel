import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';

import CSS from '../StyleSheet/CSS';
import InputComponent from '../component/InputText';
import CommonButton from '../component/CommonButtons';
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

export default function ForgotPswrd(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const [verified, setVerified] = useState(false);

  const validation = () => {
    if (firstName == '') {
      Alert.alert('Please enter first name');
    } else if (lastName == '') {
      Alert.alert('Please enter last name');
    } else if (email == '') {
      Alert.alert('Please enter email address');
    } else getData();
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
      if (
        res[0].email == email.toLowerCase() &&
        res[0].first_name == firstName &&
        res[0].last_name == lastName
      ) {
        setVerified(true);
      } else {
        Alert.alert('Invalid Credentails');
      }
    }
  };

  const updatePassword = () => {
    Alert.alert('sfs');
  };

  return (
    <SafeAreaView style={CSS.LoginSafeview}>
      <View
        style={[
          CSS.LoginView,
          // {height: verified ? '75%' : '50%', backgroundColor: 'red'},
        ]}>
        <View
          style={{
            justifyContent: 'space-between',
            marginTop: 100,
            height: verified ? 450 : 350,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              color: 'black',
              fontSize: 28,
              marginBottom: 10,
              fontWeight: 'bold',
            }}>
            {verified ? I18n.t('reset') : I18n.t('verify')}
          </Text>
          <TextInput
            editable={verified ? false : true}
            color={verified ? 'grey' : null}
            placeholderTextColor={'lightgrey'}
            placeholder={I18n.t('fname')}
            autoCorrect={false}
            style={CSS.InputCSS}
            onChangeText={val => setFirstName(val)}
            // value={props.value}
          />
          <TextInput
            editable={verified ? false : true}
            placeholderTextColor={'lightgrey'}
            color={verified ? 'grey' : null}
            placeholder={I18n.t('lname')}
            autoCorrect={false}
            style={CSS.InputCSS}
            onChangeText={val => setLastName(val)}
            // value={props.value}
          />
          <TextInput
            editable={verified ? false : true}
            placeholderTextColor={'lightgrey'}
            color={verified ? 'grey' : null}
            placeholder={I18n.t('email')}
            autoCorrect={false}
            style={CSS.InputCSS}
            onChangeText={val => setEmail(val)}
            // value={props.value}
          />
          {verified ? (
            <TextInput
              placeholder={I18n.t('npswrd')}
              autoCorrect={false}
              style={CSS.InputCSS}
              onChangeText={val => setPassword(val)}
            />
          ) : null}
          {verified ? (
            <TextInput
              placeholder={I18n.t('cpswrd')}
              autoCorrect={false}
              style={CSS.InputCSS}
              onChangeText={val => setConfirm(val)}
            />
          ) : null}

          {/* <InputComponent title="First Name" test={val => console.log(val)} />
        <InputComponent title="Last Name" />
        <InputComponent title="Email Adress" /> */}

          {verified ? (
            <TouchableOpacity onPress={() => updatePassword()}>
              <View style={CSS.CommonButton}>
                <Text style={CSS.CommonButtonTxt}>{I18n.t('update')}</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <CommonButton
              ButtonText={I18n.t('nxt')}
              bg={'blue'}
              txt={'white'}
              onClick={() => validation()}
            />
          )}

          <CommonButton
            ButtonText={I18n.t('cncl')}
            bg={'white'}
            txt={'black'}
            onClick={() => props.navigation.goBack(null)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
