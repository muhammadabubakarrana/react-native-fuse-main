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
  Lines,
} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import CustomStatusBar from '../../../components/statusBars/customStatusBar';
import {colors, baseStyle} from '../../../services';
import DatePicker from 'react-native-date-picker';
import {SvgIcons} from '../../../services/constants/svg';
import {useDispatch, useSelector} from 'react-redux';
import {setUserType} from '../../../services/redux/slices/userType';
import {Icon} from '@rneui/base';
import {goBack} from '../../../navigation/rootNavigation';

const circleList = [1, 2, 3, 4];

const OnBoarding = props => {
  const {userType} = useSelector(state => state.userType);
  const dispatch = useDispatch();
  const goToGetStarted = props.route.params?.goToGetStarted;
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dateTime, setDateTime] = useState(new Date());
  const [activeTab, setActivetab] = useState(0);
  const [user, setUser] = useState(1);

  const nextPageHandle = index => {
    setCurrentIndex(index);
    scrollViewRef.current?.scrollTo({
      x: Dimensions.get('window').width * index,
      animated: true,
    });
  };

  const MatchmakerCliked = () => {
    dispatch(setUserType('FusingMatchMaker'));

    navigation.navigate('BottomTab');
  };

  const DaterCliked = () => {
    dispatch(setUserType('GettingFusedDater'));

    navigation.navigate('GetStarted');
  };

  return (
    <Wrapper isMain style={{flex: 1, backgroundColor: colors.appTextColor11}}>
      <CustomStatusBar
        barStyle={'dark'}
        backgroundColor={colors.appTextColor11}
      />
      <Spacer isDoubleBase />
      <View>
        <Lines.Horizontal
          color={'#4A5458'}
          style={{alignSelf: 'center'}}
          width={'90%'}
        />
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          {circleList?.map((val, key) => {
            return (
              <>
                <View
                  key={key}
                  style={{
                    height: 7,
                    width: '22.5%',
                    //  borderRadius: 100,
                    backgroundColor:
                      currentIndex === key ? '#B5C6C4' : 'transparent',
                    // borderWidth: currentIndex === key ? 0 : 1,
                    borderColor: '#000000',
                    // marginLeft: key === 0 ? 0 : 12,
                  }}></View>
              </>
            );
          })}
        </View>
      </View>

      <ScrollView
        horizontal
        ref={scrollViewRef}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}>
        {/* Screen 1*/}
        <View
          style={{
            flex: 1,
            //  justifyContent: 'center',
            width: Dimensions.get('window').width,
            //height: Dimensions.get('window').height,
          }}>
          <Wrapper marginHorizontalLarge marginVerticalBase alignItemsFlexStart>
            <Text
              style={{
                fontSize: baseStyle.fontSize(42),
                fontWeight: '900',
                color: colors.snow,
              }}>
              Let’s Get{`\n`}Started
            </Text>
            <Spacer isBasic />
            <Text
              style={{
                color: '#B5C6C4',
                fontSize: baseStyle.fontSize(14),
                fontWeight: '400',
                textAlign: 'center',
                lineHeight: baseStyle.lineHight(22),
              }}>
              This few step wizzard will help you filling{`\n`}up all
              informations needed to get started
            </Text>
          </Wrapper>
          <Spacer isBasic />
          {/* inputs */}
          <Wrapper marginHorizontalLarge>
            <TextInputs.Underlined
              // placeholderTextColor={colors.snow}
              inputStyle={{
                color: colors.snow,
                fontSize: baseStyle.fontSize(15),
              }}
              value={'Bojan'}
              placeholder={'First Name'}
              containerStyle={{marginHorizontal: 0}}
            />
            <Spacer isBasic />
            <TextInputs.Underlined
              //  placeholderTextColor={colors.snow}
              inputStyle={{
                color: colors.snow,
                fontSize: baseStyle.fontSize(15),
              }}
              placeholder={'Last Name'}
              containerStyle={{marginHorizontal: 0}}
            />
          </Wrapper>

          {/* Screen 1 Button */}
          <Wrapper
            marginHorizontalMedium
            style={{flexDirection: 'row', position: 'absolute', bottom: 15}}>
            <View style={{flex: 1, justifyContent: 'center', marginRight: 6}}>
              {/* BAck */}
              <TouchableOpacity onPress={goBack}>
                <Wrapper
                  justifyContentFlexstart
                  flexDirectionRow
                  alignItemsCenter
                  marginVerticalTiny>
                  <Icon
                    size={totalSize(3.5)}
                    type="material-icons"
                    name="keyboard-backspace"
                    color={colors.snow}
                  />
                  <Text
                    style={{
                      fontSize: baseStyle.fontSize(16),
                      color: colors.snow,
                      marginLeft: 5,
                    }}>
                    Back
                  </Text>
                </Wrapper>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, justifyContent: 'center', marginLeft: 6}}>
              <Buttons.Colored
                iconStyle={{marginLeft: baseStyle.marginLeft(7)}}
                text="Next"
                textStyle={{marginLeft: baseStyle.marginLeft(10)}}
                iconName={'east'}
                iconType={'material-icons'}
                onPress={() => nextPageHandle(1)}
                buttonStyle={{marginHorizontal: 0}}
              />
            </View>
          </Wrapper>
        </View>
        {/* Screen 2*/}
        <View
          style={{
            flex: 1,
            // justifyContent: 'center',
            width: Dimensions.get('window').width,
          }}>
          <Wrapper marginHorizontalBase marginVerticalLarge>
            <Text
              style={{
                fontSize: baseStyle.fontSize(42),
                fontWeight: '900',
                color: colors.snow,
              }}>
              What’s your{`\n`}date of birth
            </Text>
            <Spacer isBasic />
            <Text
              style={{
                color: '#B5C6C4',
                fontSize: baseStyle.fontSize(14),
                fontWeight: '400',

                lineHeight: 22.4,
              }}>
              This info can’t be change later
            </Text>
          </Wrapper>
          <Spacer isBasic />
          <Wrapper alignItemsCenter>
            <DatePicker
              fadeToColor={colors.appTextColor11}
              //textColor={colors.snow}
              theme={'dark'}
              mode={'date'}
              date={dateTime}
              onDateChange={time => {
                setDateTime(time);
              }}
            />
          </Wrapper>
          <Spacer isDoubleBase />
          {/* Screen 2 Button */}
          <Wrapper
            marginHorizontalMedium
            style={{flexDirection: 'row', position: 'absolute', bottom: 15}}>
            <View style={{flex: 1, justifyContent: 'center', marginRight: 6}}>
              {/* BAck */}
              <TouchableOpacity onPress={() => nextPageHandle(0)}>
                <Wrapper
                  justifyContentFlexstart
                  flexDirectionRow
                  alignItemsCenter
                  marginVerticalTiny>
                  <Icon
                    size={totalSize(3.5)}
                    type="material-icons"
                    name="keyboard-backspace"
                    color={colors.snow}
                  />
                  <Text
                    style={{
                      fontSize: baseStyle.fontSize(16),
                      color: colors.snow,
                      marginLeft: 5,
                    }}>
                    Back
                  </Text>
                </Wrapper>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, justifyContent: 'center', marginLeft: 6}}>
              <Buttons.Colored
                iconStyle={{marginLeft: baseStyle.marginLeft(7)}}
                text="Next"
                textStyle={{marginLeft: baseStyle.marginLeft(10)}}
                iconName={'east'}
                iconType={'material-icons'}
                onPress={() => nextPageHandle(2)}
                buttonStyle={{marginHorizontal: 0}}
              />
            </View>
          </Wrapper>
        </View>
        {/* Screen 3*/}
        <View
          style={{
            flex: 1,

            width: Dimensions.get('window').width,
          }}>
          <Wrapper marginHorizontalBase marginVerticalLarge>
            <Text
              style={{
                fontSize: baseStyle.fontSize(30),
                fontWeight: '900',
                color: colors.snow,
              }}>
              Never miss a{`\n`}message
            </Text>
          </Wrapper>
          <Spacer isBasic />
          {/* Notification Buttons */}
          <Wrapper marginVerticalBase marginHorizontalBase>
            <TouchableOpacity onPress={() => setActivetab(!activeTab)}>
              <Wrapper
                marginVerticalTiny
                flexDirectionRow
                alignItemsCenter
                paddingHorizontalBase
                paddingVerticalMedium
                style={{
                  backgroundColor: activeTab
                    ? colors.appTextColor11
                    : colors.appBgColor12,
                  borderRadius: 15,
                  borderWidth: activeTab ? 1 : 0,
                  borderColor: '#4A5458',
                }}>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(16),
                    fontWeight: 900,
                    color: activeTab ? colors.snow : colors.black,
                    marginLeft: baseStyle.marginLeft(8),
                  }}>
                  Enable Notifications
                </Text>
              </Wrapper>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActivetab(!activeTab)}>
              <Wrapper
                marginVerticalTiny
                flexDirectionRow
                alignItemsCenter
                paddingHorizontalBase
                paddingVerticalMedium
                style={{
                  backgroundColor: activeTab
                    ? colors.appBgColor12
                    : colors.appTextColor11,
                  borderRadius: 15,
                  borderWidth: activeTab ? 0 : 1,
                  borderColor: '#4A5458',
                }}>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(16),
                    fontWeight: 900,
                    color: activeTab ? colors.black : colors.snow,
                    marginLeft: baseStyle.marginLeft(8),
                  }}>
                  Disable Notifications
                </Text>
              </Wrapper>
            </TouchableOpacity>
          </Wrapper>
          {/* Screen 3 Button */}
          <Wrapper
            marginHorizontalMedium
            style={{flexDirection: 'row', position: 'absolute', bottom: 15}}>
            <View style={{flex: 1, justifyContent: 'center', marginRight: 6}}>
              {/* BAck */}
              <TouchableOpacity onPress={() => nextPageHandle(1)}>
                <Wrapper
                  justifyContentFlexstart
                  flexDirectionRow
                  alignItemsCenter
                  // marginHorizontalBase
                  marginVerticalTiny>
                  <Icon
                    size={totalSize(3.5)}
                    type="material-icons"
                    name="keyboard-backspace"
                    color={colors.snow}
                  />
                  <Text
                    style={{
                      fontSize: baseStyle.fontSize(16),
                      color: colors.snow,
                      marginLeft: 5,
                    }}>
                    Back
                  </Text>
                </Wrapper>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, justifyContent: 'center', marginLeft: 6}}>
              <Buttons.Colored
                iconStyle={{marginLeft: baseStyle.marginLeft(7)}}
                text="Next"
                textStyle={{marginLeft: baseStyle.marginLeft(10)}}
                iconName={'east'}
                iconType={'material-icons'}
                onPress={() => nextPageHandle(3)}
                buttonStyle={{marginHorizontal: 0}}
              />
            </View>
          </Wrapper>
        </View>
        {/* Screen 4*/}
        <View
          style={{
            flex: 1,

            width: Dimensions.get('window').width,
          }}>
          <Wrapper marginHorizontalBase marginVerticalLarge alignItemsCenter>
            <Text
              style={{
                fontSize: baseStyle.fontSize(42),
                fontWeight: '900',
                color: colors.snow,
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
                  setUser(0);
                  MatchmakerCliked();
                }}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  paddingHorizontal: totalSize(1),
                  height: totalSize(20),
                  marginRight: 8,
                  borderWidth: user === 0 ? 0 : 1,
                  borderColor: '#E6E9E9',
                  alignItems: 'center',
                  borderRadius: 10,
                  backgroundColor:
                    user === 0 ? colors.appBgColor12 : 'transparent',
                }}>
                <SvgIcons.DualHeartIcon
                  width={baseStyle.width(77)}
                  height={baseStyle.height(48)}
                  fillColor={user === 0 ? '#F8F9F9' : '#3F3F46'}
                />
                <Spacer isBasic />
                <Text
                  style={{
                    color: user === 0 ? colors.black : colors.snow,
                    fontSize: baseStyle.fontSize(24),
                    fontWeight: '900',
                    //  textAlign: 'center',
                  }}>
                  Fusing{`\n`}
                  <Text
                    style={{
                      fontSize: baseStyle.fontSize(16),
                      fontWeight: '400',
                    }}>
                    Matchmaker
                  </Text>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setUser(1);
                  DaterCliked();
                }}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  paddingHorizontal: totalSize(1),
                  height: totalSize(20),
                  marginLeft: 8,
                  borderWidth: user === 1 ? 0 : 1,
                  borderColor: '#E6E9E9',
                  alignItems: 'center',
                  borderRadius: 10,
                  backgroundColor:
                    user === 1 ? colors.appBgColor12 : 'transparent',
                }}>
                <SvgIcons.HeartIcon
                  width={baseStyle.width(54)}
                  height={baseStyle.height(48)}
                  fillColor={user === 1 ? '#3F3F46' : '#F8F9F9'}
                />
                <Spacer isBasic />
                <Text
                  style={{
                    color: user === 0 ? colors.snow : colors.black,
                    fontSize: baseStyle.fontSize(24),
                    fontWeight: '900',
                  }}>
                  Get Fused{`\n`}
                  <Text
                    style={{
                      fontSize: baseStyle.fontSize(16),
                      fontWeight: '400',
                    }}>
                    Dater
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </Wrapper>
          <Wrapper style={{position: 'absolute', bottom: 15}}>
            <TouchableOpacity onPress={() => nextPageHandle(2)}>
              <Wrapper
                justifyContentFlexstart
                flexDirectionRow
                alignItemsCenter
                marginHorizontalBase
                marginVerticalTiny>
                <Icon
                  size={totalSize(3.5)}
                  type="material-icons"
                  name="keyboard-backspace"
                  color={colors.snow}
                />
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(16),
                    color: colors.snow,
                    marginLeft: 5,
                  }}>
                  Back
                </Text>
              </Wrapper>
            </TouchableOpacity>
          </Wrapper>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default OnBoarding;
