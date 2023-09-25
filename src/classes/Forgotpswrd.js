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
      <View style={[CSS.LoginView, {height: verified ? '75%' : '60%'}]}>
        <Text style={CSS.HeaderText}>Reset Password</Text>
        <TextInput
          editable={verified ? false : true}
          color={verified?'grey':null}
          placeholder="First Name"
          autoCorrect={false}
          style={CSS.InputCSS}
          onChangeText={val => setFirstName(val)}
          // value={props.value}
        />
        <TextInput
          editable={verified ? false : true}
          color={verified?'grey':null}
          placeholder="Last Name"
          autoCorrect={false}
          style={CSS.InputCSS}
          onChangeText={val => setLastName(val)}
          // value={props.value}
        />
        <TextInput
          editable={verified ? false : true}
          color={verified?'grey':null}
          placeholder="Email"
          autoCorrect={false}
          style={CSS.InputCSS}
          onChangeText={val => setEmail(val)}
          // value={props.value}
        />
        {verified ? (
          <TextInput
       
            placeholder="New Password"
            autoCorrect={false}
            style={CSS.InputCSS}
            onChangeText={val => setPassword(val)}
          />
        ) : null}
        {verified ? (
          <TextInput
            placeholder="Confirm Password"
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
              <Text style={CSS.CommonButtonTxt}>Update</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <CommonButton
            ButtonText="Next"
            bg={'blue'}
            txt={'white'}
            onClick={() => validation()}
          />
        )}

        <CommonButton
          ButtonText="Cancel"
          bg={'white'}
          txt={'black'}
          onClick={() => props.navigation.goBack(null)}
        />
      </View>
    </SafeAreaView>
  );
}
