import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  CustomStatusBar,
  Modals,
  Spacer,
  Text,
  Wrapper,
} from '../../../components';
import {appIcons, baseStyle, colors, sizes} from '../../../services';
import {Icon} from '@rneui/base';

export default function GettingFusedDater() {
  return (
    <Wrapper isMain>
      <CustomStatusBar barStyle={'dark'} backgroundColor={'#FFF'} />
      <Wrapper
        style={{marginTop: baseStyle.marginTop(-25)}}
        justifyContentSpaceEvenly
        alignItemsCenter
        flex={1}>
        <Text style={styles.Heading}>You are currently</Text>
        {/* card container */}
        <Wrapper alignItemsCenter style={styles.cardContainer}>
          <Image
            style={{height: baseStyle.height(55), width: baseStyle.width(61)}}
            source={appIcons.borderedHeart}
            resizeMode="contain"
          />
          <Text alignTextCenter style={styles.cardText}>
            Getting fused{`\n`}Dater
          </Text>
        </Wrapper>
        <Text alignTextCenter style={styles.Heading}>
          Would you like to{`\n`}switch your{`\n`}profile to
        </Text>
        {/* fusing matchmaker button */}
        <TouchableOpacity style={styles.btnContainer}>
          <Wrapper
            justifyContentSpaceBetween
            flexDirectionRow
            alignItemsCenter
            paddingHorizontalMedium
            paddingVerticalMedium>
            <Image
              style={{
                width: baseStyle.width(55),
                height: baseStyle.height(34),
              }}
              resizeMode="contain"
              source={appIcons.doubleHeart}
            />
            <Text style={styles.btnTxt}>Fusing{`\n`}Matchmaker</Text>
            <Icon
              color={colors.snow}
              type="material-community"
              name="arrow-right"
              size={35}
            />
          </Wrapper>
        </TouchableOpacity>
        <Spacer isDoubleBase />
        {/* <Spacer isDoubleBase />
          <Spacer isDoubleBase />
          <Spacer isDoubleBase />
          <Spacer isDoubleBase />  */}
      </Wrapper>
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
