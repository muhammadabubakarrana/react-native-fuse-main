import React, {useState, useRef} from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
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
import {colors, baseStyle} from '../../../services';
import DatePicker from 'react-native-date-picker';
import {SvgIcons} from '../../../services/constants/svg';

const circleList = [1, 2, 3, 4];

const OnBoarding = props => {
  const goToGetStarted = props.route.params?.goToGetStarted;
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dateTime, setDateTime] = useState(new Date());
  const [notificationEnable, setNotificationEnable] = useState(true);
  const [userType, setUserType] = useState(null);

  const nextPageHandle = index => {
    setCurrentIndex(index);
    scrollViewRef.current?.scrollTo({
      x: Dimensions.get('window').width * index,
      animated: true,
    });
  };

  const MatchmakerCliked = () => {
    if (goToGetStarted === 'getStarted') {
      navigation.navigate('BottomTab');
    } else if (goToGetStarted === undefined) {
      navigation.navigate('PhoneVerification', {
        choice: 'matchMaker',
      });
    }
  };

  const DaterCliked = () => {
    if (goToGetStarted === 'getStarted') {
      navigation.navigate('GetStarted');
    } else if (goToGetStarted === undefined) {
      navigation.navigate('PhoneVerification', {choice: 'dater'});
    }
  };

  return (
    <Wrapper isMain style={{flex: 1, backgroundColor: '#F8F9F9'}}>
      <CustomStatusBar barStyle={'dark'} backgroundColor={'#F8F9F9'} />
      <Spacer isDoubleBase />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        {circleList?.map((val, key) => {
          return (
            <View
              key={key}
              style={{
                height: 14,
                width: 14,
                borderRadius: 100,
                backgroundColor:
                  currentIndex === key ? colors.appColor1 : '#FFF',
                borderWidth: currentIndex === key ? 0 : 1,
                borderColor: '#000000',
                marginLeft: key === 0 ? 0 : 12,
              }}></View>
          );
        })}
      </View>
      <ScrollView
        horizontal
        ref={scrollViewRef}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            width: Dimensions.get('window').width,
          }}>
          <Wrapper marginHorizontalBase marginVerticalBase alignItemsCenter>
            <Text
              style={{
                fontSize: baseStyle.fontSize(30),
                fontWeight: '900',
                color: '#383838',
                textAlign: 'center',
              }}>
              Let’s Get Started
            </Text>
            <Spacer isBasic />
            <Text
              style={{
                color: '#586160',
                fontSize: baseStyle.fontSize(14),
                fontWeight: '400',
                textAlign: 'center',
                lineHeight: 22.4,
              }}>
              This few step wizzard will help you filling{`\n`}up all
              informations needed to get started
            </Text>
          </Wrapper>
          <Spacer isBasic />
          <Wrapper marginHorizontalBase>
            <Wrapper marginHorizontalLarge>
              <TextInputs.Colored
                title={'First Name'}
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
              <TextInputs.Colored
                title={'Last Name'}
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
                text="Next"
                onPress={() => nextPageHandle(1)}
                buttonStyle={{marginHorizontal: 0}}
              />
            </Wrapper>
            <Spacer isDoubleBase />
          </Wrapper>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            width: Dimensions.get('window').width,
          }}>
          <Wrapper marginHorizontalBase marginVerticalBase alignItemsCenter>
            <Text
              style={{
                fontSize: baseStyle.fontSize(30),
                fontWeight: '900',
                color: '#383838',
                textAlign: 'center',
              }}>
              What’s your date{`\n`}of birth
            </Text>
            <Spacer isBasic />
            <Text
              style={{
                color: '#586160',
                fontSize: baseStyle.fontSize(14),
                fontWeight: '400',
                textAlign: 'center',
                lineHeight: 22.4,
              }}>
              This info can’t be change later
            </Text>
          </Wrapper>
          <Spacer isBasic />
          <Wrapper alignItemsCenter style={{backgroundColor: '#FFF'}}>
            <DatePicker
              theme={'light'}
              mode={'date'}
              date={dateTime}
              onDateChange={time => {
                setDateTime(time);
              }}
            />
          </Wrapper>
          <Spacer isDoubleBase />
          <Wrapper marginHorizontalBase>
            <Wrapper marginHorizontalBase style={{flexDirection: 'row'}}>
              <View style={{flex: 1, justifyContent: 'center', marginRight: 6}}>
                <Buttons.Colored
                  text="Back"
                  onPress={() => nextPageHandle(0)}
                  textStyle={{color: '#586160'}}
                  buttonStyle={{
                    marginHorizontal: 0,
                    backgroundColor: '#E7E9E9',
                    borderWidth: 0,
                  }}
                />
              </View>
              <View style={{flex: 1, justifyContent: 'center', marginLeft: 6}}>
                <Buttons.Colored
                  text="Next"
                  onPress={() => nextPageHandle(2)}
                  buttonStyle={{marginHorizontal: 0}}
                />
              </View>
            </Wrapper>
            <Spacer isDoubleBase />
          </Wrapper>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            width: Dimensions.get('window').width,
          }}>
          <Wrapper marginHorizontalBase marginVerticalBase alignItemsCenter>
            <Text
              style={{
                fontSize: baseStyle.fontSize(30),
                fontWeight: '900',
                color: '#383838',
                textAlign: 'center',
              }}>
              Never miss a{`\n`}message
            </Text>
          </Wrapper>
          <Spacer isBasic />
          <Wrapper marginHorizontalBase>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: '#E6E9E9',
                borderRadius: 100,
              }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setNotificationEnable(false)}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  paddingHorizontal: totalSize(1),
                  paddingVertical: totalSize(1.4),
                  borderRadius: 100,
                  backgroundColor: !notificationEnable
                    ? colors.appColor1
                    : 'transparent',
                }}>
                <Text
                  style={{
                    color: !notificationEnable ? '#FFF' : '#000000',
                    fontSize: baseStyle.fontSize(14),
                    fontWeight: '400',
                    textAlign: 'center',
                  }}>
                  Disable Notifications
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setNotificationEnable(true)}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  paddingHorizontal: totalSize(1),
                  paddingVertical: totalSize(1.4),
                  borderRadius: 100,
                  backgroundColor: notificationEnable
                    ? colors.appColor1
                    : 'transparent',
                }}>
                <Text
                  style={{
                    color: notificationEnable ? '#FFF' : '#000000',
                    fontSize: baseStyle.fontSize(14),
                    fontWeight: '400',
                    textAlign: 'center',
                  }}>
                  Enable Notifications
                </Text>
              </TouchableOpacity>
            </View>
            <Spacer isDoubleBase />
            <Spacer isDoubleBase />
            <Spacer isDoubleBase />
            <Spacer isDoubleBase />
            <Spacer isDoubleBase />
            <Wrapper marginHorizontalBase style={{flexDirection: 'row'}}>
              <View style={{flex: 1, justifyContent: 'center', marginRight: 6}}>
                <Buttons.Colored
                  text="Back"
                  onPress={() => nextPageHandle(1)}
                  textStyle={{color: '#586160'}}
                  buttonStyle={{
                    marginHorizontal: 0,
                    backgroundColor: '#E7E9E9',
                    borderWidth: 0,
                  }}
                />
              </View>
              <View style={{flex: 1, justifyContent: 'center', marginLeft: 6}}>
                <Buttons.Colored
                  text="Next"
                  onPress={() => nextPageHandle(3)}
                  buttonStyle={{marginHorizontal: 0}}
                />
              </View>
            </Wrapper>
            <Spacer isDoubleBase />
          </Wrapper>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            width: Dimensions.get('window').width,
          }}>
          <Wrapper marginHorizontalBase marginVerticalBase alignItemsCenter>
            <Text
              style={{
                fontSize: baseStyle.fontSize(30),
                fontWeight: '900',
                color: '#383838',
                textAlign: 'center',
              }}>
              Are you Dater or Matchmaker
            </Text>
          </Wrapper>
          <Spacer isBasic />
          <Wrapper marginHorizontalLarge>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setUserType(0);
                  // navigation.navigate('PhoneVerification', {
                  //   choice: 'matchMaker',
                  // });
                  MatchmakerCliked();
                }}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  paddingHorizontal: totalSize(1),
                  height: 153,
                  marginRight: 8,
                  borderWidth: userType === 0 ? 0 : 1,
                  borderColor: '#E6E9E9',
                  alignItems: 'center',
                  borderRadius: 10,
                  backgroundColor:
                    userType === 0 ? colors.appColor1 : 'transparent',
                }}>
                <SvgIcons.DualHeartIcon
                  fillColor={userType === 0 ? '#F8F9F9' : '#3F3F46'}
                />
                <Spacer isBasic />
                <Text
                  style={{
                    color: userType === 0 ? '#FFF' : '#000000',
                    fontSize: baseStyle.fontSize(14),
                    fontWeight: '400',
                    textAlign: 'center',
                  }}>
                  Fusing{`\n`}Matchmaker
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setUserType(1);
                  DaterCliked();
                  // navigation.navigate('PhoneVerification', {choice: 'dater'});
                }}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  paddingHorizontal: totalSize(1),
                  height: 153,
                  marginLeft: 8,
                  borderWidth: userType === 1 ? 0 : 1,
                  borderColor: '#E6E9E9',
                  alignItems: 'center',
                  borderRadius: 10,
                  backgroundColor:
                    userType === 1 ? colors.appColor1 : 'transparent',
                }}>
                <SvgIcons.HeartIcon
                  fillColor={userType === 1 ? '#F8F9F9' : '#3F3F46'}
                />
                <Spacer isBasic />
                <Text
                  style={{
                    color: userType === 1 ? '#FFF' : '#000000',
                    fontSize: baseStyle.fontSize(14),
                    fontWeight: '400',
                    textAlign: 'center',
                  }}>
                  Getting fused{`\n`}Dater
                </Text>
              </TouchableOpacity>
            </View>
            <Spacer isDoubleBase />
            <Spacer isDoubleBase />
            <Wrapper marginHorizontalLarge>
              <Wrapper marginHorizontalLarge style={{flexDirection: 'row'}}>
                <View
                  style={{flex: 1, justifyContent: 'center', marginRight: 6}}>
                  <Buttons.Colored
                    text="Back"
                    onPress={() => nextPageHandle(2)}
                    textStyle={{color: '#586160'}}
                    buttonStyle={{
                      marginHorizontal: 0,
                      backgroundColor: '#E7E9E9',
                      borderWidth: 0,
                    }}
                  />
                </View>
              </Wrapper>
            </Wrapper>
            <Spacer isDoubleBase />
          </Wrapper>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default OnBoarding;
