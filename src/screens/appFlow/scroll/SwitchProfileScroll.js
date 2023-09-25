import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {
  Wrapper,
  CustomStatusBar,
  Text,
  Spacer,
  Buttons,
} from '../../../components';
import {Icon} from '@rneui/themed';
import {baseStyle, colors, fontFamily, routes} from '../../../services';
import {totalSize} from 'react-native-dimension';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {goBack} from '../../../navigation/rootNavigation';
import {SvgIcons} from '../../../services/constants/svg';
import {useSelector, useDispatch} from 'react-redux';
import {setUserType} from '../../../services/redux/slices/userType';

export default function SwitchProfileScroll() {
  const {userType} = useSelector(state => state.userType);
  const dispatch = useDispatch();

  return (
    <Wrapper style={{flex: 1, backgroundColor: colors.appTextColor11}}>
      <CustomStatusBar
        barStyle={'light'}
        backgroundColor={colors.appTextColor11}
      />
      <ScrollView
        contentContainerStyle={{flex: 1}}
        indicatorStyle={colors.snow}
        showsVerticalScrollIndicator={true}>
        <Wrapper marginVerticalSmall paddingHorizontalMedium>
          {/* Back */}
          <TouchableOpacity
            style={{
              //   marginTop: baseStyle.marginTop(10),
              backgroundColor: colors.snow,
              borderRadius: 100,
              alignItems: 'center',
              width: baseStyle.height(45),
              height: baseStyle.height(45),
              justifyContent: 'center',
            }}
            onPress={goBack}>
            <Icon
              size={totalSize(3.5)}
              type="material-icons"
              name="keyboard-backspace"
            />
          </TouchableOpacity>
        </Wrapper>
        <Wrapper
          paddingHorizontalMedium
          flex={1}
          style={{flexDirection: 'column', justifyContent: 'space-evenly', marginBottom: 90}}>
          {/* Texts */}
          <Text style={styles.delText}>You are{`\n`}currently</Text>

          {/* Card */}
          <Wrapper
            // marginVerticalBase
            flexDirectionRow
            alignItemsCenter
            paddingHorizontalBase
            paddingVerticalSmall
            style={{
              backgroundColor: colors.appBgColor12,
              borderRadius: 24,
            }}>
            <SvgIcons.HeartIcon
              width={baseStyle.width(43)}
              height={baseStyle.height(39)}
              fillColor={colors.black}
            />
            <Wrapper style={{marginLeft: baseStyle.marginLeft(15)}}>
              {userType === 'FusingMatchMaker' ? (
                <>
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
                    Matchmaker
                  </Text>
                </>
              ) : (
                <>
                  <Text
                    style={{
                      fontSize: baseStyle.fontSize(24),
                      fontWeight: 900,
                      color: colors.appTextColor11,
                    }}>
                    Get Fused
                  </Text>
                  <Text
                    style={{
                      fontSize: baseStyle.fontSize(16),
                      fontWeight: 400,
                      color: colors.appTextColor11,
                    }}>
                    Dater
                  </Text>
                </>
              )}
            </Wrapper>
          </Wrapper>

          <Text style={styles.delText}>
            Would you like to switch your profile to
          </Text>

          {/* Card */}
          <Wrapper
            // marginVerticalSmall
            flexDirectionRow
            alignItemsCenter
            paddingHorizontalBase
            paddingVerticalSmall
            style={{
              // backgroundColor: colors.appBgColor12,
              borderRadius: 24,
              borderWidth: 1,
              borderColor: colors.snow,
            }}>
            <SvgIcons.DualHeartIconOutlined
              width={baseStyle.width(47)}
              height={baseStyle.height(30)}
              fillColor={colors.snow}
            />
            <Wrapper style={{marginLeft: baseStyle.marginLeft(15)}}>
              {userType === 'FusingMatchMaker' ? (
                <>
                  <Text
                    style={{
                      fontSize: baseStyle.fontSize(24),
                      fontWeight: 900,
                      color: colors.snow,
                    }}>
                    Get Fused
                  </Text>
                  <Text
                    style={{
                      fontSize: baseStyle.fontSize(16),
                      fontWeight: 400,
                      color: colors.snow,
                    }}>
                    Dater
                  </Text>
                </>
              ) : (
                <>
                  <Text
                    style={{
                      fontSize: baseStyle.fontSize(24),
                      fontWeight: 900,
                      color: colors.snow,
                    }}>
                    Fusing
                  </Text>
                  <Text
                    style={{
                      fontSize: baseStyle.fontSize(16),
                      fontWeight: 400,
                      color: colors.snow,
                    }}>
                    Matchmaker
                  </Text>
                </>
              )}
            </Wrapper>
          </Wrapper>

          {/* button */}
          <Wrapper marginVerticalSmall style={styles.btn}>
            <Buttons.Colored
              buttonStyle={{marginHorizontal: 0}}
              onPress={() =>
                dispatch(
                  setUserType(
                    userType === 'FusingMatchMaker'
                      ? 'GettingFusedDater'
                      : 'FusingMatchMaker',
                  ),
                )
              }
              text={'Switch Profile'}
            />
          </Wrapper>
          {/* <Spacer isDoubleBase />
      <Spacer isDoubleBase /> */}
        </Wrapper>
      </ScrollView>
      {/* <Spacer isDoubleBase />
      <Spacer isDoubleBase /> */}


    </Wrapper>
  );
}

const styles = StyleSheet.create({
  delText: {
    fontSize: baseStyle.fontSize(38),
    lineHeight: baseStyle.lineHight(42),
    fontWeight: 800,
    color: colors.snow,
  },
  para: {
    fontSize: baseStyle.fontSize(16),
    fontWeight: 400,
    color: colors.black,
    fontfamily: fontFamily.appTextRegular,
    lineHeight: baseStyle.lineHight(24),
  },
  btn: {
    // width: '100%',
  },
});
