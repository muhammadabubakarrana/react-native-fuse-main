import {View} from 'react-native';
import React from 'react';
import {Wrapper, Text} from '..';
import {SvgIcons} from '../../services/constants/svg';
import {baseStyle, colors} from '../../services';

const BoostProfile = () => {
  return (
    <Wrapper
      paddingHorizontalLarge
      paddingVerticalLarge
      isCardView
      style={{
        backgroundColor: '#DB3535',
        marginHorizontal: 0,
        borderRadius: 34,
      }}>
      <Wrapper isAbsolute style={{opacity: 0.3, right: -15, top: -20}}>
        <SvgIcons.DiamondOutlined width="171" height="154" />
      </Wrapper>
      <Wrapper marginVerticalBase>
        <SvgIcons.DiamondFilled />
      </Wrapper>

      <Wrapper
        isAbsolute
        style={{
          opacity: 0.2,
          left: -25,
          bottom: -120,
          transform: [{scaleY: -1}],
        }}>
        <SvgIcons.DiamondOutlined width="261" height="246" />
      </Wrapper>
      <Text
        style={{
          fontSize: baseStyle.fontSize(30),
          fontWeight: 800,
          color: colors.snow,
        }}>
        This Feature Comming Soon
      </Text>
    </Wrapper>
  );
};

export default BoostProfile;
