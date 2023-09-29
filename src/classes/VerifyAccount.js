import React from 'react';
import {SafeAreaView, Text, View, Alert, Dimensions} from 'react-native';

import CSS from '../StyleSheet/CSS';
import InputComponent from '../component/InputText';
import CommonButton from '../component/CommonButtons';
import Design from '../StyleSheet/Design';

import I18n from 'react-native-i18n';
import en from '../languages/en';
import hi from '../languages/hi';
import ja from '../languages/ja';
import PhoneInput from 'react-native-phone-number-input';

I18n.fallback = true;
I18n.translations = {
  hi,
  en,
  ja,
};

export default function VerifyAccount(props) {
  return (
    <SafeAreaView style={CSS.LoginSafeview}>
      <View
        style={{
          height: 300,
          // width: '85%',
          // alignSelf: 'center',
          borderRadius: 50,
          paddingHorizontal: 30,
          paddingVertical: 40,
          justifyContent: 'space-evenly',
        }}>
        <Text
          style={{
            // alignSelf: 'center',
            color: 'black',
            fontSize: 20,
            // marginBottom: 10,
          }}>
          {I18n.t('changenumber')}
        </Text>

        {/* <InputComponent title="New Number" myData={val => setEmail(val)} /> */}
        <PhoneInput
          defaultCode="IN"
          layout="second"
          countryPickerButtonStyle={{
            width: Dimensions.get('screen').width * 0.2,
          }}
          textContainerStyle={{backgroundColor: 'white', borderRadius: 8}}
          textInputStyle={{fontSize: 14}}
          containerStyle={{
            width: Dimensions.get('screen').width * 0.84,
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
          title={I18n.t('otp')}
          myData={val => setPassword(val)}
        />

        <CommonButton
          ButtonText={I18n.t('save')}
          bg={Design.primaryColor}
          txt={'white'}
          onClick={() => Alert.alert('Submited')}
        />
      </View>
    </SafeAreaView>
  );
}
