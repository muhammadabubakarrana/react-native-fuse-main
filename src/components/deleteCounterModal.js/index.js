import React, {useRef} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Wrapper, Text, Spacer, Buttons} from '../../components';
import {Icon} from '@rneui/themed';
import {totalSize} from 'react-native-dimension';
import { baseStyle, colors, fontFamily } from '../../services';
//import {goBack} from '../../../navigation/rootNavigation';
//import CountDown from 'react-native-countdown-component';

export default function DeleteCounterModal({onPress, toggleModal}) {
  return (
    <Wrapper
      style={{
        //  justifyContent: 'center',
        //height: Dimensions.get('window').height / 2,
        backgroundColor: colors.appBgColor14,
      }}>
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
          onPress={toggleModal}>
          <Icon
            size={totalSize(3.5)}
            type="material-icons"
            name="keyboard-backspace"
          />
        </TouchableOpacity>
        <Spacer isTiny />

        <Text style={styles.delText}>Delete{`\n`}Account</Text>
        <Spacer isBasic />
        <Text style={styles.para}>Your account will be deleted in:</Text>
        <Spacer isBasic />
        {/* <CountDown
          until={604800} // 7 days in seconds
          size={30}
          digitStyle={{backgroundColor: colors.appTextColor9}}
          digitTxtStyle={{
            color: colors.snow,
            fontSize: baseStyle.fontSize(20),
            fontFamily: fontFamily.appTextRegular,
          }}
          timeToShow={['D', 'H', 'M', 'S']} // Display days, hours, minutes, and seconds
          timeLabels={{d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds'}}
        /> */}
        <Spacer isBasic />
      </Wrapper>
      {/* button */}

      <Buttons.Colored
        buttonStyle={{backgroundColor: colors.appTextColor9}}
        onPress={onPress}
        text={'Cancel'}
      />
      <Spacer isBasic />
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
});
