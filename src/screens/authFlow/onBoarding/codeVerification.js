import React, {useState, useRef} from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import {totalSize} from 'react-native-dimension';
import {
  Logos,
  Toasts,
  Icons,
  TextInputs,
  Buttons,
  ScrollViews,
  Wrapper,
  Spacer,
  Text,
} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import CustomStatusBar from '../../../components/statusBars/customStatusBar';
import {CountryPicker} from 'react-native-country-codes-picker';
import {baseStyle, fontFamily} from '../../../services';

const CodeVerification = props => {
  const {choice} = props.route.params;
  const navigation = useNavigation();
  const [countryCode, setCountryCode] = useState('');
  const [countryFlag, setCountryFlag] = useState('🇨🇦');
  const [show, setShow] = useState(false);
  const input_1 = useRef(null);
  const input_2 = useRef(null);
  const input_3 = useRef(null);
  const input_4 = useRef(null);
  const input_5 = useRef(null);
  const input_6 = useRef(null);
  const [codeOne, setCodeOne] = useState('');
  const [codeTwo, setCodeTwo] = useState('');
  const [codeThree, setCodeThree] = useState('');
  const [codeFour, setCodeFour] = useState('');
  const [codeFive, setCodeFive] = useState('');
  const [codeSix, setCodeSix] = useState('');

  const navigateToSpecificScreen = () => {
    if (choice === 'matchMaker') {
      navigation.navigate('BottomTab');
    } else if (choice === 'dater') {
      navigation.navigate('GetStarted');
    } else if (choice === 'a') {
      navigation.navigate('OnBoarding', {goToGetStarted: 'getStarted'});
    }
  };

  return (
    <Wrapper
      isMain
      style={{
        flex: 1,
        backgroundColor: '#F8F9F9',
        justifyContent: 'center',
        // alignItems: 'center',
      }}>
      <CustomStatusBar barStyle={'dark'} backgroundColor={'#F8F9F9'} />
      <Wrapper marginHorizontalBase>
        <Wrapper marginHorizontalBase alignItemsCenter>
          <Text
            style={{
              color: '#586160',
              fontSize: baseStyle.fontSize(14),
              fontWeight: '400',
              textAlign: 'center',
              lineHeight: 22.4,
            }}>
            Check your mss we have sent you{`\n`}verification code
          </Text>
          <Spacer isBasic />
          <Text
            style={{
              fontSize: baseStyle.fontSize(30),
              fontWeight: '900',
              color: '#383838',
              textAlign: 'center',
            }}>
            Enter Verification{`\n`}Code
          </Text>
          <Spacer isBasic />
          <Spacer isBasic />
          <View
            style={{
              flexDirection: 'row',
              borderColor: '#DEE1E1',
              borderWidth: 1,
              borderRadius: 8,
              paddingVertical: totalSize(1),
              paddingHorizontal: totalSize(1.4),
            }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setShow(!show)}
              style={{
                justifyContent: 'center',
                borderRightColor: '#DEE1E1',
                borderRightWidth: 1,
                paddingRight: totalSize(1),
              }}>
              <Text style={{fontSize: baseStyle.fontSize(20)}}>
                {countryFlag}
              </Text>
            </TouchableOpacity>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <TextInputs.Colored
                placeholder={'(706) 941-6346'}
                containerStyle={{marginHorizontal: 0}}
                inputStyle={{
                  padding: 0,
                  height: 'auto',
                  paddingHorizontal: totalSize(1),
                }}
              />
            </View>
          </View>
          <Spacer isBasic />
          <Text
            onPress={() => console.log('PRESS')}
            style={{
              fontSize: baseStyle.fontSize(14),
              fontWeight: '400',
              textAlign: 'center',
            }}>
            <Text style={{color: '#586160'}}>Didn’t get it?</Text>
            <Text style={{color: '#383838'}}>{' Resend Code'}</Text>
          </Text>
          <Spacer isDoubleBase />
          <Wrapper flexDirectionRow justifyContentCenter alignItemsCenter>
            <TextInput
              ref={input_1}
              maxLength={1}
              keyboardType={'number-pad'}
              value={codeOne}
              style={[styles.inputStyle, {marginLeft: 0}]}
              onChangeText={val => {
                setCodeOne(val);
                if (val != '') input_2.current.focus();
              }}
            />
            <TextInput
              ref={input_2}
              maxLength={1}
              keyboardType={'number-pad'}
              value={codeTwo}
              style={styles.inputStyle}
              onChangeText={val => {
                setCodeTwo(val);
                if (val != '') input_3.current.focus();
              }}
            />
            <TextInput
              ref={input_3}
              maxLength={1}
              keyboardType={'number-pad'}
              value={codeThree}
              style={styles.inputStyle}
              onChangeText={val => {
                setCodeThree(val);
                if (val != '') input_4.current.focus();
              }}
            />
            <TextInput
              ref={input_4}
              maxLength={1}
              keyboardType={'number-pad'}
              value={codeFour}
              style={styles.inputStyle}
              onChangeText={val => {
                setCodeFour(val);
                if (val != '') input_5.current.focus();
              }}
            />
            <TextInput
              ref={input_5}
              maxLength={1}
              keyboardType={'number-pad'}
              value={codeFive}
              style={styles.inputStyle}
              onChangeText={val => {
                setCodeFive(val);
                if (val != '') input_6.current.focus();
              }}
            />
            <TextInput
              ref={input_6}
              maxLength={1}
              keyboardType={'number-pad'}
              value={codeSix}
              style={styles.inputStyle}
              onChangeText={val => {
                setCodeSix(val);
              }}
            />
          </Wrapper>
          <Spacer isDoubleBase />
          <View style={{width: '100%'}}>
            <Buttons.Colored
              text="Confirm Code"
              buttonStyle={{marginHorizontal: 0}}
              onPress={navigateToSpecificScreen}
            />
          </View>
        </Wrapper>
      </Wrapper>
      <CountryPicker
        show={show}
        style={{
          modal: {
            height: baseStyle.height(350),
          },
        }}
        onBackdropPress={() => setShow(false)}
        pickerButtonOnPress={item => {
          console.log('item =====> ', item);
          setCountryCode(item.dial_code);
          setCountryFlag(item.flag);
          setShow(false);
        }}
      />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000000',
    fontFamily: fontFamily.appTextRegular,
    fontWeight: '400',
    fontSize: baseStyle.fontSize(14),
    marginLeft: totalSize(0.8),
    textAlign: 'center',
    width: baseStyle.width(48),
    height: baseStyle.height(52),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DEE1E1',
    borderRadius: 8,
  },
});

export default CodeVerification;
