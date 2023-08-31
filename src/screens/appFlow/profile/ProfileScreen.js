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
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
//import {useNavigation} from '@react-navigation/native';
import {
  appIcons,
  appImages,
  appStyles,
  appSvgs,
  colors,
  sizes,
} from '../../../services';
import {totalSize, height, width} from 'react-native-dimension';
import {CustomHeader} from '../../../components/headers/customHeader';
import {Icon} from '@rneui/themed';
import SwitchSelector from 'react-native-switch-selector';
import {goBack} from '../../../navigation/rootNavigation';

const ProfileScreen = () => {
  // const navigation = useNavigation();
  // const {profileImage} = props.route.params;
  const profileImage = appImages.RectangleNine;
  const [mode, setMode] = useState('General');

  return (
    <Wrapper isMain style={{flex: 1, backgroundColor: colors.appBgColor9}}>
      <CustomStatusBar barStyle={'dark'} backgroundColor={'#FFFFFF'} />
      <StatusBars.Dark />
      <ScrollViews.KeyboardAvoiding>
        <View style={{position: 'relative', alignItems: 'center'}}>
          <ImageBackground
            style={{height: height(27), width: '100%', resizeMode: 'cover'}}
            source={appImages.EllipseRed}>
            <Wrapper
              style={{}}
              marginVerticalBase
              marginHorizontalBase
              flexDirectionRow
              alignItemsCenter
              justifyContentSpaceBetween>
              <TouchableOpacity onPress={goBack}>
                <Icon
                  size={totalSize(5)}
                  type="material-community"
                  name="arrow-left"
                  color={colors.snow}
                />
              </TouchableOpacity>
              <Image source={appImages.SquareStar} resizeMode="contain" />
            </Wrapper>
          </ImageBackground>
          <View style={{position: 'absolute', bottom: -60}}>
            <View
              style={{
                height: 180,
                width: 180,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8f9f9',
              }}>
              <Image
                source={
                  profileImage === null
                    ? appImages.China
                    : {uri: appImages.user5}
                }
                style={{
                  height: 150,
                  width: 150,
                  borderRadius: 100,
                  resizeMode: 'cover',
                }}
              />
            </View>
          </View>
        </View>
        <Spacer isDoubleBase />
        <Spacer isBasic />
        {/* Profile Name */}
        <Wrapper marginHorizontalBase marginVerticalBase>
          <Text isTinyTitle style={{color: colors.black}} alignTextCenter>
            Amy Willison
          </Text>
        </Wrapper>
        <Spacer isTiny />
        {/* Selector Switch */}
        <Wrapper marginHorizontalBase>
          <SwitchSelector
            options={[
              {
                label: 'General',
                value: 'General',
                activeColor: colors.appTextColor10,
              },
              {
                label: 'Photos',
                value: 'Photos',
                activeColor: colors.appTextColor10,
              },
              {
                label: 'Prompts',
                value: 'Prompts',
                activeColor: colors.appTextColor10,
              },
            ]}
            initial={0}
            style={styles.switch}
            selectedTextColor={colors.snow}
            textStyle={[appStyles.textLarge, {color: colors.black}]}
            backgroundColor={colors.snow}
            onPress={value => setMode(value)}
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
      <Spacer isDoubleBase />
      <Spacer isDoubleBase />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  switch: {
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: totalSize(50),
  },
});

export default ProfileScreen;
