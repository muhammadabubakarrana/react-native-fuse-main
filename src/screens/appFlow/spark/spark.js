import React from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {
  CustomStatusBar,
  Modals,
  Spacer,
  Text,
  Wrapper,
} from '../../../components';
import {
  appIcons,
  appImages,
  appStyles,
  baseStyle,
  colors,
  routes,
  sizes,
} from '../../../services';
import {Icon} from '@rneui/base';
import {SvgIcons} from '../../../services/constants/svg';
import {totalSize, height, width} from 'react-native-dimension';
import {useSelector} from 'react-redux';
import {navigate} from '../../../navigation/rootNavigation';

export default function Spark() {
  const {userType} = useSelector(state => state.userType);
  return (
    <Wrapper
      isMain
      //  paddingHorizontalMedium
      style={{backgroundColor: colors.appTextColor11}}>
      <CustomStatusBar
        barStyle={'light'}
        backgroundColor={colors.appTextColor11}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Wrapper marginHorizontalBase>
          {/* Text */}
          <Wrapper marginVerticalSmall>
            <Text
              style={{
                color: colors.snow,
                fontSize: baseStyle.fontSize(42),
                fontWeight: 900,
              }}>
              My Sparks
            </Text>
          </Wrapper>
          {/* image */}
          <Wrapper marginVerticalSmall>
            <ImageBackground
              style={{
                paddingTop: Dimensions.get('window').height / 2.4,
                height: Dimensions.get('window').height / 2,
                width: '100%',
              }}
              source={appImages.profileBg}
              resizeMode="stretch">
              <Wrapper
                marginHorizontalBase
                flexDirectionRow
                alignItemsCenter
                justifyContentSpaceBetween>
                <TouchableOpacity
                  //onPress={() => navigate(routes.settings)}
                  style={{
                    backgroundColor: colors.appColor1,
                    borderRadius: 100,
                    alignItems: 'center',
                    width: 45,
                    height: 45,
                    justifyContent: 'center',
                  }}>
                  <Icon
                    type="material-community"
                    name="close"
                    color={colors.appBgColor3}
                    size={totalSize(3.5)}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#B5C6C4',
                    borderRadius: 100,
                    alignItems: 'center',
                    width: 45,
                    height: 45,
                    justifyContent: 'center',
                  }}>
                  <SvgIcons.ChatIcon
                    width={'26'}
                    height={'30'}
                    strokeColor={'#383838'}
                    fillColor={'#B5C6C4'}
                    strokeWidth={'4'}
                  />
                </TouchableOpacity>
              </Wrapper>
            </ImageBackground>
          </Wrapper>
          {/* text */}
          <Wrapper marginVerticalSmall>
            <Text
              onPress={() => navigate(routes.ScrollDetail)}
              style={{
                color: colors.snow,
                fontSize: baseStyle.fontSize(42),
                fontWeight: 800,
              }}>
              Michael Wawrick
            </Text>
          </Wrapper>

          <Spacer isDoubleBase />
          <Spacer isDoubleBase />

          <Spacer isDoubleBase />
        </Wrapper>
      </ScrollView>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  Heading: {
    color: colors.appTextColor9,
    fontSize: baseStyle.fontSize(30),
    fontWeight: 900,
  },
  cardContainer: {
    width: '60%',
    borderRadius: sizes.cardRadius,
    borderWidth: 1,
    borderColor: '#E6E9E9',
    paddingTop: baseStyle.paddingTop(67),
    paddingBottom: baseStyle.paddingBottom(47),
  },
  cardText: {
    fontSize: baseStyle.fontSize(23),
    fontWeight: 400,
    marginTop: baseStyle.marginTop(28),
    color: colors.appTextColor10,
  },
  btnContainer: {
    borderRadius: sizes.cardRadius,
    backgroundColor: colors.appColor1,
    width: '85%',
  },
  btnTxt: {
    fontSize: baseStyle.fontSize(14),
    fontWeight: 400,
    color: colors.snow,
    marginLeft: baseStyle.marginLeft(-55),
  },
});
