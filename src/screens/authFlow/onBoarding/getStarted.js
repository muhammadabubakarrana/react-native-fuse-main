import React, {useState, useRef} from 'react';
import {
  Buttons,
  Wrapper,
  Spacer,
  Text,
  CirclesWithinCircle,
} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import CustomStatusBar from '../../../components/statusBars/customStatusBar';
import {colors, baseStyle, routes} from '../../../services';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {SvgIcons} from '../../../services/constants/svg';
import {navigate} from '../../../navigation/rootNavigation';

const GetStarted = () => {
  const navigation = useNavigation();

  return (
    <Wrapper isMain style={{backgroundColor: colors.appTextColor11}}>
      <CustomStatusBar
        barStyle={'light'}
        backgroundColor={colors.appTextColor11}
      />
      <CirclesWithinCircle
        onPress={() => navigate('Profile')}
        style={{
          position: 'absolute',
          zIndex: 1,
          top: 80,
          left: -150,
          opacity: 0.5,
        }}
      />
      <Wrapper flex={1} style={{position: 'relative', zIndex: 2}}>
        <Wrapper marginHorizontalLarge marginVerticalLarge>
          <Wrapper marginVerticalSmall>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: baseStyle.fontSize(14),
                fontWeight: '400',
                textAlign: 'left',
                lineHeight: baseStyle.lineHight(22.4),
              }}>
              Keep moving!
            </Text>
            <Spacer isBasic />
            <Text
              style={{
                fontSize: baseStyle.fontSize(30),
                fontWeight: '900',
                color: '#FFFFFF',
                textAlign: 'left',
              }}>
              Let’s Finish{`\n`}your{`\n`}Dater Profile
            </Text>
            <Spacer isDoubleBase />
            {/* Circle Btn */}
            <TouchableOpacity
              onPress={() => navigate('Profile')}
              style={{alignItems: 'center'}}>
              <View style={styles.innerCircle3}>
                <View
                  style={{
                    alignItems: 'center',
                  }}>
                  <SvgIcons.HeartIcon
                    width={baseStyle.width(54)}
                    height={baseStyle.height(48)}
                    fillColor={'#3F3F46'} // '#F8F9F9'
                  />
                  <Text
                    style={{
                      fontSize: baseStyle.fontSize(24),
                      fontWeight: 900,
                      color: '#030810',
                    }}>
                    Get Fused
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  innerCircle3: {
    width: 220, // Adjust the size of the inner circles
    height: 220, // Same as width for perfect circles
    borderRadius: 220 / 2, // Half of the width/height for a circle
    borderWidth: 1, // Border width for the inner circles
    borderColor: '#4A5458', // Border color for the inner circles
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.appBgColor12,
  },
});

export default GetStarted;
