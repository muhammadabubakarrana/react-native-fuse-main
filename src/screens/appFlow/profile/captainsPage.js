import React from 'react';
import {SectionList, StyleSheet, View} from 'react-native';
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
import {TouchableOpacity} from 'react-native-gesture-handler';
import {goBack} from '../../../navigation/rootNavigation';

export default function CaptainsPage() {
  const DATA = [
    {
      title: 'In Team',
      data: [
        {name: 'John', class: 'Remove'},
        {name: 'Clerik', class: 'Remove'},
      ],
    },
    {
      title: '  Pending Invitation',
      data: [{name: 'Clerik', class: 'Cancel'}],
    },
  ];

  return (
    <Wrapper
      isMain
      paddingHorizontalBase
      style={{flex: 1, backgroundColor: colors.appBgColor9}}>
      <CustomStatusBar barStyle={'dark'} backgroundColor={colors.appBgColor9} />

      <SectionList
        ListHeaderComponent={
          <>
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
            <Text style={styles.teamText}>Team</Text>
            <Spacer isBasic />
            <Wrapper>
              <Text
                style={{color: colors.appTextColor1, marginLeft: width(1)}}
                isLarge>
                Enter phone number to invite to your team
              </Text>
              <Spacer isTiny />
              <TextInputs.Bordered
                containerStyle={styles.input}
                iconColorRight={colors.appColor1}
                iconNameRight={'plus'}
                iconTypeRight={'material-community'}
              />
            </Wrapper>
            <Spacer isBasic />
          </>
        }
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <Wrapper
            marginVerticalSmall
            marginHorizontalTiny
            paddingHorizontalBase
            alignItemsCenter
            flexDirectionRow
            justifyContentSpaceBetween
            style={styles.card}>
            <Images.Round source={appImages.RectangleNine} />
            <Text style={{color: colors.appTextColor9}}>{item.name}</Text>
            <Buttons.BorderedSmall
              iconName={'close'}
              iconType={'material-community'}
              iconSize={sizes.icons.tiny}
              buttonStyle={styles.chip}
              text={item.class}
            />
            <Text style={{color: colors.appTextColor9}}>View</Text>
          </Wrapper>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text
            isLarge
            style={{color: colors.appTextColor10, marginLeft: width(1.5)}}>
            {title}
          </Text>
        )}
      />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  teamText: {
    fontSize: totalSize(5),
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
    // opacity: 0.7,
  },
  chip: {
    backgroundColor: '#CA2D301A',
    borderRadius: 100,
    borderWidth: 0,
    paddingLeft: totalSize(-0.1),
  },
});
