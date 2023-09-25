import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  Text,
  Wrapper,
  Spacer,
  Images,
  Modals,
  MyFusersList,
  Invitations,
} from '../../../components';
import CustomStatusBar from '../../../components/statusBars/customStatusBar';
import {height, totalSize, width} from 'react-native-dimension';
import {useNavigation} from '@react-navigation/native';
import {baseStyle, colors, routes, sizes} from '../../../services';
import {SvgIcons} from '../../../services/constants/svg';
import {Icon} from '@rneui/base';
import {useSelector} from 'react-redux';

const listData = [
  {
    id: '1',
    name: 'Marriam M.',
    image: require('../../../assets/images/main/user-4.png'),
  },
  {
    id: '2',
    name: 'Janna S.',
    image: require('../../../assets/images/main/user-5.png'),
  },
];
const listData1 = [
  {
    id: '3',
    name: 'Danny L.',
    image: require('../../../assets/images/main/user-6.png'),
  },
  {
    id: '4',
    name: 'Marriam M.',
    image: require('../../../assets/images/main/user-1.png'),
  },
];

function FusingMatchMakerProfileHome() {
  const {userType} = useSelector(state => state.userType);
  const {navigate} = useNavigation();
  const [notificationEnable, setNotificationEnable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Wrapper
      isMain
      paddingHorizontalBase
      style={{backgroundColor: colors.appBgColor11}}>
      <CustomStatusBar
        barStyle={'light'}
        backgroundColor={colors.appBgColor11}
      />

      <Spacer isBasic />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* settings Container */}
        <Wrapper
          marginVerticalSmall
          flexDirectionRow
          alignItemsCenter
          justifyContentSpaceBetween
          paddingHorizontalSmall
          paddingVerticalBase
          style={{
            backgroundColor: colors.appBgColor12,
            borderRadius: 24,
          }}>
          <SvgIcons.DualHeartIcon width={width(15)} height={height(5)} />
          <Wrapper>
            <Text
              style={{
                fontSize: baseStyle.fontSize(24),
                fontWeight: 900,
                color: colors.appTextColor11,
              }}>
              You are Fusing
            </Text>
            <Text
              style={{
                fontSize: baseStyle.fontSize(16),
                fontWeight: 400,
                color: colors.appTextColor11,
              }}>
              MatchMaker
            </Text>
          </Wrapper>
          <TouchableOpacity
            onPress={() => navigate(routes.settings)}
            style={{
              backgroundColor: colors.appBgColor11,
              padding: totalSize(1),
              borderRadius: 100,
            }}>
            <Icon
              type="material-community"
              name="cog-outline"
              color={'#B5C6C4'}
              size={totalSize(3.5)}
            />
          </TouchableOpacity>
        </Wrapper>
        {/* Chips*/}
        <Wrapper marginVerticalSmall>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setNotificationEnable(false)}
              style={{
                marginRight: baseStyle.marginRight(16),
                justifyContent: 'center',
                paddingHorizontal: totalSize(1.4),
                paddingVertical: totalSize(1),
                borderWidth: 1,
                borderColor: '#4A5458',
                borderRadius: 100,
                backgroundColor: !notificationEnable
                  ? colors.appColor1
                  : 'transparent',
              }}>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(16),
                  fontWeight: '400',
                  textAlign: 'center',
                }}>
                Fusing
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setNotificationEnable(true)}
              style={{
                //flex: 1,
                justifyContent: 'center',
                paddingHorizontal: totalSize(1.3),
                paddingVertical: totalSize(1),
                borderWidth: 1,
                borderColor: '#4A5458',
                borderRadius: 100,
                backgroundColor: notificationEnable
                  ? colors.appColor1
                  : 'transparent',
              }}>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(16),
                  fontWeight: '400',
                  textAlign: 'center',
                }}>
                Invitations
              </Text>
            </TouchableOpacity>
          </View>
        </Wrapper>
        {/* conditional rendering*/}
        {!notificationEnable ? (
          <Wrapper marginVerticalSmall>
            <Text
              style={{
                fontSize: baseStyle.fontSize(42),
                fontWeight: 900,
                color: colors.snow,
              }}>
              You are{`\n`}Fusing for
            </Text>
          </Wrapper>
        ) : (
          <Wrapper marginVerticalSmall>
            <Text
              style={{
                fontSize: baseStyle.fontSize(42),
                fontWeight: 900,
                color: colors.snow,
              }}>
              You are invited to fuse for
            </Text>
          </Wrapper>
        )}
        <Spacer isBasic />
        {/* Diamond */}
        {notificationEnable ? (
          <Invitations data={listData1} />
        ) : (
          <MyFusersList data={listData} onPress={toggleModal} />
        )}
      </ScrollView>
      <Spacer isDoubleBase />
      <Spacer isDoubleBase />
      <Spacer isDoubleBase />
      <Modals.SettingsModal
        textStlyle={{
          fontSize: baseStyle.fontSize(26),
          fontWeight: 800,
        }}
        visible={isVisible}
        toggle={toggleModal}
        btnText={'Cancel'}
        title={'Are you sure that you want to remove Marriam Mmarian'}
        onPress={toggleModal}
      />
    </Wrapper>
  );
}

export default FusingMatchMakerProfileHome;
