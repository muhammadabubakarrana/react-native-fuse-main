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

export default function SwitchProfile() {
  const {userType} = useSelector(state => state.userType);
  const dispatch = useDispatch();

  return (
    <Wrapper style={{flex: 1, backgroundColor: colors.appTextColor11}}>
      <CustomStatusBar barStyle={'dark'} backgroundColor={colors.appTextColor11} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Wrapper paddingHorizontalBase>
          <Spacer isBasic />
          {/* Back */}
          <TouchableOpacity
            style={{
              // marginVertical: baseStyle.marginVertical(10),
              backgroundColor: colors.snow,
              borderRadius: 100,
              alignItems: 'center',
              width: 45,
              height: 45,
              justifyContent: 'center',
            }}
            onPress={goBack}>
            <Icon
              size={totalSize(3.5)}
              type="material-icons"
              name="keyboard-backspace"
            />
          </TouchableOpacity>
          <Spacer isBasic />
          {/* Texts */}
          <Wrapper marginVerticalBase>
            <Text style={styles.delText}>You are{`\n`}currently</Text>
          </Wrapper>
          {/* Card */}
          <Wrapper
            marginVerticalBase
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
                    Fusing
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

          <Wrapper marginVerticalBase>
            <Text style={styles.delText}>
              Would you like to switch your profile to
            </Text>
          </Wrapper>

          {/* Card */}

          <Wrapper
            marginVerticalBase
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
          {/* btn */}
          <Wrapper marginVerticalLarge>
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
        </Wrapper>
      </ScrollView>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  delText: {
    fontSize: baseStyle.fontSize(38),
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
  // btn: {
  //   position: 'absolute',
  //   bottom: 25,
  //   left: 0,
  //   right: 0,
  // },
});
