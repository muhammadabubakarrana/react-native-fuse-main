import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  Wrapper,
  CustomStatusBar,
  Text,
  Spacer,
  TextInputs,
  Images,
  Buttons,
} from '../../../components';
import {Icon} from '@rneui/themed';
import {appImages, appStyles, colors, sizes} from '../../../services';
import {totalSize, width, height} from 'react-native-dimension';
import {goBack} from '../../../navigation/rootNavigation';

export default function TeamForFuser() {
  return (
    <Wrapper
      isMain
      paddingHorizontalBase
      style={{flex: 1, backgroundColor: colors.appBgColor9}}>
      <CustomStatusBar barStyle={'dark'} backgroundColor={colors.appBgColor9} />
      <TouchableOpacity onPress={goBack}>
        <Wrapper alignItemsFlexStart>
          <Icon
            size={totalSize(5)}
            type="material-community"
            name="arrow-left"
          />
        </Wrapper>
      </TouchableOpacity>
      <Spacer isBasic />
      <Text isXXLTitle style={styles.teamText}>
        Team Fusers
      </Text>

      <Spacer isDoubleBase />
      <Wrapper alignItemsFlexStart>
        <Text
          isLarge
          style={{
            color: colors.appTextColor10,
          }}>
          You are in team
        </Text>
      </Wrapper>
      <Spacer isBasic />
      <Wrapper
        marginHorizontalTiny
        paddingHorizontalBase
        alignItemsCenter
        flexDirectionRow
        justifyContentSpaceBetween
        style={styles.card}>
        <Images.Round source={appImages.RectangleNine} />
        <Text style={{color: colors.appTextColor9}}>John Bravo</Text>
        <Buttons.BorderedSmall
          iconName={'close'}
          iconType={'material-community'}
          iconSize={sizes.icons.tiny}
          buttonStyle={styles.chip}
          text={'Leave'}
        />
        <Text style={{color: colors.appTextColor9}}>View</Text>
      </Wrapper>
      <Spacer isBasic />

      <Wrapper alignItemsFlexStart>
        <Text isLarge style={{color: colors.appTextColor10}}>
          You are invited to the team
        </Text>
      </Wrapper>
      <Spacer isTiny />
      <Wrapper
        marginHorizontalTiny
        paddingHorizontalBase
        alignItemsCenter
        flexDirectionRow
        justifyContentSpaceBetween
        style={styles.card}>
        <Images.Round source={appImages.RectangleNine} />
        <Text style={{color: colors.appTextColor9}}>John Bravo</Text>
        <Buttons.ColoredSmall
          text={'Accept'}
          buttonStyle={{backgroundColor: colors.appBgColor8}}
        />
        <Text style={{color: colors.appTextColor9}}>View</Text>
      </Wrapper>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  teamText: {
    fontWeight: '900',
    color: '#383838',
  },
  input: {
    borderRadius: 8,
    marginHorizontal: totalSize(0.5),
  },
  card: {
    padding: totalSize(2),
    borderRadius: sizes.cardRadius,
    backgroundColor: colors.appBgColor7,
  },
  chip: {
    borderRadius: 100,
    borderWidth: 0,
    backgroundColor: '#CA2D301A',
    paddingLeft: totalSize(-0.1),
  },
});
