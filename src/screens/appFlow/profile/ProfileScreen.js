import React, {useState, useRef} from 'react';
import {
  Buttons,
  Wrapper,
  Spacer,
  Text,
  StatusBars,
  GeneralSwitch,
  PhotosSwitch,
  PromptsSwitch,
  ScrollViews,
  CustomStatusBar,
} from '../../../components';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
//import {useNavigation} from '@react-navigation/native';
import {
  appImages,
  appStyles,
  appSvgs,
  baseStyle,
  colors,
  routes,
  sizes,
} from '../../../services';
import {totalSize, height, width} from 'react-native-dimension';
import {CustomHeader} from '../../../components/headers/customHeader';
import {Icon} from '@rneui/themed';
import SwitchSelector from 'react-native-switch-selector';
import {goBack, navigate} from '../../../navigation/rootNavigation';

const ProfileScreen = () => {
  // const navigation = useNavigation();
  // const {profileImage} = props.route.params;
  const [notificationEnable, setNotificationEnable] = useState(false);
  const [mode, setMode] = useState('General');

  return (
    <Wrapper isMain style={{flex: 1, backgroundColor: colors.appTextColor11}}>
      <CustomStatusBar barStyle={'dark'} backgroundColor={'#FFFFFF'} />
      <StatusBars.Dark />
      <ScrollViews.KeyboardAvoiding>
        <View>
          <ImageBackground
            resizeMode="cover"
            style={{
              height: Dimensions.get('window').height / 2,
              width: Dimensions.get('window').width,
            }}
            source={appImages.profileBg}>
            <Wrapper
              //   style={{}}
              marginVerticalBase
              marginHorizontalBase
              flexDirectionRow
              alignItemsCenter
              justifyContentSpaceBetween>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.appTextColor11,
                  borderRadius: 100,
                  alignItems: 'center',
                  width: 45,
                  height: 45,
                  justifyContent: 'center',
                }}
                onPress={goBack}>
                <Icon
                  size={totalSize(3.5)}
                  type="material-icons"
                  name="keyboard-backspace"
                  color={colors.snow}
                />
              </TouchableOpacity>
              <TouchableOpacity
                //onPress={() => navigate(routes.settings)}
                style={{
                  backgroundColor: colors.appTextColor11,
                  borderRadius: 100,
                  alignItems: 'center',
                  width: 45,
                  height: 45,
                  justifyContent: 'center',
                }}>
                <Icon
                  type="material-community"
                  name="cog-outline"
                  color={colors.appBgColor3}
                  size={totalSize(3.5)}
                />
              </TouchableOpacity>
            </Wrapper>
          </ImageBackground>
        </View>

        {/* Profile Name */}
        <Wrapper marginHorizontalBase marginVerticalSmall>
          <Text
            style={{
              color: colors.snow,
              fontSize: baseStyle.fontSize(42),
              fontWeight: 800,
            }}>
            Michael Wawrick
          </Text>
        </Wrapper>

        {/* Selectors */}
        {/* <Wrapper marginVerticalMedium>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setNotificationEnable(false)}
              style={{
                marginRight: baseStyle.marginRight(16),
                justifyContent: 'center',
                paddingHorizontal: totalSize(1.4),
                paddingVertical: totalSize(1),
                borderWidth: 1,
                borderColor: '#4A5458',
                borderRadius: 100,
                backgroundColor: !notificationEnable
                  ? colors.appColor1
                  : 'transparent',
              }}>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(16),
                  fontWeight: '400',
                  textAlign: 'center',
                }}>
                My Fusers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setNotificationEnable(true)}
              style={{
                //flex: 1,
                justifyContent: 'center',
                paddingHorizontal: totalSize(1.3),
                paddingVertical: totalSize(1),
                borderWidth: 1,
                borderColor: '#4A5458',
                borderRadius: 100,
                backgroundColor: notificationEnable
                  ? colors.appColor1
                  : 'transparent',
              }}>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(16),
                  fontWeight: '400',
                  textAlign: 'center',
                }}>
                Boost Profile
              </Text>
            </TouchableOpacity>
          </View>
        </Wrapper> */}

        {/* Selector Switch */}
        <Wrapper marginHorizontalBase>
          <SwitchSelector
            options={[
              {
                label: 'General',
                value: 'General',
                activeColor: colors.appColor1,
              },
              {
                label: 'Photos',
                value: 'Photos',
                activeColor: colors.appColor1,
              },
              {
                label: 'Prompts',
                value: 'Prompts',
                activeColor: colors.appColor1,
              },
            ]}
            borderColor={colors.snow}
            // borderRadius={1}
            initial={0}
            buttonMargin={4}
            style={styles.switch}
            selectedTextColor={colors.snow}
            textStyle={{color: colors.snow, fontSize: baseStyle.fontSize(16)}}
            backgroundColor={colors.appTextColor11}
            onPress={value => setMode(value)}
            textContainerStyle={{
              borderWidth: 1,
              borderColor: '#4A5458',
              borderRadius: 50,
              paddingVertical: 8,
              marginHorizontal: 5,
            }}
            selectedTextContainerStyle={{
              marginHorizontal: 5,
            }}
            selectedTextStyle={{
              color: colors.snow,
              fontSize: baseStyle.fontSize(16),
            }}
          />
        </Wrapper>

        {mode === 'General' ? (
          <GeneralSwitch />
        ) : mode === 'Photos' ? (
          <PhotosSwitch />
        ) : mode === 'Prompts' ? (
          <PromptsSwitch />
        ) : null}
      </ScrollViews.KeyboardAvoiding>
      <Spacer isDoubleBase />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  switch: {
    // borderColor: colors.snow,
    // borderWidth: 1,
    //borderRadius: totalSize(50),
  },
});

export default ProfileScreen;
