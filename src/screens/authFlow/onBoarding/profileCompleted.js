import React, {useState, useRef} from 'react';
import {Buttons, Wrapper, Spacer, Text, StatusBars} from '../../../components';
import {Dimensions, Image, ImageBackground, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomStatusBar from '../../../components/statusBars/customStatusBar';
import {colors, baseStyle} from '../../../services';
import {totalSize} from 'react-native-dimension';

const ProfileCompleted = props => {
  const navigation = useNavigation();
  const {profileImage} = props.route.params;

  return (
    <Wrapper isMain style={{flex: 1, backgroundColor: colors.appTextColor11}}>
      {/* <CustomStatusBar barStyle={'dark'} backgroundColor={'#f8f9f9'} /> */}
      <StatusBars.Light />
      {/* Bg Image */}
      <ImageBackground
        source={
          profileImage === null
            ? require('../../../assets/images/main/profileBg.png')
            : {uri: profileImage}
        }
        resizeMode="stretch"
        style={{
          height: Dimensions.get('window').height /1.5,
          width: Dimensions.get('window').width,
          paddingTop: baseStyle.paddingTop(42),
        }}>
        <Text
          alignTextCenter
          isWhite
          style={{
            fontSize: baseStyle.fontSize(42),
            fontWeight: 900,
            opacity: 0.7,
          }}>
          Michael
        </Text>
      </ImageBackground>
      {/* <View style={{position: 'relative', alignItems: 'center'}}>
        <Image
          style={{
            height: Dimensions.get('window').height / 1.7,
            width: '100%',
            resizeMode: 'cover',
          }}
          source={
            profileImage === null
              ? require('../../../assets/images/main/profileBg.png')
              : {uri: profileImage}
          }
        />
        <Wrapper style={{position: 'absolute', top: 20}}>
          <Text
            isWhite
            style={{
              fontSize: baseStyle.fontSize(42),
              fontWeight: 900,
              opacity: 0.7,
            }}>
            Michael
          </Text>
        </Wrapper>
      </View> */}

      <Wrapper marginHorizontalLarge marginVerticalLarge>
        <Text
          style={{
            fontSize: baseStyle.fontSize(42),
            fontWeight: '900',
            color: '#FFFFFF',
            textAlign: 'left',
          }}>
          You are ready to be fused!
        </Text>
      </Wrapper>
      <Wrapper
        marginHorizontalLarge
        style={{position: 'absolute', bottom: totalSize(3), left: 0, right: 0}}>
        <Buttons.Colored
          text="Get Started"
          textStyle={{color: colors.snow}}
          onPress={() => navigation.navigate('BottomTab')}
          buttonStyle={{marginHorizontal: 0, backgroundColor: '#CA2D30'}}
        />
      </Wrapper>
    </Wrapper>
  );
};

export default ProfileCompleted;
