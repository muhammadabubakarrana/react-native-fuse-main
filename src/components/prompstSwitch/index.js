import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Wrapper from '../wrapper';
import Text from '../text';
import {appImages, appStyles, colors} from '../../services';
import {totalSize, height, width} from 'react-native-dimension';
import Spacer from '../spacer';
import {SvgIcons} from '../../services/constants/svg';
import {Image} from 'react-native-animatable';
import {Icon} from '@rneui/base';
import EditableTextInput from '../EditableInput';

const PromptsSwitch = () => {
  const DATA = [
    {
      id: 0,
      title: 'Typical Sunday',
      text: 'Running 🏃 from 06AM to 08PM and rest of the day enjoys 🎉 partying with friends 🥳',
    },
    {
      id: 1,
      title: 'Typical Sunday',
      text: 'Running 🏃 from 06AM to 08PM and rest of the day enjoys 🎉 partying with friends 🥳',
    },
    {
      id: 2,
      title: 'Typical Sunday',
      text: 'Running 🏃 from 06AM to 08PM and rest of the day enjoys 🎉 partying with friends 🥳',
    },
  ];
  return (
    <Wrapper flex={1}>
      <Spacer isBasic />
      <FlatList
        data={DATA}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <Wrapper
              paddingHorizontalSmall
              paddingVerticalBase
              marginVerticalSmall
              isCardView>
              <Text
                isRegularFont
                style={{...styles.title, marginBottom: height(1)}}>
                {item.title}
              </Text>
              <Text style={styles.title} isLarge>
                {item.text}
              </Text>
            </Wrapper>
          );
        }}
      />

      <Wrapper
        paddingVerticalSmall
        paddingHorizontalSmall
        marginVerticalSmall
        isCardView>
        <Text isRegularFont style={styles.title}>
          Typical Sunday
        </Text>
        <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
          <View
            style={{
              backgroundColor: '#E7E9E9',
              height: 10,
              width: '80%',
              borderRadius: 100,
            }}>
            <View
              style={{
                backgroundColor: colors.appColor1,
                height: 10,
                width: '60%',
                borderRadius: 100,
              }}></View>
          </View>
          <Image source={appImages.pauseAudio} resizeMode="contain" />
        </Wrapper>

        <Text
          style={{
            color: colors.black,
            fontSize: totalSize(1.7),
            fontWeight: '400',
            marginTop: -10,
          }}>
          06:04
        </Text>
      </Wrapper>
      <Spacer isDoubleBase />
    </Wrapper>
  );
};

// const styles = StyleSheet.create({
//   title: {
//     color: colors.black,
//   },
// });

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  readOnlyText: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 10,
    alignSelf: 'flex-end',
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default PromptsSwitch;
