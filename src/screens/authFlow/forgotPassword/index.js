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
import Modal from 'react-native-modal';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Wrapper
      isMain
      style={{flex: 1, backgroundColor: '#F8F9F9', justifyContent: 'center'}}>
      <CustomStatusBar barStyle={'dark'} backgroundColor={'#F8F9F9'} />
      <Wrapper marginHorizontalBase marginVerticalBase alignItemsCenter>
        <Text
          style={{
            fontSize: baseStyle.fontSize(30),
            fontWeight: '900',
            color: '#383838',
          }}>
          Forgot Password
        </Text>
        <Spacer isBasic />
        <Text
          style={{
            color: '#586160',
            fontSize: baseStyle.fontSize(14),
            fontWeight: '400',
            textAlign: 'center',
            lineHeight: baseStyle.fontSize(22.4),
          }}>
          Text about how you will receive email{`\n`}where you can reset your
          password
        </Text>
      </Wrapper>
      <Spacer isBasic />
      <Wrapper marginHorizontalBase>
        <Wrapper marginHorizontalLarge>
          <TextInputs.Colored
            title={'Email'}
            placeholder={''}
            containerStyle={{marginHorizontal: 0, width: '100%'}}
            inputStyle={{
              backgroundColor: '#FFF',
              borderColor: '#DEE1E1',
              borderWidth: 1,
              borderRadius: 8,
            }}
          />
          <Spacer isDoubleBase />
          <Buttons.Colored
            text="Reset Password"
            buttonStyle={{marginHorizontal: 0}}
            onPress={() => setModalVisible(true)}
          />
        </Wrapper>
        <Spacer isDoubleBase />
      </Wrapper>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('SignIn')}
        style={{position: 'absolute', left: 0, right: 0, bottom: totalSize(3)}}>
        <Text
          style={{
            color: '#6C7473',
            fontSize: baseStyle.fontSize(14),
            fontWeight: '400',
            textAlign: 'center',
          }}>
          Back To Login
        </Text>
      </TouchableOpacity>
      <Modal
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        isVisible={modalVisible}
        backdropColor={'#3F3F46B2'}
        onBackdropPress={() => {}}>
        <View
          style={{
            backgroundColor: '#FFF',
            paddingHorizontal: totalSize(6),
            paddingVertical: totalSize(4),
            borderRadius: 20,
          }}>
          <Text
            style={{
              color: '#3F3F46',
              fontSize: baseStyle.fontSize(14),
              fontWeight: '400',
              textAlign: 'center',
              lineHeight: baseStyle.fontSize(22.4),
            }}>
            Password Reset link sent on email hello@email.com, please check your
            email to reset the password
          </Text>
          <Spacer isBasic />
          <Spacer isBasic />
          <Buttons.Colored
            text="Back to Login"
            buttonStyle={{marginHorizontal: 0}}
            onPress={() => {
              setModalVisible(false);
              navigation.navigate('SignIn');
            }}
          />
        </View>
      </Modal>
    </Wrapper>
  );
};

export default ForgotPassword;
