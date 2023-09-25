import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Button,Dimensions,TouchableOpacity,Image, Alert
} from 'react-native';

import CSS from '../StyleSheet/CSS';
import InputComponent from '../component/InputText';
import CommonButton from '../component/CommonButtons';
import Design from '../StyleSheet/Design';

export default function VerifyAccount(props) {
  return(
    <SafeAreaView style={CSS.LoginSafeview}>
    <View style={{
    height: '40%',
    width: '85%',
    alignSelf: 'center',
    borderRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 40,
    justifyContent: 'space-evenly',
  }}>
     

      <Text style={CSS.HeaderText}>Change Your Phone Number</Text>

      <InputComponent title="New Number" myData={val => setEmail(val)} />

      <InputComponent title="Enter OTP" myData={val => setPassword(val)} />

      

      <CommonButton
        ButtonText="Save"
        bg={Design.primaryColor}
        txt={'white'}
        onClick={() => Alert.alert('Submited')}
      />

     

    </View>
  </SafeAreaView>
  )
}
