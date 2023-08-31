import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Keyboard,
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
import {baseStyle, colors} from '../services';
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
        <SvgIcons.ProfileHomeIcon
          fillColor={postAddTab ? '#FFF' : colors.appColor1}
        />
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
                    strokeColor={focused ? '#FFF' : '#383838'}
                    fillColor={focused ? colors.appColor1 : '#FFF'}
                  />
                  {focused && (
                    <Text style={[styles.tabText, {color: '#FFF'}]}>
                      Scroll
                    </Text>
                  )}
                </View>
                {!focused && (
                  <Text style={[styles.tabText, {color: '#B5C6C4'}]}>
                    Scroll
                  </Text>
                )}
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
                    strokeColor={focused ? '#FFF' : '#383838'}
                    fillColor={focused ? colors.appColor1 : '#FFF'}
                  />
                  {focused && (
                    <Text style={[styles.tabText, {color: '#FFF'}]}>
                      Search
                    </Text>
                  )}
                </View>
                {!focused && (
                  <Text style={[styles.tabText, {color: '#B5C6C4'}]}>
                    Search
                  </Text>
                )}
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
                  <SvgIcons.ProfileHomeIcon
                    strokeColor={focused ? '#FFF' : '#383838'}
                    fillColor={focused ? colors.appColor1 : '#383838'}
                  />
                  {focused && (
                    <Text style={[styles.tabText, {color: '#FFF'}]}>
                      Profile
                    </Text>
                  )}
                </View>
                {!focused && (
                  <Text style={[styles.tabText, {color: '#B5C6C4'}]}>
                    Profile
                  </Text>
                )}
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
                    strokeColor={focused ? '#FFF' : '#383838'}
                    fillColor={focused ? colors.appColor1 : '#FFF'}
                  />
                  {focused && (
                    <Text style={[styles.tabText, {color: '#FFF'}]}>Chat</Text>
                  )}
                </View>
                {!focused && (
                  <Text style={[styles.tabText, {color: '#B5C6C4'}]}>Chat</Text>
                )}
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
                    fillColor={focused ? colors.appColor1 : '#FFF'}
                  />
                  {focused && (
                    <Text style={[styles.tabText, {color: '#FFF'}]}>Spark</Text>
                  )}
                </View>
                {!focused && (
                  <Text style={[styles.tabText, {color: '#B5C6C4'}]}>
                    Spark
                  </Text>
                )}
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
    backgroundColor: '#FFFFFF',
    height: Platform.OS === 'ios' ? 90 : 90,
    borderWidth: 0,
    zIndex: 1,
    borderTopWidth: 0,
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
    borderRadius: 24,
    shadowColor: '#ccc',
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
    backgroundColor: '#E7EBEA',
  },
  activeIconStyle: {
    backgroundColor: colors.appColor1,
    borderRadius: 22,
    height: baseStyle.height(74),
    width: baseStyle.width(65),
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
