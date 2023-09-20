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
import {appStyles, baseStyle, colors, routes, sizes} from '../../../services';
import {useNavigation} from '@react-navigation/native';
import CustomStatusBar from '../../../components/statusBars/customStatusBar';
import {SvgIcons} from '../../../services/constants/svg';
import {Icon} from '@rneui/base';
import {goBack} from '../../../navigation/rootNavigation';
import useKeyboard from '../../../services/hooks/useKeyboard';

const Signin = () => {
  const navigation = useNavigation();
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const keyboardVisible = useKeyboard();

  return (
    <Wrapper
      isMain
      style={{
        backgroundColor: colors.appBgColor14,
      }}>
      <CustomStatusBar
        barStyle={'dark'}
        backgroundColor={colors.appBgColor14}
      />
      <ScrollViews.KeyboardAvoiding>
        <TouchableOpacity
          style={{
            // marginVertical: baseStyle.marginVertical(10),
            backgroundColor: colors.snow,
            borderRadius: 100,
            alignItems: 'center',
            width: 45,
            height: 45,
            justifyContent: 'center',
            position: 'absolute',
            top: 20,
            left: 15,
          }}
          onPress={goBack}>
          <Icon
            size={totalSize(3.5)}
            type="material-icons"
            name="keyboard-backspace"
          />
        </TouchableOpacity>
        <Spacer isDoubleBase />
        <View
          style={
            {
              //  height: Dimensions.get('window').height,
              //  justifyContent: 'center',
            }
          }>
          <Wrapper marginHorizontalBase marginVerticalBase alignItemsCenter>
            <Text
              style={{
                fontSize: baseStyle.fontSize(42),
                fontWeight: '900',
                color: '#383838',
              }}>
              Sign In
            </Text>
            <Spacer isBasic />
            <Text
              style={{
                color: '#383838',
                fontSize: baseStyle.fontSize(16),
                fontWeight: '400',
                textAlign: 'center',
                lineHeight: baseStyle.lineHight(22.4),
              }}>
              Some sort of wellcome message{`\n`}explaing app in few lines
            </Text>
          </Wrapper>
          <Spacer isBasic />
          <Wrapper marginHorizontalMedium>
            <TextInputs.Colored
              title={'Email'}
              titleStyle={{
                fontSize: baseStyle.fontSize(16),
                fontWeight: '400',
                lineHeight: baseStyle.lineHight(22),
                color: '#383838',
              }}
              placeholder={'hello@inkyy.com'}
              placeholderTextColor={'#383838'}
              containerStyle={{marginHorizontal: 0, width: '100%'}}
              inputContainerStyle={{backgroundColor: '#FFF', borderRadius: 8}}
            />
            <Spacer isBasic />

            <TextInputs.Colored
              title={'Password'}
              titleStyle={{
                fontSize: baseStyle.fontSize(16),
                fontWeight: '400',
                lineHeight: baseStyle.lineHight(22),
                color: '#383838',
              }}
              placeholder={''}
              containerStyle={{
                marginHorizontal: 0,
                width: '100%',
              }}
              secureTextEntry={!isPasswordVisible}
              iconNameRight={isPasswordVisible ? 'eye' : 'eye-off'}
              iconTypeRight={'feather'}
              onPressIconRight={() => setPasswordVisibility(!isPasswordVisible)}
              inputContainerStyle={{backgroundColor: '#FFF', borderRadius: 8}}
            />

            <Spacer isBasic />
            <Text
              onPress={() => navigation.navigate('ForgotPassword')}
              style={{
                fontSize: baseStyle.fontSize(16),
                fontWeight: '400',
                textAlign: 'left',
                lineHeight: baseStyle.lineHight(22),
                color: '#383838',
              }}>
              Forgot password?
            </Text>
            <Spacer isBasic />
            <Buttons.Colored
              text="Sign In"
              buttonStyle={{marginHorizontal: 0}}
              onPress={() => navigation.navigate('BottomTab')}
            />

            <Spacer isDoubleBase />
            {/* Google */}
            <TouchableOpacity
              // activeOpacity={0.7}
              onPress={() => {}}
              style={{
                marginVertical: baseStyle.marginVertical(5),
                alignItems: 'center',

                justifyContent: 'space-around',

                backgroundColor: '#FFF',
                borderRadius: 8,

                paddingVertical: 13,
              }}>
              <Wrapper flexDirectionRow alignItemsCenter>
                <SvgIcons.GoogleIcon />

                <Text
                  style={{
                    fontSize: baseStyle.fontSize(16),
                    fontWeight: '400',
                    color: colors.black,
                    marginLeft: baseStyle.marginLeft(12),
                  }}>
                  Sign In with Google
                </Text>
              </Wrapper>
            </TouchableOpacity>
            <Spacer isDoubleBase />
            <Spacer isDoubleBase />

            {/* sign UP */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('SignUp')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                // position: 'absolute',
                // left: 0,
                // right: 0,
                bottom: totalSize(2),
              }}>
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{
                    color: colors.black,
                    fontSize: baseStyle.fontSize(16),
                    fontWeight: '400',
                  }}>
                  Don’t have account?
                </Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{
                    color: colors.black,
                    fontSize: baseStyle.fontSize(16),
                    fontWeight: '800',
                  }}>
                  {' Create Account'}
                </Text>
              </View>
            </TouchableOpacity>
          </Wrapper>
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
                <Text style={{color: '#383838'}}>
                  Already have an account?{' '}
                </Text>
                <Text style={{fontWeight: '800', color: '#383838'}}>
                  {'  Sign In'}
                </Text>
              </Text>
            </Wrapper>
          )} */}
        </View>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
};

export default Signin;
