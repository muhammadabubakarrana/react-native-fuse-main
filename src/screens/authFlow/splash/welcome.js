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
} from '../../../components';
import {appStyles, colors, routes, sizes, baseStyle} from '../../../services';
import {useNavigation} from '@react-navigation/native';
import CustomStatusBar from '../../../components/statusBars/customStatusBar';
import {CountryPicker} from 'react-native-country-codes-picker';

const Welcome = () => {
  const navigation = useNavigation();
  const [countryCode, setCountryCode] = useState('');
  const [countryFlag, setCountryFlag] = useState('🇨🇦');
  const [show, setShow] = useState(false);

  return (
    <Wrapper isMain style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <CustomStatusBar barStyle={'dark'} backgroundColor={'#FFFFFF'} />
      <ScrollViews.KeyboardAvoiding>
        <Wrapper marginHorizontalBase marginVerticalBase>
          <Text
            style={{
              fontSize: baseStyle.fontSize(42),
              fontWeight: '900',
              color: '#383838',
            }}>
            Welcome to{`\n`}Fuse
          </Text>
        </Wrapper>
        <Wrapper
          style={{paddingVertical: totalSize(7)}}
          marginHorizontalBase
          marginVerticalBase
          alignItemsCenter>
          <Logos.Primary size={totalSize(12)} />
        </Wrapper>
        <Spacer isBasic />
        <Wrapper marginHorizontalBase>
          <Wrapper
            style={{marginBottom: baseStyle.marginBottom(13)}}
            marginHorizontalBase>
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
                    backgroundColor: '#FFF',
                    paddingHorizontal: totalSize(1),
                  }}
                />
              </View>
            </View>
            <Spacer isBasic />
            <Buttons.Colored
              text="Send Verification Code"
              buttonStyle={{marginHorizontal: 0}}
              onPress={() =>
                navigation.navigate('CodeVerification', {choice: 'a'})
              }
            />
            <Spacer isDoubleBase />
            <Spacer isDoubleBase />
            <Buttons.Colored
              text="Sign In"
              buttonStyle={{marginHorizontal: 0}}
              onPress={() => navigation.navigate('SignIn')}
            />
            <Spacer isBasic />
            <Buttons.Colored
              text="Create Account with the email"
              buttonStyle={{marginHorizontal: 0}}
              onPress={() => navigation.navigate('SignUp')}
            />
          </Wrapper>
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
      <CountryPicker
        show={show}
        style={{
          modal: {
            height: 500,
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
