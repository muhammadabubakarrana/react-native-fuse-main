import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Wrapper from '../wrapper';
import Text from '../text';
import {appImages, appStyles, baseStyle, colors} from '../../services';
import {totalSize, height, width} from 'react-native-dimension';
import Spacer from '../spacer';
import {SvgIcons} from '../../services/constants/svg';
import {Image} from 'react-native-animatable';
import {Icon} from '@rneui/base';
import EditableTextInput from '../EditableInput';
import Tiles from '../tiles';
import {Buttons} from '../../components';

const PromptsSwitch = () => {
  const [showVoice, setShowVoice] = useState(true);
  const [audioRecorder, setAudioRecorder] = useState(false);

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
      {/* <FlatList
        data={DATA}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <Wrapper
              paddingHorizontalBase
              paddingVerticalBase
              marginVerticalSmall
              isCardView
              style={{backgroundColor: '#B5C6C4'}}>
              <Text style={{...styles.title, marginBottom: height(1)}}>
                {item.title}
              </Text>
              <Text
                style={{
                  color: colors.black,
                  fontSize: baseStyle.fontSize(14),
                  lineHeight: baseStyle.lineHight(22),
                }}>
                {item.text}
              </Text>
            </Wrapper>
          );
        }}
      /> */}
      {/* Typical Sunday */}
      <Wrapper
        paddingHorizontalBase
        paddingVerticalSmall
        marginVerticalBase
        isCardView
        style={{backgroundColor: '#B5C6C4', borderRadius: 8}}>
        <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
          <Text style={{...styles.title}}>Typical Sunday</Text>
          <SvgIcons.PlusIcon width="16" height="16" fillColor={colors.black} />
        </Wrapper>
        <TextInput
          multiline
          style={{
            color: colors.black,
            fontSize: baseStyle.fontSize(14),
            lineHeight: baseStyle.lineHight(18),
          }}
          placeholder="Write Here"
          placeholderTextColor={colors.black}
          value="Running 🏃 from 06AM to 08PM and rest of the day enjoy 🎉 party
          with friends 🥳"
        />
      </Wrapper>
      {/* Tiles */}
      <Wrapper marginHorizontalBase>
        <Tiles
          style={{marginBottom: totalSize(1.5)}}
          onPress={() => Alert.alert('Select Prompt Clicked')}
          plusIcon
          white
          title={'Select a Prompt'}
          activeIndex={false}
        />
        <Tiles
          style={{marginBottom: totalSize(5)}}
          plusIcon
          white
          title={'Select a Prompt'}
          activeIndex={false}
          onPress={() => Alert.alert('Select Prompt Clicked')}
        />
      </Wrapper>
      {/* Voice */}
      <Wrapper marginHorizontalBase>
        <Text style={{fontSize: baseStyle.fontSize(16), color: '#B5C6C4'}}>
          Voice Prompt
        </Text>
      </Wrapper>
      <Wrapper
        style={{backgroundColor: '#B5C6C4', borderRadius: 8}}
        paddingVerticalSmall
        paddingHorizontalBase
        marginVerticalBase
        isCardView>
        <Wrapper>
          <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
            <Text style={{...styles.title}}>Most irrational fear</Text>
            <SvgIcons.PlusIcon
              width="16"
              height="16"
              fillColor={colors.black}
            />
          </Wrapper>
          {!audioRecorder ? (
            <Buttons.Colored
              text="Record your answer"
              onPress={() => setAudioRecorder(true)}
              buttonStyle={{
                marginHorizontal: 0,
                paddingHorizontal: totalSize(3),
                backgroundColor: colors.black,
                marginVertical: totalSize(2),
              }}
            />
          ) : (
            <Wrapper marginVerticalSmall>
              <Wrapper
                flexDirectionRow
                alignItemsCenter
                justifyContentSpaceBetween>
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
            // <View style={{alignItems: 'center'}}>
            //   <SvgIcons.AudioIcon />
            //   <Spacer isBasic />
            //   <View
            //     style={{
            //       backgroundColor: '#E7E9E9',
            //       height: baseStyle.height(6),
            //       width: baseStyle.width(200),
            //       borderRadius: 100,
            //     }}>
            //     <View
            //       style={{
            //         backgroundColor: colors.appColor1,
            //         height: baseStyle.height(6),
            //         width: '30%',
            //         borderRadius: 100,
            //       }}></View>
            //   </View>
            //   <Spacer isTiny />
            //   <View style={{flexDirection: 'row', width: 200}}>
            //     <View
            //       style={{
            //         flex: 1,
            //         justifyContent: 'center',
            //       }}>
            //       <Text
            //         style={{
            //           color: colors.appColor1,
            //           fontSize: baseStyle.fontSize(30),
            //           fontWeight: '400',
            //         }}>
            //         06:04
            //       </Text>
            //     </View>
            //     <View style={{justifyContent: 'center'}}>
            //       <SvgIcons.ResumeIcon />
            //     </View>
            //   </View>
            // </View>
          )}
        </Wrapper>
        {/* <Text
          style={{
            color: colors.black,
            fontSize: totalSize(1.7),
            fontWeight: '400',
            marginTop: -10,
          }}>
          06:04
        </Text> */}
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
  title: {
    color: colors.black,
    fontSize: baseStyle.fontSize(16),
    fontWeight: 900,
  },
});

export default PromptsSwitch;
