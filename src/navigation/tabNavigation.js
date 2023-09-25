import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Keyboard,
  Image,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ChatStackNavigator,
  ProfileStackNavigator,
  ScrollStackNavigator,
  SearchStackNavigator,
  SparkStackNavigator,
} from './stackNavigation';
import {SvgIcons} from '../services/constants/svg';
import {appIcons, baseStyle, colors} from '../services';
import {Text} from '../components';
import {totalSize, height, width} from 'react-native-dimension';
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({onPress, accessibilityState}) => {
  const postAddTab = accessibilityState.selected;
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.logoMainBox}>
      <View
        style={[
          styles.logoBox,
          {backgroundColor: postAddTab ? colors.appColor1 : '#E7EBEA'},
        ]}>
        <Image source={appIcons.HeartVector} resizeMode="contain" />
        {/* <SvgIcons.HeartIcon
          width={'20'}
          height={'19'}
          fillColor={postAddTab ? '#FFF' : colors.appColor1}
        /> */}
        <Text
          style={[
            styles.tabText,
            {color: postAddTab ? '#FFFFFF' : colors.appColor1},
          ]}>
          Profile
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const BottomTabNavigator = () => {
  //going to check keyboard status
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Scroll"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: [styles.mainTabBar, keyboardStatus ? {bottom: 0} : {}],
      }}>
      <Tab.Screen
        name="Scroll"
        component={ScrollStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tabTextMain}>
                <View
                  style={[styles.iconStyle, focused && styles.activeIconStyle]}>
                  <SvgIcons.ScrollIcon
                    strokeColor={focused ? '#FFF' : '#040911'}
                    fillColor={focused ? colors.black : '#B5C6C4'}
                  />
                  {focused && (
                    <Text style={[styles.tabText, {color: '#FFF'}]}>
                      Scroll
                    </Text>
                  )}
                  {!focused && (
                    <Text style={[styles.tabText, {color: '#050A12'}]}>
                      Scroll
                    </Text>
                  )}
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            postAddTab = focused;
            return (
              <View style={styles.tabTextMain}>
                <View
                  style={[styles.iconStyle, focused && styles.activeIconStyle]}>
                  <SvgIcons.SearchTabIcon
                    strokeColor={focused ? '#FFF' : '#040911'}
                    fillColor={focused ? colors.black : '#B5C6C4'}
                  />
                  {focused && (
                    <Text style={[styles.tabText, {color: '#FFF'}]}>
                      Search
                    </Text>
                  )}
                  {!focused && (
                    <Text style={[styles.tabText, {color: '#050A12'}]}>
                      Search
                    </Text>
                  )}
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileHome"
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tabTextMain}>
                <View
                  style={[styles.iconStyle, focused && styles.activeIconStyle]}>
                  <Image
                    tintColor={focused ? colors.snow : colors.black}
                    source={appIcons.HeartVector}
                    resizeMode="contain"
                  />
                  {focused && (
                    <Text style={[styles.tabText, {color: '#FFF'}]}>
                      Profile
                    </Text>
                  )}
                  {!focused && (
                    <Text style={[styles.tabText, {color: '#050A12'}]}>
                      Profile
                    </Text>
                  )}
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            postAddTab = focused;
            return (
              <View style={styles.tabTextMain}>
                <View
                  style={[styles.iconStyle, focused && styles.activeIconStyle]}>
                  <SvgIcons.ChatIcon
                    width={'18'}
                    height={'19'}
                    strokeColor={focused ? '#FFF' : '#040911'}
                    fillColor={focused ? colors.black : '#B5C6C4'}
                  />
                  {focused && (
                    <Text style={[styles.tabText, {color: '#FFF'}]}>Chat</Text>
                  )}
                  {!focused && (
                    <Text style={[styles.tabText, {color: '#050A12'}]}>
                      Chat
                    </Text>
                  )}
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Spark"
        component={SparkStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            postAddTab = focused;
            return (
              <View style={styles.tabTextMain}>
                <View
                  style={[styles.iconStyle, focused && styles.activeIconStyle]}>
                  <SvgIcons.SparkIcon
                    strokeColor={focused ? '#FFF' : '#383838'}
                    fillColor={focused ? colors.black : '#B5C6C4'}
                  />
                  {focused && (
                    <Text style={[styles.tabText, {color: '#FFF'}]}>Spark</Text>
                  )}
                  {!focused && (
                    <Text style={[styles.tabText, {color: '#050A12'}]}>
                      Spark
                    </Text>
                  )}
                </View>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  mainTabBar: {
    flex: 1,
    position: 'absolute',
    bottom: height(1.5),
    left: 20,
    right: 20,
    backgroundColor: '#B5C6C4',
    height: Platform.OS === 'ios' ? 90 : 90,
    borderWidth: 0,
    zIndex: 1,
    borderTopWidth: 0,
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
    borderRadius: 24,
    shadowColor: colors.appTextColor11,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
    paddingHorizontal: baseStyle.paddingHorizontal(20),
  },
  logoMainBox: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
  },
  logoBox: {
    backgroundColor: '#E7EBEA',
    borderRadius: 24,
    height: baseStyle.height(82),
    width: baseStyle.width(78),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabTextMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    height: baseStyle.height(36),
    width: baseStyle.width(36),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    //  backgroundColor: '#E7EBEA',
  },
  activeIconStyle: {
    backgroundColor: colors.black,
    borderRadius: 22,
    height: 74,
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: baseStyle.fontSize(10),
    fontWeight: 400,
    paddingTop: 8,
    textTransform: 'capitalize',
  },
});

export default BottomTabNavigator;
