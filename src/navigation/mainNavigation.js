import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {
  CodeVerification,
  ForgotPassword,
  GetStarted,
  OnBoarding,
  PhoneVerification,
  Profile,
  ProfileCompleted,
  Signin,
  Signup,
  Splash,
  Welcome,
} from '../screens/authFlow';
import {
  ChoseWhoFuse,
  DeleteAccount,
  DeleteAccountCounter,
  Inbox,
  Notifications,
  PauseAccount,
  PrivacyPolicy,
  ProfileScreen,
  ScrollDetail,
  Settings,
  SwitchProfile,
  TermsAndServices,
} from '../screens/appFlow';
import BottomTabNavigator from './tabNavigation';
import {routes} from '../services';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Splash}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={Signin} />
      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
      <Stack.Screen name="CodeVerification" component={CodeVerification} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileCompleted" component={ProfileCompleted} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen name={routes.settings} component={Settings} />
      <Stack.Screen name={routes.delAccount} component={DeleteAccount} />
      <Stack.Screen
        options={{presentation: 'transparentModal'}}
        name={routes.delAccountconter}
        component={DeleteAccountCounter}
      />
      <Stack.Screen name={routes.PauseAccount} component={PauseAccount} />
      <Stack.Screen
        name={routes.TermsAndServices}
        component={TermsAndServices}
      />
      <Stack.Screen name={routes.PrivacyPolicy} component={PrivacyPolicy} />
      <Stack.Screen name={routes.Notifications} component={Notifications} />
      <Stack.Screen name={routes.SwitchProfile} component={SwitchProfile} />
      <Stack.Screen name={routes.profileScreen} component={ProfileScreen} />
      <Stack.Screen name={routes.ScrollDetail} component={ScrollDetail} />

      <Stack.Screen name={routes.ChoseWhoFuse} component={ChoseWhoFuse} />
      <Stack.Screen name="Inbox" component={Inbox} />
    </Stack.Navigator>
  );
};

export {MainNavigation};
