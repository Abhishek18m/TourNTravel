import {StyleSheet, Dimensions} from 'react-native';
import Design from './Design';

export default StyleSheet.create({
  ImageBackground: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },

  SplashSheet: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  SplashLogo: {
    height: 200,
    width: 200,
  },

  SplashView1: {
    alignItems: 'center',
    marginTop: 50,
    // backgroundColor:'lightgrey',
    paddingHorizontal: 50,
    borderRadius: 50,
  },
  SplashView2: {
    alignItems: 'center',
    marginBottom: 100,
  },
  SplashText1: {
    color: 'white',
    fontSize: 40,
    fontWeight: '900',
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  SplashText2: {
    color: 'black',
    fontSize: 20,
    fontWeight: '100',
  },
  SplashText3: {
    color: 'white',
    fontSize: 25,
    fontWeight: '900',
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.6,
  },
  SplashText4: {
    color: 'white',
    fontSize: 15,
    fontWeight: '300',
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 2,
    shadowOpacity: 1,
  },

  HeaderText: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
    marginBottom: 10,
  },
  LoginView: {
    // height: 500,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    flex: 1,
    // paddingVertical: 40,

    // justifyContent: 'space-evenly',
    // backgroundColor: 'red',
  },
  SocialView: {
    backgroundColor: 'skyblue',
    height: 150,
    width: 300,
    alignSelf: 'center',
    borderRadius: 25,
    paddingHorizontal: 30,
    opacity: 0.9,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 10},
    shadowRadius: 5,
    shadowOpacity: 0.5,
    justifyContent: 'space-evenly',
  },

  LoginSafeview: {
    flex: 1,
    justifyContent: 'center',
  },
  InputCSS: {
    height: 50,
    // marginBottom: 10,
    // marginTop: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius: 8,

    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {width: 1, height: 2},
  },
  SearchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Design.tertiaryColor,

    borderWidth: 0.5,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10,

    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  CommonButton: {
    height: 50,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // margin: 10,
    backgroundColor: 'blue',
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 2},
    shadowRadius: 1,
    shadowOpacity: 0.5,
  },
  CommonButtonTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  OtpView: {
    borderWidth: 0.5,
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  OtpText: {
    fontSize: 25,
    alignSelf: 'center',
  },

  HomeText1: {
    fontSize: 25,
    marginHorizontal: 10,
    fontWeight: '500',
    marginVertical: 10,
  },
  CategoriesView: {
    alignItems: 'center',
  },
  ImgView: {
    height: 50,
    width: 50,
    margin: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 2},
    shadowRadius: 1,
    shadowOpacity: 0.5,
  },
  CategoriesImg: {
    height: 25,
    width: 25,
  },
  Icon: {
    height: 30,
    width: 30,
  },
  PopularImg: {
    height: Dimensions.get('screen').height * 0.2,
    width: Dimensions.get('screen').width * 0.45,
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  InputText: {
    fontSize: 25,
  },
  Tile: {
    justifyContent: 'center',
  },
  TextTile: {
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  ProfileView: {},
});
