import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
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
} from "../screens/authFlow";
import { 
  Inbox,
  ScrollDetail,
} from "../screens/appFlow";
import BottomTabNavigator from "./tabNavigation";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Splash}
      screenOptions={{headerShown: false, gestureEnabled: false, ...TransitionPresets.SlideFromRightIOS}}>
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
      <Stack.Screen name="ScrollDetail" component={ScrollDetail} />
      <Stack.Screen name="Inbox" component={Inbox} />
    </Stack.Navigator>
  );
};

export { MainNavigation };
