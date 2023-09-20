import {FlatList, View} from 'react-native';
import React from 'react';
import {Wrapper, Text, Images, Buttons} from '../../components';
import {baseStyle, colors} from '../../services';
import {totalSize} from 'react-native-dimension';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from '@rneui/base';

const Invitations = ({data}) => {
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
                backgroundColor: colors.transparent,
                borderRadius: 15,
                borderColor: '#4A5458',
                borderWidth: 1,
              }}>
              <Wrapper
                flexDirectionRow
                alignItemsCenter
                style={{marginTop: -20}}>
                <Images.Round size={totalSize(6)} source={item.image} />
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(16),
                    fontWeight: 400,
                    color: colors.snow,
                    marginLeft: baseStyle.marginLeft(8),
                  }}>
                  {item.name}
                </Text>
              </Wrapper>
              <Wrapper
                flexDirectionRow
                alignItemsCenter
                style={{marginTop: baseStyle.marginTop(30)}}>
                <Buttons.BorderedSmall
                  textStyle={{
                    color: colors.snow,
                    fontSize: baseStyle.fontSize(14),
                  }}
                  buttonStyle={{borderWidth: 0}}
                  text={'Decline'}
                />
                <Buttons.ColoredSmall
                  buttonStyle={{
                    backgroundColor: '#B5C6C4',
                    paddingHorizontal: baseStyle.paddingHorizontal(5),
                  }}
                  textStyle={{
                    color: colors.black,
                    fontSize: baseStyle.fontSize(14),
                    fontWeight: 400,
                  }}
                  text={'Accept'}
                />
              </Wrapper>
            </Wrapper>
          );
        }}
      />
    </Wrapper>
  );
};

export default Invitations;
