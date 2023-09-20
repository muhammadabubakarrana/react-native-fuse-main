import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {
  Wrapper,
  CustomStatusBar,
  Text,
  Spacer,
  TextInputs,
  Buttons,
  Modals,
} from '../../../components';
import {Icon} from '@rneui/themed';
import {baseStyle, colors, fontFamily, routes} from '../../../services';
import {totalSize} from 'react-native-dimension';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {goBack} from '../../../navigation/rootNavigation';
import {useNavigation} from '@react-navigation/native';

export default function DeleteAccount() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleModal = () => {
    setIsVisible(!isVisible);
  };
  const {navigate} = useNavigation();
  return (
    <Wrapper style={{flex: 1, backgroundColor: colors.appBgColor14}}>
      <CustomStatusBar barStyle={'dark'} backgroundColor={colors.appBgColor9} />

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
        {/* Texts */}
        <Text style={styles.delText}>Delete{`\n`}Account</Text>
        <Spacer isBasic />
        <Text style={styles.para}>
          You have enter the password to delete you account, and your account
          will be deleted in 7 days. In case you change your mind
        </Text>
        <Spacer isBasic />
        {/* password */}
        <TextInputs.Colored
          inputContainerStyle={{
            borderRadius: 8,
            paddingVertical: baseStyle.paddingVertical(3),
          }}
          titleStyle={[
            styles.para,
            {
              marginBottom: baseStyle.marginBottom(3),
              lineHeight: baseStyle.lineHight(22),
            },
          ]}
          title={'Password'}
          containerStyle={{marginHorizontal: 0}}
        />
      </Wrapper>
      {/* button */}
      <Wrapper style={styles.btn}>
        <Buttons.Colored onPress={toggleModal} text={'Delete Account'} />
      </Wrapper>
      <Modals.DeleteCounterModal
        visible={isVisible}
        onPress={toggleModal}
        toggle={toggleModal}
      />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  delText: {
    fontSize: baseStyle.fontSize(42),
    fontWeight: 900,
    color: colors.black,
  },
  para: {
    fontSize: baseStyle.fontSize(16),
    fontWeight: 400,
    color: colors.black,
    // fontfamily: fontFamily.appTextRegular,
  },
  btn: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
});
