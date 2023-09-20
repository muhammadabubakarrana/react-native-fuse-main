import React, {useState} from 'react';
import {View, Dimensions, TouchableOpacity, Image} from 'react-native';
import {totalSize, width, height} from 'react-native-dimension';
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
  Images,
} from '../../../components';
import {appStyles, colors, routes, sizes, baseStyle} from '../../../services';
import {useNavigation} from '@react-navigation/native';
import CustomStatusBar from '../../../components/statusBars/customStatusBar';
import {CountryPicker} from 'react-native-country-codes-picker';
import useKeyboard from '../../../services/hooks/useKeyboard';

const Welcome = () => {
  const navigation = useNavigation();
  const [countryCode, setCountryCode] = useState('');
  const [countryFlag, setCountryFlag] = useState('🇨🇦');
  const [show, setShow] = useState(false);
  const keyboardVisible = useKeyboard();

  return (
    <Wrapper isMain style={{flex: 1, backgroundColor: colors.appBgColor14}}>
      <CustomStatusBar
        barStyle={'dark'}
        backgroundColor={colors.appBgColor14}
      />
      <ScrollViews.KeyboardAvoiding style={{flex: 1}}>
        <Spacer isDoubleBase />
        <Wrapper
          justifyContentSpaceEvenly
          marginHorizontalBase
          marginVerticalBase
          // justifyContentCenter
          flex={1}>
          <Wrapper>
            <Text
              style={{
                fontSize: baseStyle.fontSize(42),
                fontWeight: '900',
                color: '#383838',
                textAlign: 'center',
              }}>
              Welcome{`\n`}to Fuse
            </Text>
          </Wrapper>
          <Spacer isDoubleBase />
          <Wrapper marginVerticalLarge alignItemsCenter>
            <Logos.Primary size={totalSize(18)} />
          </Wrapper>
          <Spacer isDoubleBase />

          <Wrapper marginHorizontalBase>
            {/* Text input */}
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#FFF',
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
                <Text style={{fontSize: 20}}>{countryFlag}</Text>
              </TouchableOpacity>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <TextInputs.Colored
                  placeholder={'(706) 941-6346'}
                  containerStyle={{marginHorizontal: 0}}
                  inputStyle={{
                    padding: 0,
                    height: 'auto',
                    backgroundColor: '#FFF',
                    paddingHorizontal: totalSize(1),
                  }}
                />
              </View>
            </View>
            <Spacer isBasic />
            {/* button */}
            <Buttons.Colored
              text="Sign Up"
              buttonStyle={{marginHorizontal: 0}}
              onPress={() => navigation.navigate('CodeVerification')}
            />
            <Spacer isBasic />
            {/* TExt */}
            <Text
              onPress={() => navigation.navigate('SignUp')}
              style={{
                color: '#383838',
                fontSize: baseStyle.fontSize(16),
                fontWeight: '400',
                textAlign: 'center',
                lineHeight: baseStyle.lineHight(22.4),
              }}>
              Create Account with the email
            </Text>
          </Wrapper>
          {/* sign in */}
          <Spacer isDoubleBase />
          <Spacer isDoubleBase />
          <Spacer isDoubleBase />
          <Wrapper>
            <Text
              onPress={() => navigation.navigate('SignIn')}
              style={{
                fontSize: baseStyle.fontSize(14),
                fontWeight: '400',
                textAlign: 'center',
                lineHeight: baseStyle.lineHight(22.4),
              }}>
              <Text style={{color: '#383838'}}>Already have an account? </Text>
              <Text style={{fontWeight: '800', color: '#383838'}}>
                {'  Sign In'}
              </Text>
            </Text>
          </Wrapper>
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
      {/* {keyboardVisible ? null : (
        <Wrapper>
          <Text
            onPress={() => navigation.navigate('SignIn')}
            style={{
              fontSize: baseStyle.fontSize(14),
              fontWeight: '400',
              textAlign: 'center',
              lineHeight: baseStyle.lineHight(22.4),
            }}>
            <Text style={{color: '#383838'}}>Already have an account? </Text>
            <Text style={{fontWeight: '800', color: '#383838'}}>
              {'  Sign In'}
            </Text>
          </Text>
        </Wrapper>
      )} */}
      <Spacer isBasic />
      <CountryPicker
        show={show}
        style={{
          modal: {
            height: height(50),
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

export default Welcome;
