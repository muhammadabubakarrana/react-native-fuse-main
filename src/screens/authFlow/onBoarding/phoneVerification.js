import React, {useState} from 'react';
import {View, Dimensions, TouchableOpacity, Image} from 'react-native';
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
import {baseStyle} from '../../../services';

const PhoneVerification = props => {
  const {choice} = props.route.params;
  const navigation = useNavigation();
  const [countryCode, setCountryCode] = useState('');
  const [countryFlag, setCountryFlag] = useState('🇨🇦');
  const [show, setShow] = useState(false);

  return (
    <Wrapper
      isMain
      style={{flex: 1, backgroundColor: '#F8F9F9', justifyContent: 'center'}}>
      <CustomStatusBar barStyle={'dark'} backgroundColor={'#F8F9F9'} />
      <Wrapper marginHorizontalBase>
        <ScrollViews.KeyboardAvoiding>
          <Wrapper marginHorizontalBase>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '900',
                color: '#383838',
                textAlign: 'center',
              }}>
              Enter your phone{`\n`}to verify your{`\n`}account
            </Text>
            <Spacer isBasic />
            <Spacer isBasic />
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
            <Spacer isBasic />
            <Buttons.Colored
              text="Send Verification Code"
              buttonStyle={{marginHorizontal: 0}}
              onPress={() => console.log('phoneverification')}
            />
          </Wrapper>
        </ScrollViews.KeyboardAvoiding>
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

export default PhoneVerification;
