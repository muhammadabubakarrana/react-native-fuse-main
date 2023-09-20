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
import {useNavigation} from '@react-navigation/native';

export default function Settings() {
  const {navigate} = useNavigation();
  return (
    <Wrapper
      //paddingHorizontalBase
      style={{flex: 1, backgroundColor: colors.appBgColor14}}>
      <CustomStatusBar
        barStyle={'dark'}
        backgroundColor={colors.appBgColor14}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Wrapper paddingHorizontalBase>
          <Spacer isBasic />
          {/* Back */}
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
          <Text style={styles.settingTxt}>Settings</Text>
        </Wrapper>
        <Spacer isTiny />

        <TouchableLines
          onPress={() => navigate(routes.profileScreen)}
          text={'My Profile'}
        />
        <TouchableLines text={'Change Profile'} />
        <TouchableLines
          onPress={() => navigate(routes.delAccount)}
          text={'Delete Account'}
        />
        <TouchableLines
          onPress={() => navigate(routes.PauseAccount)}
          text={'Pause Account'}
        />
        <TouchableLines
          onPress={() => navigate(routes.TermsAndServices)}
          text={'Terms of Services'}
        />
        <TouchableLines
          onPress={() => navigate(routes.PrivacyPolicy)}
          text={'Privacy Policy'}
        />
        <TouchableLines
          onPress={() => navigate(routes.Notifications)}
          text={'Notifications'}
        />
        <TouchableLines
          onPress={() => navigate(routes.SwitchProfile)}
          text={'Switch to Fuser'}
        />
        <Spacer isDoubleBase />

        <Wrapper alignItemsCenter>
          <TouchableOpacity onPress={() => navigate('SignIn')}>
            <Text style={{fontSize: baseStyle.fontSize(16), color: '#3F3F46'}}>
              Logout
            </Text>
          </TouchableOpacity>
        </Wrapper>
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
