import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {
  Wrapper,
  CustomStatusBar,
  Text,
  Spacer,
  Buttons,
  Images,
} from '../../../components';
import {Icon} from '@rneui/themed';
import {
  appImages,
  baseStyle,
  colors,
  fontFamily,
  routes,
} from '../../../services';
import {totalSize} from 'react-native-dimension';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {goBack} from '../../../navigation/rootNavigation';
import {SvgIcons} from '../../../services/constants/svg';

export default function ChoseWhoFuse() {
  const [activeTab, setActivetab] = useState(0);

  const dropdownData = [
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
    {
      id: '3',
      name: 'Danny L.',
      image: require('../../../assets/images/main/user-6.png'),
    },
    {
      id: '3',
      name: 'Marriam M.',
      image: require('../../../assets/images/main/user-4.png'),
    },
  ];
  return (
    <Wrapper isMain style={{backgroundColor: colors.appBgColor11}}>
      <CustomStatusBar
        barStyle={'light'}
        backgroundColor={colors.appBgColor11}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Wrapper paddingHorizontalBase>
          <Spacer isBasic />

          <Spacer isTiny />
          {/* Texts */}
          <Text style={styles.delText}>
            Choose
            {`\n`}who to fuse
          </Text>
          <Spacer isBasic />
          {/* Card */}
          {dropdownData?.map((val, key) => {
            return (
              <TouchableOpacity key={key} onPress={() => setActivetab(key)}>
                <Wrapper
                  marginVerticalTiny
                  flexDirectionRow
                  alignItemsCenter
                  paddingHorizontalBase
                  paddingVerticalBase
                  style={{
                    backgroundColor:
                      activeTab === key
                        ? colors.appBgColor12
                        : colors.appTextColor11,
                    borderRadius: 24,
                    borderWidth: activeTab === key ? 0 : 1,
                    borderColor: '#4A5458',
                  }}>
                  <Images.Round size={totalSize(5)} source={val?.image} />
                  <Text
                    style={{
                      fontSize: baseStyle.fontSize(16),
                      fontWeight: 900,
                      color: activeTab === key ? '#030810' : colors.snow,
                      marginLeft: baseStyle.marginLeft(8),
                    }}>
                    {val?.name}
                  </Text>
                </Wrapper>
              </TouchableOpacity>
            );
          })}

          <Spacer isDoubleBase />
        </Wrapper>
      </ScrollView>
      {/* Back */}
      <TouchableOpacity onPress={goBack}>
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
  btn: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
  },
});
