import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {
  Wrapper,
  CustomStatusBar,
  Text,
  Spacer,
  TouchableLines,
} from '../../../components';
import {Icon} from '@rneui/themed';
import {baseStyle, colors, routes} from '../../../services';
import {totalSize} from 'react-native-dimension';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {goBack} from '../../../navigation/rootNavigation';

export default function Notifications() {
  return (
    <Wrapper style={{flex: 1, backgroundColor: colors.appBgColor14}}>
      <CustomStatusBar barStyle={'dark'} backgroundColor={colors.appBgColor9} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Wrapper paddingHorizontalBase>
          <Spacer isBasic />
          <TouchableOpacity
            style={{
              marginVertical: baseStyle.marginVertical(10),
              backgroundColor: colors.snow,
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
            />
          </TouchableOpacity>
          <Spacer isTiny />
          <Text style={styles.settingTxt}>Notifications</Text>
        </Wrapper>
        <Spacer isTiny />
        <Spacer isBasic />

        <TouchableLines showSwitch text={'Message Alert'} />
        <TouchableLines showSwitch text={'Email Notifications'} />
        <TouchableLines showSwitch text={'In-App Notifications'} />
        <TouchableLines showSwitch text={'In-App Notifications'} />
        <TouchableLines showSwitch text={'App Updates'} />

        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
      </ScrollView>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  settingTxt: {
    fontSize: baseStyle.fontSize(42),
    fontWeight: 900,
    color: colors.black,
  },
});
