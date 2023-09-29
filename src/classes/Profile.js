import React, {useState, useRef, useEffect} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import MenuTab from '../component/MenuTab';
import Design from '../StyleSheet/Design';
import Dialog, {DialogContent} from 'react-native-popup-dialog';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

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

export default function Profile(props) {
  useEffect(() => {
    getProfile();
  }, []);

  // const [profileImage, setProfileImage] = useState('');
  const [myPic, setMyPic] = useState(null);

  const getProfile = async () => {
    let pfp = await AsyncStorage.getItem('pp');

    setMyPic(pfp);
  };

  const changePicture = async () => {
    const options = {mediaType: 'photo'};
    const result = await launchImageLibrary(options);
    // console.log('1', result.assets[0].uri);
    await AsyncStorage.setItem('pp', result.assets[0].uri);
    getProfile();
    // setProfileImage(result.assets[0].uri);
  };

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let users = await AsyncStorage.getItem('user_login');
    let parsedata = JSON.parse(users);
    setUserData(parsedata);
  };
  const ClickButton = val => {
    if (val == I18n.t('logout')) {
      setShow(true);
    } else if (val == I18n.t('help')) {
      refRBSheet1.current.open();
    } else if (val == I18n.t('privacy')) {
      refRBSheet2.current.open();
    } else if (val == I18n.t('phone')) {
      props.navigation.navigate('VerifyAccount');
    } else if (val == I18n.t('notifi')) {
      props.navigation.navigate('Notifications');
    } else if (val == 'Calender') {
      props.navigation.navigate('Practice');
    } else if (val == I18n.t('lang')) {
      props.navigation.navigate('Language');
    } else if (val == 'Chart') {
      props.navigation.navigate('Chart');
    } else {
      null;
    }
  };

  const removeData = async () => {
    await AsyncStorage.removeItem('user_login');
    await AsyncStorage.removeItem('status');
    setUserData('');
  };
  const [userData, setUserData] = useState({});
  const [show, setShow] = useState(false);
  const refRBSheet1 = useRef();
  const refRBSheet2 = useRef();
  const ProfileTiles = [
    // {
    //   id: 1,
    //   title: 'Calender',
    //   MenuIcon: require('../assets/email.png'),
    // },
    {
      id: 2,
      title: I18n.t('phone'),
      MenuIcon: require('../assets/phone.png'),
    },
    {
      id: 3,
      title: I18n.t('notifi'),
      MenuIcon: require('../assets/notification.png'),
    },
    {
      id: 4,
      title: I18n.t('lang'),
      MenuIcon: require('../assets/notification.png'),
    },
    // {
    //   id: 5,
    //   title: 'Chart',
    //   MenuIcon: require('../assets/help.png'),
    // },
    {
      id: 6,
      title: I18n.t('help'),
      MenuIcon: require('../assets/help.png'),
    },
    {
      id: 7,
      title: I18n.t('privacy'),
      MenuIcon: require('../assets/help.png'),
    },
    {
      id: 8,
      title: I18n.t('logout'),
      MenuIcon: require('../assets/logout.png'),
    },
  ];
  const _renderItem_ProfileMenu = ({item, index}) => {
    return (
      <MenuTab
        title={item.title}
        MenuIcon={item.MenuIcon}
        ClickProfile={val => ClickButton(val)}
      />
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Design.primaryColor}}>
      <View
        style={{
          alignItems: 'center',
          height: 50,
          justifyContent: 'center',
          backgroundColor: Design.primaryColor,
        }}>
        <Text style={{fontSize: 25, backgroundColor: Design.primaryColor}}>
          {I18n.t('profile')}
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: Design.secondaryColor,
          paddingHorizontal: 10,
        }}>
        <Image
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'skyblue',
            borderRadius: 50,
            alignSelf: 'center',
            margin: 20,
          }}
          source={{uri: myPic}}
        />
        <Text style={{alignSelf: 'center', fontSize: 22}}>
          {userData?.first_name} {userData?.last_name}
        </Text>
        <TouchableOpacity onPress={() => changePicture()}>
          <Text style={{color: 'blue', alignSelf: 'center', marginBottom: 10}}>
            {I18n.t('change')}
          </Text>
        </TouchableOpacity>

        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          data={ProfileTiles}
          renderItem={_renderItem_ProfileMenu}
        />
      </View>

      <Dialog
        visible={show}
        onTouchOutside={() => {
          setShow(false);
        }}>
        <DialogContent>
          {show ? (
            <View
              style={{
                height: 100,
                width: 200,
                justifyContent: 'space-evenly',
              }}>
              <Text style={{fontSize: 20, alignSelf: 'center'}}>
                {I18n.t('sure')}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity onPress={() => setShow(false)}>
                  <View>
                    <Text style={{fontSize: 20}}>{I18n.t('no')}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    removeData(),
                      setShow(false),
                      props.navigation.navigate('Login');
                  }}>
                  <View>
                    <Text style={{fontSize: 20}}>{I18n.t('yes')}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </DialogContent>
      </Dialog>

      <RBSheet
        ref={refRBSheet1}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View style={{alignItems: 'center'}}>
          <Text>Contact us at +91 9876543210</Text>
        </View>
      </RBSheet>

      <RBSheet
        ref={refRBSheet2}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View style={{alignItems: 'center'}}>
          <Text>
            Looking for Terms and Conditions? Check out Terms and Conditions
            Generator.
          </Text>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
}
