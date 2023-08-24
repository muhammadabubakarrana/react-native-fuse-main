import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {
  Wrapper,
  CustomStatusBar,
  Text,
  Spacer,
  Lines,
  TouchableLines,
} from '../../../components';
import {Icon} from '@rneui/themed';
import {appImages, appStyles, colors, fontSize, sizes} from '../../../services';
import {totalSize, width, height} from 'react-native-dimension';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {goBack} from '../../../navigation/rootNavigation';

export default function Settings() {
  return (
    <Wrapper
      //paddingHorizontalBase
      style={{flex: 1, backgroundColor: colors.appBgColor9}}>
      <CustomStatusBar barStyle={'dark'} backgroundColor={colors.appBgColor9} />
      <Wrapper paddingHorizontalBase>
        <Spacer isTiny />
        <TouchableOpacity onPress={goBack}>
          <Wrapper alignItemsFlexStart>
            <Icon
              size={totalSize(5)}
              type="material-community"
              name="arrow-left"
            />
          </Wrapper>
        </TouchableOpacity>
        <Spacer isTiny />
        <Text isXXLTitle isExtraBold style={styles.settingTxt}>
          Settings
        </Text>
      </Wrapper>
      <Spacer isBasic />
      {/* phone input with value */}
      <Lines.Horizontal width="100%" height={0.8} />
      <Wrapper style={styles.inputContainer}>
        <Text isMedium style={styles.titleTxt}>
          Phone
        </Text>
        <TextInput
          keyboardType="phone-pad"
          style={styles.input}
          value="8745564864435"
        />
      </Wrapper>
      <Lines.Horizontal width="100%" height={0.8} />
      {/* Email input with value */}
      <Wrapper style={styles.inputContainer}>
        <Text isMedium style={styles.titleTxt}>
          Email
        </Text>
        <TextInput
          keyboardType="phone-pad"
          style={styles.input}
          value="hello@hohn.com"
        />
      </Wrapper>
      <Lines.Horizontal width="100%" height={0.8} />
      <TouchableLines text={'Delete Account'} />
      <TouchableLines text={'Pause Account'} />
      <TouchableLines text={'Terms of Services'} />
      <TouchableLines text={'Privacy Policy'} />
      <TouchableLines text={'Notifications'} />
      <TouchableLines text={'Switch to Fuser'} />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  settingTxt: {
    fontWeight: '900',
    color: colors.black,
  },
  titleTxt: {
    color: colors.black,
    marginBottom: -10,
    marginLeft: width(1),
  },
  inputContainer: {
    marginLeft: width(7),
    paddingTop: height(1.2),
  },
  input: {
    marginVertical: -3,
    fontSize: fontSize.h6,
    color: colors.black,
  },
});
