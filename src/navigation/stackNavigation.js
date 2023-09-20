import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {
  ProfileHome,
  Scroll,
  Search,
  Chat,
  Spark,
  GettingFusedDaterProfileHome,
  FusingMatchMakerProfileHome,
  ScrollTab,
  SwitchProfile,
  SwitchProfileScroll,
  SearchDropDown,
} from '../screens/appFlow';
import {routes} from '../services';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const ProfileStackNavigator = () => {
  const {userType} = useSelector(state => state.userType);
  return (
    <Stack.Navigator
      initialRouteName={ProfileHome}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      {userType == 'FusingMatchMaker' ? (
        <Stack.Screen
          name={routes.fusingMatchMakerProfileHome}
          component={FusingMatchMakerProfileHome}
        />
      ) : (
        <Stack.Screen
          name={routes.GettingFusedDaterProfileHome}
          component={GettingFusedDaterProfileHome}
        />
      )}
    </Stack.Navigator>
  );
};
const ScrollStackNavigator = () => {
  const {userType} = useSelector(state => state.userType);
  return (
    <Stack.Navigator
      initialRouteName={'ScrollTab'}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      {/* <Stack.Screen name={'ScrollStack'} component={ScrollTab} /> */}
      {userType == 'FusingMatchMaker' ? (
        <Stack.Screen name={'ScrollTab'} component={ScrollTab} />
      ) : (
        <Stack.Screen
          name={routes.SwitchProfileScroll}
          component={SwitchProfileScroll}
        />
      )}
    </Stack.Navigator>
  );
};
const SearchStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.SearchDropDown}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name={routes.SearchDropDown} component={SearchDropDown} />
      <Stack.Screen name={routes.SearchStack} component={Search} />
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
