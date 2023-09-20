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
import CheckBox from '@react-native-community/checkbox';
import {Icon} from '@rneui/base';
import {goBack} from '../../../navigation/rootNavigation';

const Signup = () => {
  const navigation = useNavigation();
  const [securePassword, setSecurePassword] = useState(false);
  const [secureRepeatPassword, setSecureRepeatPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Wrapper
      isMain
      style={{
        flex: 1,
        backgroundColor: colors.appBgColor14,
        // justifyContent: 'center',
      }}>
      <CustomStatusBar barStyle={'dark'} backgroundColor={ colors.appBgColor14} />
      <ScrollViews.KeyboardAvoiding>
        <TouchableOpacity
          style={{
            marginVertical: baseStyle.marginVertical(10),
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
              //height: Dimensions.get('window').height,
              // justifyContent: 'center',
            }
          }>
          <Wrapper marginHorizontalBase marginVerticalBase alignItemsCenter>
            <Text style={{fontSize: 30, fontWeight: '900', color: '#383838'}}>
              Sign Up
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
            <Wrapper>
              <TextInputs.Colored
                title={'Email'}
                titleStyle={{
                  fontSize: baseStyle.fontSize(14),
                  fontWeight: '400',
                  lineHeight: baseStyle.lineHight(16.94),
                  color: '#383838',
                }}
                placeholder={''}
                containerStyle={{marginHorizontal: 0, width: '100%'}}
                inputStyle={{
                  backgroundColor: '#FFF',
                  borderColor: '#DEE1E1',
                  borderWidth: 1,
                  borderRadius: 8,
                }}
              />
              <Spacer isBasic />
              <View style={{position: 'relative'}}>
                <TextInputs.Colored
                  titleStyle={{
                    fontSize: baseStyle.fontSize(14),
                    fontWeight: '400',
                    lineHeight: baseStyle.lineHight(16.94),
                    color: '#383838',
                  }}
                  title={'Password'}
                  placeholder={''}
                  secureTextEntry={!securePassword}
                  containerStyle={{marginHorizontal: 0, width: '100%'}}
                  inputStyle={{
                    backgroundColor: '#FFF',
                    borderColor: '#DEE1E1',
                    borderWidth: 1,
                    borderRadius: 8,
                  }}
                />
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setSecurePassword(!securePassword)}
                  style={{
                    position: 'absolute',
                    zIndex: 99999,
                    right: 0,
                    top: 21,
                    bottom: 0,
                    justifyContent: 'center',
                    paddingHorizontal: 12,
                  }}>
                  {securePassword ? (
                    <SvgIcons.EyeHideIcon />
                  ) : (
                    <SvgIcons.EyeShowIcon />
                  )}
                </TouchableOpacity>
              </View>
              <Spacer isBasic />
              <View style={{position: 'relative'}}>
                <TextInputs.Colored
                  placeholder={''}
                  titleStyle={{
                    fontSize: baseStyle.fontSize(14),
                    fontWeight: '400',
                    lineHeight: baseStyle.lineHight(16.94),
                    color: '#383838',
                  }}
                  title={'Repeat Password'}
                  secureTextEntry={!secureRepeatPassword}
                  containerStyle={{marginHorizontal: 0, width: '100%'}}
                  inputStyle={{
                    backgroundColor: '#FFF',
                    borderColor: '#DEE1E1',
                    borderWidth: 1,
                    borderRadius: 8,
                  }}
                />
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setSecureRepeatPassword(!secureRepeatPassword)}
                  style={{
                    position: 'absolute',
                    zIndex: 99999,
                    right: 0,
                    top: 21,
                    bottom: 0,
                    justifyContent: 'center',
                    paddingHorizontal: 12,
                  }}>
                  {secureRepeatPassword ? (
                    <SvgIcons.EyeHideIcon />
                  ) : (
                    <SvgIcons.EyeShowIcon />
                  )}
                </TouchableOpacity>
              </View>
              <Spacer isBasic />
              <TouchableOpacity
                activeOpacity={0.7}
                style={{flexDirection: 'row'}}
                onPress={() => setIsChecked(!isChecked)}>
                <View style={{marginRight: 6}}>
                  <CheckBox
                    disabled={false}
                    value={isChecked}
                    onValueChange={() => setIsChecked(!isChecked)}
                  />
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text
                    style={{
                      fontSize: baseStyle.fontSize(14),
                      fontWeight: '400',
                      color: '#383838',
                      lineHeight: baseStyle.lineHight(22.4),
                    }}>
                    By sign up i accept fuse terms of service and privacy policy
                  </Text>
                </View>
              </TouchableOpacity>
              <Spacer isBasic />
              <Buttons.Colored
                text="Create Account"
                buttonStyle={{marginHorizontal: 0}}
                onPress={() => navigation.navigate('OnBoarding')}
              />
              <Spacer isBasic />
              <Spacer isDoubleBase />
              <TouchableOpacity
                // activeOpacity={0.7}
                onPress={() => {}}
                style={{
                  //   flex: 1,

                  alignItems: 'center',
                  //   marginRight: 6,
                  justifyContent: 'space-around',
                  //   borderColor: '#DEE1E1',
                  //   borderWidth: 1,
                  backgroundColor: '#FFF',
                  borderRadius: 8,
                  //   paddingHorizontal: 12,
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
                    Sign Up with Google
                  </Text>
                </Wrapper>
              </TouchableOpacity>
            </Wrapper>
            <Spacer isDoubleBase />
            <Spacer isDoubleBase />

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('SignIn')}
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
                  Already have account?
                </Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{
                    color: colors.black,
                    fontSize: baseStyle.fontSize(16),
                    fontWeight: '800',
                  }}>
                  {' Login here'}
                </Text>
              </View>
            </TouchableOpacity>
          </Wrapper>
        </View>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
};

export default Signup;
