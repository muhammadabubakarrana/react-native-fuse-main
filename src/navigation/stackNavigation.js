import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {
  ProfileHome,
  Scroll,
  Search,
  Chat,
  Spark,
  CaptainsPage,
  Settings,
  ProfileScreen,
  TeamForFuser,
} from '../screens/appFlow';
import {routes} from '../services';

const Stack = createStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ProfileHome}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="ProfileHomeStack" component={ProfileHome} />
      <Stack.Screen name={routes.captainpage} component={CaptainsPage} />
      <Stack.Screen name={routes.settings} component={Settings} />
      <Stack.Screen name={routes.profileScreen} component={ProfileScreen} />
      <Stack.Screen name={routes.teamForFusers} component={TeamForFuser} />
    </Stack.Navigator>
  );
};
const ScrollStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Scroll}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name={'ScrollStack'} component={Scroll} />
    </Stack.Navigator>
  );
};
const SearchStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Search}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name={'SearchStack'} component={Search} />
    </Stack.Navigator>
  );
};
const ChatStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Chat}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="ChatStack" component={Chat} />
    </Stack.Navigator>
  );
};
const SparkStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Spark}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="SparkStack" component={Spark} />
    </Stack.Navigator>
  );
};

export {
  ProfileStackNavigator,
  ScrollStackNavigator,
  SearchStackNavigator,
  ChatStackNavigator,
  SparkStackNavigator,
};
