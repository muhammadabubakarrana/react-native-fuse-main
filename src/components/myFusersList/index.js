import {FlatList, View} from 'react-native';
import React from 'react';
import {Wrapper, Text, Images} from '../../components';
import {baseStyle, colors} from '../../services';
import {totalSize} from 'react-native-dimension';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from '@rneui/base';

const MyFusersList = ({data, onPress}) => {
  return (
    <Wrapper>
      <FlatList
        nestedScrollEnabled={true}
        scrollEnabled={false}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <Wrapper
              paddingHorizontalSmall
              paddingVerticalSmall
              marginVerticalTiny
              flexDirectionRow
              alignItemsCenter
              justifyContentSpaceBetween
              style={{
                backgroundColor: colors.appBgColor12,
                borderRadius: 15,
              }}>
              <Wrapper flexDirectionRow alignItemsCenter>
                <Images.Round size={totalSize(6)} source={item.image} />
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(16),
                    fontWeight: 400,
                    color: colors.appTextColor11,
                    marginLeft: baseStyle.marginLeft(8),
                  }}>
                  {item.name}
                </Text>
              </Wrapper>
              <TouchableOpacity
                onPress={onPress}
                style={{
                  backgroundColor: colors.appBgColor4,
                  padding: 10,
                  borderRadius: 100,
                }}>
                <Icon
                  type="material-icons"
                  name="close"
                  color={colors.black}
                  size={totalSize(2)}
                />
              </TouchableOpacity>
            </Wrapper>
          );
        }}
      />
    </Wrapper>
  );
};

export default MyFusersList;
