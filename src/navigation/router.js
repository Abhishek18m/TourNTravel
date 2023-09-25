import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../classes/Splash';
import Login from '../classes/Login';
import Homepage from '../classes/Homepage';
import SignUp from '../classes/SignUp';
import ForgotPswrd from '../classes/Forgotpswrd';
import VerifyAccount from '../classes/VerifyAccount';
import Profile from '../classes/Profile';
import Main from '../classes/Main';
import Map from '../classes/ImagePage/Map';
import Notifications from '../classes/Notifications';
import News from '../classes/News';
import SectionListBasics from '../classes/ImagePage/Contact';
import Practice from '../classes/ImagePage/Practice';
import Language from '../languages/Language';
import Chart from '../classes/ImagePage/Chart';

const Project = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Homepage: {
    screen: Homepage,
    navigationOptions: {
      headerShown: false,
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerShown: false,
    },
  },
  ForgotPswrd: {
    screen: ForgotPswrd,
    navigationOptions: {
      headerShown: false,
    },
  },
  VerifyAccount: {
    screen: VerifyAccount,
    navigationOptions: {
      headerShown: false,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerShown: false,
    },
  },
  Main: {
    screen: Main,
    navigationOptions: {
      headerShown: false,
    },
  },
  Map: {
    screen: Map,
    navigationOptions: {
      headerShown: true,
    },
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      headerShown: false,
    },
  },
  News: {
    screen: News,
    navigationOptions: {
      headerShown: false,
    },
  },
  Contact: {
    screen: SectionListBasics,
    navigationOptions: {
      headerShown: false,
    },
  },
  Practice: {
    screen: Practice,
    navigationOptions: {
      headerShown: false,
    },
  },
  Language: {
    screen: Language,
    navigationOptions: {
      headerShown: false,
    },
  },
  Chart: {
    screen: Chart,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(Project);
