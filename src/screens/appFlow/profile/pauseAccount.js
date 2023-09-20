import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {
  Wrapper,
  CustomStatusBar,
  Text,
  Spacer,
  Buttons,
  Modals,
} from '../../../components';
import {Icon} from '@rneui/themed';
import {baseStyle, colors, fontFamily} from '../../../services';
import {totalSize} from 'react-native-dimension';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {goBack} from '../../../navigation/rootNavigation';

export default function PauseAccount() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleModal = () => {
    setIsVisible(!isVisible);
  };
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
        <Text style={styles.delText}>Pause{`\n`}Account</Text>
        <Spacer isBasic />
        <Text style={styles.para}>
          Your account will be paused and not visible to other users
        </Text>
        <Spacer isBasic />
        {/* password */}
      </Wrapper>
      {/* button */}
      <Wrapper style={styles.btn}>
        <Buttons.Colored onPress={() => toggleModal()} text={'Pause account'} />
      </Wrapper>
      <Modals.SettingsModal
        title={'Your Account is Paused'}
        visible={isVisible}
        toggle={toggleModal}
        btnText={'Restore Account'}
        onPress={toggleModal}
        notPaused
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
    fontfamily: fontFamily.appTextRegular,
  },
  btn: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
  },
});
