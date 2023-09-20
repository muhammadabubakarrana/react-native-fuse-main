import React, {useState, useRef} from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {totalSize} from 'react-native-dimension';
import {Text} from '../../components';
//import {useNavigation} from '@react-navigation/native';
import {baseStyle, colors} from '../../services';
import {SvgIcons} from '../../services/constants/svg';

const Tiles = props => {
  //  const navigation = useNavigation();
  const {plusIcon, activeIndex, index, onPress, title, white, style} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onPress(index)}
      style={[
        {
          flexDirection: 'row',
          backgroundColor:
            activeIndex === index ? colors.appBgColor12 : 'transparent',
          borderColor: activeIndex === index ? '#4A5458' : '#4A5458',
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: totalSize(2),
          paddingVertical: totalSize(1),
          marginBottom: totalSize(1),
        },
        style,
      ]}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text
          style={{
            color: activeIndex === index ? colors.black : colors.snow,
            fontSize: baseStyle.fontSize(16),
            fontWeight: activeIndex === index ? 900 : 400,
          }}>
          {title}
        </Text>
      </View>
      {
        plusIcon ? (
          <View style={{justifyContent: 'center'}}>
            <SvgIcons.PlusIcon
              width="16"
              height="16"
              fillColor={white ? colors.appBgColor12 : colors.appColor1}
            />
          </View>
        ) : null
        // activeIndex === index && (
        //   <View style={{justifyContent: 'center'}}>
        //     <SvgIcons.CircleCheckRound fillColor={colors.appColor1} />
        //   </View>
        //)
      }
    </TouchableOpacity>
  );
};

export default Tiles;
