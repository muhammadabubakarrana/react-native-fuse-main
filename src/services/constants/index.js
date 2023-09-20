import {colors} from '../utilities/colors';
import {appStyles} from '../utilities/appStyles';

export const baseURL = '';
export const endPoints = {
  login: 'login',
  courses: 'rooms',
  classes: 'classes',
};
export const routes = {
  auth: 'auth',
  app: 'app',
  splash: 'splash',
  signin: 'signin',
  signup: 'signup',
  home: 'home',
  myEvents: 'myEvents',
  createEvent: 'createEvent',
  eventDetail: 'eventDetail',
  userDetail: 'userDetail',
  archiveDetail: 'archiveDetail',
  inviteDetail: 'inviteDetail',
  eventSpotLight: 'eventSpotLight',
  destination: 'destination',
  locationBlast: 'locationBlast',
  delAccount: 'DeleteAccount',
  settings: 'Settings',
  profileScreen: 'ProfileScreen',
  delAccountconter: 'DeleteAccountCounter',
  PauseAccount: 'PauseAccount',
  TermsAndServices: 'TermsAndServices',
  PrivacyPolicy: 'PrivacyPolicy',
  Notifications: 'Notifications',
  SwitchProfile: 'SwitchProfile',
  fusingMatchMakerProfileHome: 'fusingMatchMakerProfileHome',
  GettingFusedDaterProfileHome: 'GettingFusedDaterProfileHome',
  ChoseWhoFuse: 'ChoseWhoFuse',
  ScrollDetail: 'ScrollDetail',
  SwitchProfileScroll: 'SwitchProfileScroll',
  SearchDropDown: 'SearchDropDown',
  SearchStack: 'SearchStack',
};
export const headers = {
  screenOptions: {
    // headerShown: false,
    title: 'Title',
    headerTitleAlign: 'left',
    headerStyle: [appStyles.headerStyle],
    headerTitleStyle: appStyles.headerTitleStyle,
    headerTintColor: colors.appTextColor4,
    headerBackTitle: ' ',
  },
};
export const tabs = {
  tabBarOptions: {
    showLabel: false,
    tabBarActiveTintColor: colors.appColor1,
    tabBarInactiveTintColor: colors.appBgColor3,
    allowFontScaling: true,
    tabBarStyle: appStyles.tabBarStyle,
    activeBackgroundColor: '#FFFFFF40',
    tabStyle: {borderRadius: 20, marginHorizontal: 7.5, marginVertical: 2},
  },
};
