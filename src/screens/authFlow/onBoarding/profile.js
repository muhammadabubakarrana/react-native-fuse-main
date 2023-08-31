import React, {useState, useRef} from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {totalSize} from 'react-native-dimension';
import {
  Logos,
  Toasts,
  Icons,
  TextInputs,
  Buttons,
  ScrollViews,
  Wrapper,
  Spacer,
  Text,
} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import CustomStatusBar from '../../../components/statusBars/customStatusBar';
import {colors, baseStyle} from '../../../services';
import {SvgIcons} from '../../../services/constants/svg';
import Tiles from '../../../components/tiles';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';

const circleList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const relationShipGoalsData = [
  {id: 1, title: 'Affection and Romance'},
  {id: 2, title: 'Personal Growth Together'},
  {id: 3, title: 'Surprises and Spontaneity'},
  {id: 4, title: 'Quality Time'},
  {id: 5, title: 'Trust and Transparency'},
  {id: 6, title: 'Emotional Intimacy'},
];
const familyData = [
  {id: 1, title: 'No i don’t have any children'},
  {id: 2, title: 'I have children'},
  {id: 3, title: 'Want Children'},
  {id: 4, title: 'Open to children'},
  {id: 5, title: 'Prefer not to say'},
];
const childrenData = [
  {id: 1, title: '1'},
  {id: 2, title: '2'},
  {id: 3, title: '3'},
  {id: 4, title: '4'},
  {id: 5, title: '5+'},
];
const ethnicityData = [
  {id: 1, title: 'I prefer not to say'},
  {id: 2, title: 'Ethnicity'},
  {id: 3, title: 'Ethnicity'},
  {id: 4, title: 'Ethnicity'},
  {id: 5, title: 'Ethnicity'},
];
const religionData = [
  {id: 1, title: 'I prefer not to say'},
  {id: 2, title: 'Christianity'},
  {id: 3, title: 'Islam'},
  {id: 4, title: 'Hinduism'},
  {id: 5, title: 'Buddhism'},
];
const degreeData = [
  {id: 1, title: 'Associate degree'},
  {id: 2, title: "Bachelor's degree"},
  {id: 3, title: "Master's degree"},
  {id: 4, title: 'Doctoral degree'},
];
const politicsStatusData = [
  {id: 1, title: 'Politicly active'},
  {id: 2, title: 'Politicly inactive'},
  {id: 3, title: 'I prefer to not say'},
];
const Data = [
  {id: '0', title: ''},
  {id: '1', title: '184 cm'},
  {id: '2', title: '185 cm'},
  {id: '3', title: '186 cm'},
  {id: '4', title: '187 cm'},
  {id: '5', title: '188 cm'},
  {id: '6', title: '189 cm'},
  {id: '7', title: '190 cm'},
  {id: '8', title: '181 cm'},
  {id: '9', title: '180 cm'},
  {id: '10', title: '182 cm'},
  {id: '0', title: ''},
];
const locationData = [
  {id: '1', title: 'New York City'},
  {id: '2', title: 'New York Coprus type sec'},
  {id: '3', title: 'New York Coda'},
  {id: '4', title: 'New York City'},
  {id: '5', title: 'New York Coprus type sec'},
  {id: '6', title: 'New York Coda'},
  {id: '7', title: 'New York City'},
  {id: '8', title: 'New York Coprus type sec'},
  {id: '9', title: 'New York Coda'},
];
const occupationData = [
  {id: '1', title: 'Web and UX Designerity'},
  {id: '2', title: 'Web and UX Designers field in texst'},
  {id: '3', title: 'Web and UX Designerces'},
  {id: '4', title: 'Web and UX Designerity'},
  {id: '5', title: 'Web and UX Designers field in texst'},
  {id: '6', title: 'Web and UX Designerces'},
  {id: '7', title: 'Web and UX Designerity'},
  {id: '8', title: 'Web and UX Designers field in texst'},
  {id: '9', title: 'Web and UX Designerces'},
];
const promptsData = [
  {id: 1, title: 'Unusual skill'},
  {id: 2, title: 'Typical Sunday'},
  {id: 3, title: 'Dating me is like'},
  {id: 4, title: 'Most irrational fear'},
  {id: 5, title: 'A life goal'},
  {id: 6, title: 'A life goal'},
  {id: 7, title: 'My simple pleasures'},
];
const Item = ({title, isSelected}) => {
  return (
    <TouchableOpacity
      style={[styles.itemContainer, isSelected && styles.selectedItem]}>
      <Text style={[styles.itemText, isSelected && styles.selectedText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const Profile = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [selectedId, setSelectedId] = useState('1');
  const [moreStepScreenActive, setMoreStepScreenActive] = useState(false);
  const [heightToggle, setHeightToggle] = useState(true);
  const [genderType, setGenderType] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [goalIndex, setGoalIndex] = useState(null);
  const [familyIndex, setFamilyIndex] = useState(null);
  const [childrenIndex, setChildrenIndex] = useState(0);
  const [ethnicityIndex, setEthnicityIndex] = useState(null);
  const [religionIndex, setReligionIndex] = useState(null);
  const [degreeIndex, setDegreeIndex] = useState(null);
  const [politicsStatusIndex, setPoliticsStatusIndex] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchOccupation, setSearchOccupation] = useState('');
  const [drinkerStatus, setDrinkerStatus] = useState(0);
  const [smokerStatus, setSmokerStatus] = useState(2);
  const [marijuanaStatus, setMarijuanaStatus] = useState(0);
  const [drugsStatus, setDrugsStatus] = useState(0);
  const [audioRecorder, setAudioRecorder] = useState(false);
  const [promptsActive, setPromptsActive] = useState(false);
  const [promptsIndex, setPromptsIndex] = useState(null);
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const [imageThree, setImageThree] = useState(null);
  const [imageFour, setImageFour] = useState(null);
  const [imageFive, setImageFive] = useState(null);
  const [imageSix, setImageSix] = useState(null);

  const nextPageHandle = index => {
    setCurrentIndex(index);
    scrollViewRef.current?.scrollTo({
      x: Dimensions.get('window').width * index,
      animated: true,
    });
  };
  const selectImageHandle = value => {
    try {
      const options = {
        title: 'Select Image',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };

      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        const URL = image?.path;
        console.log(image);
        switch (value) {
          case 'one':
            setImageOne(URL);
            break;
          case 'two':
            setImageTwo(URL);
            break;
          case 'three':
            setImageThree(URL);
            break;
          case 'four':
            setImageFour(URL);
            break;
          case 'five':
            setImageFive(URL);
            break;
          case 'six':
            setImageSix(URL);
            break;
          default:
          // code block
        }
      });
    } catch (error) {
      console.log(error?.message);
    }
  };

  return (
    <>
      {!moreStepScreenActive ? (
        <Wrapper isMain style={{flex: 1, backgroundColor: '#F8F9F9'}}>
          <CustomStatusBar barStyle={'dark'} backgroundColor={'#F8F9F9'} />
          <Spacer isBasic />
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <ScrollView
              contentContainerStyle={{height: Dimensions.get('window').height}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  position: 'absolute',
                  top: totalSize(2),
                  left: 0,
                  right: 0,
                }}>
                {circleList?.map((val, key) => {
                  return (
                    <View
                      key={key}
                      style={{
                        height: baseStyle.height(14),
                        width: baseStyle.width(14),
                        borderRadius: baseStyle.borderRadius(14),
                        backgroundColor:
                          currentIndex === key ? colors.appColor1 : '#FFF',
                        borderWidth: currentIndex === key ? 0 : 1,
                        borderColor: '#000000',
                        marginLeft: key === 0 ? 0 : 12,
                      }}></View>
                  );
                })}
              </View>

              <ScrollView
                contentContainerStyle={{
                  height: Dimensions.get('window').height - 50,
                }}
                horizontal
                ref={scrollViewRef}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}>
                {/* Relationship Goals */}
                <View style={{flex: 1, width: Dimensions.get('window').width}}>
                  <Spacer isDoubleBase />
                  <Wrapper marginHorizontalLarge marginVerticalTiny>
                    <Text
                      style={{
                        fontSize: baseStyle.fontSize(30),
                        fontWeight: '900',
                        color: '#383838',
                        textAlign: 'left',
                      }}>
                      Relationship{`\n`}Goals
                    </Text>
                    <Spacer isBasic />
                    <Text
                      style={{
                        color: '#586160',
                        fontSize: baseStyle.fontSize(14),
                        fontWeight: '400',
                        textAlign: 'left',
                        lineHeight: baseStyle.lineHight(22.4),
                      }}>
                      Select one or multiple options
                    </Text>
                    <Spacer isBasic />
                    {relationShipGoalsData?.map((val, key) => {
                      return (
                        <Tiles
                          key={key}
                          index={key}
                          title={val?.title}
                          activeIndex={goalIndex}
                          onPress={index => {
                            setGoalIndex(index);
                          }}
                        />
                      );
                    })}
                  </Wrapper>
                </View>
                {/*    Children & Family */}
                <View style={{flex: 1, width: Dimensions.get('window').width}}>
                  <Spacer isDoubleBase />
                  <Wrapper marginHorizontalLarge marginVerticalLarge>
                    <Text
                      style={{
                        fontSize: baseStyle.fontSize(30),
                        fontWeight: '900',
                        color: '#383838',
                        textAlign: 'left',
                      }}>
                      Children &{`\n`}Family
                    </Text>
                    <Spacer isBasic />
                    <Text
                      style={{
                        color: '#586160',
                        fontSize: baseStyle.fontSize(14),
                        fontWeight: '400',
                        textAlign: 'left',
                        lineHeight: baseStyle.lineHight(22.4),
                      }}>
                      Family Plans
                    </Text>
                    <Spacer isBasic />
                    {familyData?.map((val, key) => {
                      return (
                        <View key={key} style={{marginBottom: totalSize(1)}}>
                          <Tiles
                            key={key}
                            index={key}
                            title={val?.title}
                            activeIndex={familyIndex}
                            onPress={index => {
                              setFamilyIndex(index);
                            }}
                          />
                          {familyIndex === key && familyIndex === 1 ? (
                            <View style={{marginVertical: totalSize(1)}}>
                              <Text
                                style={{
                                  color: '#586160',
                                  fontSize: baseStyle.fontSize(14),
                                  fontWeight: '400',
                                }}>
                                How many kids do you have?
                              </Text>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  marginTop: totalSize(1),
                                }}>
                                {childrenData?.map((val, key) => {
                                  return (
                                    <TouchableOpacity
                                      key={key}
                                      onPress={() => setChildrenIndex(key)}
                                      style={{
                                        justifyContent: 'center',
                                        height: baseStyle.height(50),
                                        width: baseStyle.width(46),
                                        borderRadius: 8,
                                        borderColor: colors.appColor1,
                                        borderWidth:
                                          childrenIndex === key ? 1 : 0,
                                        backgroundColor:
                                          childrenIndex === key
                                            ? '#CA2D301A'
                                            : 'transparent',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                      }}>
                                      <Text
                                        style={{
                                          color:
                                            childrenIndex === key
                                              ? colors.appColor1
                                              : '#586160',
                                          fontSize: baseStyle.fontSize(12),
                                          fontWeight: '400',
                                        }}>
                                        {val?.title}
                                      </Text>
                                    </TouchableOpacity>
                                  );
                                })}
                              </View>
                            </View>
                          ) : null}
                        </View>
                      );
                    })}
                  </Wrapper>
                </View>
                {/* Gender/Sexual{`\n`}Orientation */}
                <View style={{flex: 1, width: Dimensions.get('window').width}}>
                  <Spacer isDoubleBase />
                  <Wrapper marginHorizontalLarge marginVerticalLarge>
                    <Text
                      style={{
                        fontSize: baseStyle.fontSize(30),
                        fontWeight: '900',
                        color: '#383838',
                        textAlign: 'left',
                      }}>
                      Gender/Sexual{`\n`}Orientation
                    </Text>
                    <Spacer isBasic />
                    <Text
                      style={{
                        color: '#586160',
                        fontSize: baseStyle.fontSize(14),
                        fontWeight: '400',
                        textAlign: 'left',
                        lineHeight: baseStyle.lineHight(22.4),
                      }}>
                      Select your gender
                    </Text>
                  </Wrapper>
                  <Wrapper marginHorizontalBase>
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setGenderType(0)}
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          paddingHorizontal: totalSize(1),
                          height: baseStyle.height(153),
                          marginRight: baseStyle.marginRight(8),
                          borderWidth: 1,
                          borderColor:
                            genderType === 0 ? colors.appColor1 : '#DEE1E1',
                          alignItems: 'center',
                          borderRadius: 10,
                          backgroundColor:
                            genderType === 0 ? '#CA2D301A' : 'transparent',
                        }}>
                        <SvgIcons.MaleIcon
                          fillColor={
                            genderType === 0 ? colors.appColor1 : '#DEE1E1'
                          }
                        />
                        <Spacer isBasic />
                        <Text
                          style={{
                            color:
                              genderType === 0 ? colors.appColor1 : '#586160',
                            fontSize: baseStyle.fontSize(14),
                            fontWeight: '400',
                            textAlign: 'center',
                          }}>
                          Male
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setGenderType(1)}
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          paddingHorizontal: totalSize(1),
                          height: baseStyle.height(153),
                          marginLeft: baseStyle.marginLeft(8),
                          borderWidth: 1,
                          borderColor:
                            genderType === 1 ? colors.appColor1 : '#DEE1E1',
                          alignItems: 'center',
                          borderRadius: 10,
                          backgroundColor:
                            genderType === 1 ? '#CA2D301A' : 'transparent',
                        }}>
                        <SvgIcons.FemaleIcon
                          fillColor={
                            genderType === 1 ? colors.appColor1 : '#DEE1E1'
                          }
                        />
                        <Spacer isBasic />
                        <Text
                          style={{
                            color:
                              genderType === 1 ? colors.appColor1 : '#586160',
                            fontSize: baseStyle.fontSize(14),
                            fontWeight: '400',
                            textAlign: 'center',
                          }}>
                          Female
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setGenderType(2)}
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          paddingHorizontal: totalSize(1),
                          height: baseStyle.height(153),
                          marginLeft: baseStyle.marginLeft(8),
                          borderWidth: 1,
                          borderColor:
                            genderType === 2 ? colors.appColor1 : '#DEE1E1',
                          alignItems: 'center',
                          borderRadius: 10,
                          backgroundColor:
                            genderType === 2 ? '#CA2D301A' : 'transparent',
                        }}>
                        <SvgIcons.OtherGenderIcon
                          fillColor={
                            genderType === 2 ? colors.appColor1 : '#DEE1E1'
                          }
                        />
                        <Spacer isBasic />
                        <Text
                          style={{
                            color:
                              genderType === 2 ? colors.appColor1 : '#586160',
                            fontSize: baseStyle.fontSize(14),
                            fontWeight: '400',
                            textAlign: 'center',
                          }}>
                          Non-binary
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </Wrapper>
                </View>
                {/*  Your{`\n`}Ethnicity */}
                <View
                  style={{
                    // marginBottom: baseStyle.marginBottom(300),
                    flex: 1,
                    width: Dimensions.get('window').width,
                  }}>
                  <Spacer isDoubleBase />
                  <Wrapper marginHorizontalLarge marginVerticalLarge>
                    <Text
                      style={{
                        fontSize: baseStyle.fontSize(30),
                        fontWeight: '900',
                        color: '#383838',
                        textAlign: 'left',
                      }}>
                      Your{`\n`}Ethnicity
                    </Text>
                    <Spacer isBasic />
                    <Text
                      style={{
                        color: '#586160',
                        fontSize: baseStyle.fontSize(14),
                        fontWeight: '400',
                        textAlign: 'left',
                        lineHeight: baseStyle.lineHight(22.4),
                      }}>
                      This is optional question
                    </Text>
                    <Spacer isBasic />
                    {ethnicityData?.map((val, key) => {
                      return (
                        <Tiles
                          key={key}
                          index={key}
                          title={val?.title}
                          activeIndex={ethnicityIndex}
                          onPress={index => {
                            setEthnicityIndex(index);
                          }}
                        />
                      );
                    })}
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setEthnicityIndex(null)}
                      style={{
                        borderColor:
                          ethnicityIndex === null
                            ? colors.appColor1
                            : '#DEE1E1',
                        borderWidth: 1,
                        borderRadius: 8,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          backgroundColor:
                            ethnicityIndex === null ? '#CA2D301A' : '#FFF',
                          paddingHorizontal: totalSize(2),
                          paddingVertical: totalSize(1),
                          marginBottom: totalSize(1),
                          borderBottomColor:
                            ethnicityIndex === null
                              ? colors.appColor1
                              : '#DEE1E1',
                          borderBottomWidth: 1,
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                        }}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                          <Text
                            style={{
                              color:
                                ethnicityIndex === null
                                  ? colors.appColor1
                                  : '#3F3F46',
                              fontSize: baseStyle.fontSize(14),
                              fontWeight: '400',
                            }}>
                            Other
                          </Text>
                        </View>
                        {ethnicityIndex === null && (
                          <View style={{justifyContent: 'center'}}>
                            <SvgIcons.CircleCheckRound
                              fillColor={colors.appColor1}
                            />
                          </View>
                        )}
                      </View>
                      <TextInput
                        placeholder="Write here"
                        style={{
                          paddingHorizontal: totalSize(1),
                          paddingBottom: totalSize(6),
                        }}
                        placeholderTextColor={
                          ethnicityIndex === null ? colors.appColor1 : '#3F3F46'
                        }
                      />
                    </TouchableOpacity>
                  </Wrapper>
                </View>
                {/*      Your{`\n`}Religion */}
                <View style={{flex: 1, width: Dimensions.get('window').width}}>
                  <Spacer isDoubleBase />
                  <Wrapper marginHorizontalLarge marginVerticalLarge>
                    <Text
                      style={{
                        fontSize: baseStyle.fontSize(30),
                        fontWeight: '900',
                        color: '#383838',
                        textAlign: 'left',
                      }}>
                      Your{`\n`}Religion
                    </Text>
                    <Spacer isBasic />
                    <Text
                      style={{
                        color: '#586160',
                        fontSize: baseStyle.fontSize(14),
                        fontWeight: '400',
                        textAlign: 'left',
                        lineHeight: baseStyle.lineHight(22.4),
                      }}>
                      This is optional question
                    </Text>
                    <Spacer isBasic />
                    {religionData?.map((val, key) => {
                      return (
                        <Tiles
                          key={key}
                          index={key}
                          title={val?.title}
                          activeIndex={religionIndex}
                          onPress={index => {
                            setReligionIndex(index);
                          }}
                        />
                      );
                    })}
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setReligionIndex(null)}
                      style={{
                        borderColor:
                          religionIndex === null ? colors.appColor1 : '#DEE1E1',
                        borderWidth: 1,
                        borderRadius: 8,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          backgroundColor:
                            religionIndex === null ? '#CA2D301A' : '#FFF',
                          paddingHorizontal: totalSize(2),
                          paddingVertical: totalSize(1),
                          marginBottom: totalSize(1),
                          borderBottomColor:
                            religionIndex === null
                              ? colors.appColor1
                              : '#DEE1E1',
                          borderBottomWidth: 1,
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                        }}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                          <Text
                            style={{
                              color:
                                religionIndex === null
                                  ? colors.appColor1
                                  : '#3F3F46',
                              fontSize: baseStyle.fontSize(14),
                              fontWeight: '400',
                            }}>
                            Other
                          </Text>
                        </View>
                        {religionIndex === null && (
                          <View style={{justifyContent: 'center'}}>
                            <SvgIcons.CircleCheckRound
                              fillColor={colors.appColor1}
                            />
                          </View>
                        )}
                      </View>
                      <TextInput
                        placeholder="Write here"
                        style={{
                          paddingHorizontal: totalSize(1),
                          paddingBottom: totalSize(6),
                        }}
                        placeholderTextColor={
                          religionIndex === null ? colors.appColor1 : '#3F3F46'
                        }
                      />
                    </TouchableOpacity>
                  </Wrapper>
                </View>
                {/*  Your{`\n`}Height */}
                <View style={{flex: 1, width: Dimensions.get('window').width}}>
                  <Spacer isDoubleBase />
                  <Wrapper marginHorizontalLarge marginVerticalLarge>
                    <Text
                      style={{
                        fontSize: baseStyle.fontSize(30),
                        fontWeight: '900',
                        color: '#383838',
                        textAlign: 'left',
                      }}>
                      Your{`\n`}Height
                    </Text>
                    <Spacer isBasic />
                    <Text
                      style={{
                        color: '#586160',
                        fontSize: baseStyle.fontSize(14),
                        fontWeight: '400',
                        textAlign: 'left',
                        lineHeight: baseStyle.lineHight(22.4),
                      }}>
                      This is optional question
                    </Text>
                    <Wrapper marginVerticalBase>
                      <View
                        style={{
                          flexDirection: 'row',
                          borderWidth: 1,
                          borderColor: '#383838',
                          borderRadius: 100,
                          width: '54%',
                        }}>
                        <TouchableOpacity
                          activeOpacity={0.7}
                          onPress={() => setHeightToggle(false)}
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            paddingHorizontal: totalSize(1),
                            paddingVertical: totalSize(1.2),
                            borderRadius: 100,
                            backgroundColor: !heightToggle
                              ? '#383838'
                              : 'transparent',
                          }}>
                          <Text
                            style={{
                              color: !heightToggle ? '#FFF' : '#586160',
                              fontSize: baseStyle.fontSize(14),
                              fontWeight: '400',
                              textAlign: 'center',
                            }}>
                            imperial
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          activeOpacity={0.7}
                          onPress={() => setHeightToggle(true)}
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            paddingHorizontal: totalSize(1),
                            paddingVertical: totalSize(1.2),
                            borderRadius: 100,
                            backgroundColor: heightToggle
                              ? '#383838'
                              : 'transparent',
                          }}>
                          <Text
                            style={{
                              color: heightToggle ? '#FFF' : '#586160',
                              fontSize: baseStyle.fontSize(14),
                              fontWeight: '400',
                              textAlign: 'center',
                            }}>
                            metric
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </Wrapper>
                  </Wrapper>
                  <View
                    style={{
                      paddingTop:
                        selectedId === 1 ? totalSize(0) : totalSize(3),
                      paddingBottom: totalSize(3),
                      backgroundColor: '#FFF',
                    }}>
                    <View
                      style={{
                        backgroundColor: '#FFF',
                        height: baseStyle.height(150),
                        overflow: 'hidden',
                      }}>
                      <FlatList
                        data={Data}
                        renderItem={({item}) => (
                          <Item
                            title={item.title}
                            isSelected={item.id === selectedId}
                          />
                        )}
                        keyExtractor={item => item.id}
                        horizontal={false}
                        numColumns={1}
                        showsVerticalScrollIndicator={false}
                        snapToInterval={50}
                        decelerationRate="fast"
                        onMomentumScrollEnd={e => {
                          const contentOffset = e.nativeEvent.contentOffset.y;
                          const selectedIndex = Math.round(
                            contentOffset / 50 + 1,
                          ); // Height of each item
                          console.log('selectedIndex =====> ', selectedIndex);
                          setSelectedId(Data[selectedIndex].id);
                        }}
                      />
                    </View>
                  </View>
                </View>
                {/* Your{`\n`}Hometown  */}
                <View style={{flex: 1, width: Dimensions.get('window').width}}>
                  <Spacer isDoubleBase />
                  <Wrapper marginHorizontalLarge marginVerticalLarge>
                    <Text
                      style={{
                        fontSize: baseStyle.fontSize(30),
                        fontWeight: '900',
                        color: '#383838',
                        textAlign: 'left',
                      }}>
                      Your{`\n`}Hometown
                    </Text>
                    <Spacer isBasic />
                    <Text
                      style={{
                        color: '#586160',
                        fontSize: baseStyle.fontSize(14),
                        fontWeight: '400',
                        textAlign: 'left',
                        lineHeight: baseStyle.lineHight(22.4),
                      }}>
                      Search Location
                    </Text>
                    <View
                      style={{
                        borderColor: '#DEE1E1',
                        borderWidth: baseStyle.borderWidth(1),
                        borderRadius: 8,
                        marginTop: totalSize(1),
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          borderRadius: 8,
                          backgroundColor: '#FFFFFF',
                          paddingHorizontal: totalSize(1),
                          paddingVertical: totalSize(1),
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                          borderBottomLeftRadius: searchLocation === '' ? 8 : 0,
                          borderBottomRightRadius:
                            searchLocation === '' ? 8 : 0,
                        }}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                          <TextInput
                            value={searchLocation}
                            placeholder="Search Location"
                            placeholderTextColor={'#586160'}
                            style={{paddingVertical: 0, color: '#3F3F46'}}
                            onChangeText={text => setSearchLocation(text)}
                          />
                        </View>
                        <View style={{justifyContent: 'center'}}>
                          <SvgIcons.SearchIcon />
                        </View>
                      </View>
                      {searchLocation !== '' && (
                        <View
                          style={{
                            paddingHorizontal: totalSize(1),
                            backgroundColor: '#FFF',
                            borderTopColor: '#DEE1E1',
                            borderTopWidth: 1,
                            paddingTop: totalSize(1),
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            overflow: 'hidden',
                          }}>
                          <ScrollView showsVerticalScrollIndicator={false}>
                            {locationData
                              ?.filter(item =>
                                item?.title?.match(
                                  new RegExp(searchLocation, 'i'),
                                ),
                              )
                              .map((val, key) => {
                                return (
                                  <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => {}}
                                    style={{paddingBottom: totalSize(1)}}>
                                    <Text
                                      style={{
                                        color: '#3F3F46',
                                        fontSize: baseStyle.fontSize(14),
                                        fontWeight: '400',
                                        textAlign: 'left',
                                        lineHeight: baseStyle.lineHight(22.4),
                                      }}>
                                      {val?.title}
                                    </Text>
                                  </TouchableOpacity>
                                );
                              })}
                          </ScrollView>
                        </View>
                      )}
                    </View>
                  </Wrapper>
                </View>
                {/*    Highest{`\n`}Degree */}
                <View style={{flex: 1, width: Dimensions.get('window').width}}>
                  <Spacer isDoubleBase />
                  <Wrapper marginHorizontalLarge marginVerticalLarge>
                    <Text
                      style={{
                        fontSize: baseStyle.fontSize(30),
                        fontWeight: '900',
                        color: '#383838',
                        textAlign: 'left',
                      }}>
                      Highest{`\n`}Degree
                    </Text>
                    <Spacer isBasic />
                    <Text
                      style={{
                        color: '#586160',
                        fontSize: baseStyle.fontSize(14),
                        fontWeight: '400',
                        textAlign: 'left',
                        lineHeight: baseStyle.lineHight(22.4),
                      }}>
                      This is optional question
                    </Text>
                    <Spacer isBasic />
                    {degreeData?.map((val, key) => {
                      return (
                        <Tiles
                          key={key}
                          index={key}
                          title={val?.title}
                          activeIndex={degreeIndex}
                          onPress={index => {
                            setDegreeIndex(index);
                          }}
                        />
                      );
                    })}
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setDegreeIndex(null)}
                      style={{
                        borderColor:
                          degreeIndex === null ? colors.appColor1 : '#DEE1E1',
                        borderWidth: 1,
                        borderRadius: 8,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          backgroundColor:
                            degreeIndex === null ? '#CA2D301A' : '#FFF',
                          paddingHorizontal: totalSize(2),
                          paddingVertical: totalSize(1),
                          marginBottom: totalSize(1),
                          borderBottomColor:
                            degreeIndex === null ? colors.appColor1 : '#DEE1E1',
                          borderBottomWidth: 1,
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                        }}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                          <Text
                            style={{
                              color:
                                degreeIndex === null
                                  ? colors.appColor1
                                  : '#3F3F46',
                              fontSize: baseStyle.fontSize(14),
                              fontWeight: '400',
                            }}>
                            Other
                          </Text>
                        </View>
                        {degreeIndex === null && (
                          <View style={{justifyContent: 'center'}}>
                            <SvgIcons.CircleCheckRound
                              fillColor={colors.appColor1}
                            />
                          </View>
                        )}
                      </View>
                      <TextInput
                        placeholder="Write here"
                        style={{
                          paddingHorizontal: totalSize(1),
                          paddingBottom: totalSize(6),
                        }}
                        placeholderTextColor={
                          degreeIndex === null ? colors.appColor1 : '#3F3F46'
                        }
                      />
                    </TouchableOpacity>
                  </Wrapper>
                </View>
                {/*   Current{`\n`}Occupation */}
                <View style={{flex: 1, width: Dimensions.get('window').width}}>
                  <Spacer isDoubleBase />
                  <Wrapper marginHorizontalLarge marginVerticalLarge>
                    <Text
                      style={{
                        fontSize: baseStyle.fontSize(30),
                        fontWeight: '900',
                        color: '#383838',
                        textAlign: 'left',
                      }}>
                      Current{`\n`}Occupation
                    </Text>
                    <Spacer isBasic />
                    <Text
                      style={{
                        color: '#586160',
                        fontSize: baseStyle.fontSize(14),
                        fontWeight: '400',
                        textAlign: 'left',
                        lineHeight: baseStyle.lineHight(22.4),
                      }}>
                      This is optional question
                    </Text>
                    <Spacer isBasic />
                    <View
                      style={{
                        borderColor: '#DEE1E1',
                        borderWidth: 1,
                        borderRadius: 8,
                        marginTop: totalSize(1),
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          borderRadius: 8,
                          backgroundColor: '#FFFFFF',
                          paddingHorizontal: totalSize(1),
                          paddingVertical: totalSize(1),
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                          borderBottomLeftRadius:
                            searchOccupation === '' ? 8 : 0,
                          borderBottomRightRadius:
                            searchOccupation === '' ? 8 : 0,
                        }}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                          <TextInput
                            value={searchOccupation}
                            placeholder="Search Occupation"
                            placeholderTextColor={'#586160'}
                            style={{paddingVertical: 0, color: '#3F3F46'}}
                            onChangeText={text => setSearchOccupation(text)}
                          />
                        </View>
                        <View style={{justifyContent: 'center'}}>
                          <SvgIcons.SearchIcon />
                        </View>
                      </View>
                      {searchOccupation !== '' && (
                        <View
                          style={{
                            paddingHorizontal: totalSize(1),
                            backgroundColor: '#FFF',
                            borderTopColor: '#DEE1E1',
                            borderTopWidth: 1,
                            paddingTop: totalSize(1),
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            overflow: 'hidden',
                          }}>
                          <ScrollView showsVerticalScrollIndicator={false}>
                            {occupationData
                              ?.filter(item =>
                                item?.title?.match(
                                  new RegExp(searchOccupation, 'i'),
                                ),
                              )
                              .map((val, key) => {
                                return (
                                  <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => {}}
                                    style={{paddingBottom: totalSize(1)}}>
                                    <Text
                                      style={{
                                        color: '#3F3F46',
                                        fontSize: baseStyle.fontSize(14),
                                        fontWeight: '400',
                                        textAlign: 'left',
                                        lineHeight: baseStyle.lineHight(22.4),
                                      }}>
                                      {val?.title}
                                    </Text>
                                  </TouchableOpacity>
                                );
                              })}
                          </ScrollView>
                        </View>
                      )}
                    </View>
                  </Wrapper>
                </View>
                {/*     Politics{`\n`}Status */}
                <View style={{flex: 1, width: Dimensions.get('window').width}}>
                  <Spacer isDoubleBase />
                  <Wrapper marginHorizontalLarge marginVerticalLarge>
                    <Text
                      style={{
                        fontSize: baseStyle.fontSize(30),
                        fontWeight: '900',
                        color: '#383838',
                        textAlign: 'left',
                      }}>
                      Politics{`\n`}Status
                    </Text>
                    <Spacer isBasic />
                    <Text
                      style={{
                        color: '#586160',
                        fontSize: baseStyle.fontSize(14),
                        fontWeight: '400',
                        textAlign: 'left',
                        lineHeight: baseStyle.lineHight(22.4),
                      }}>
                      This is optional question
                    </Text>
                    <Spacer isBasic />
                    {politicsStatusData?.map((val, key) => {
                      return (
                        <Tiles
                          key={key}
                          index={key}
                          title={val?.title}
                          activeIndex={politicsStatusIndex}
                          onPress={index => {
                            setPoliticsStatusIndex(index);
                          }}
                        />
                      );
                    })}
                  </Wrapper>
                </View>
                {/*  Select{`\n`}Options */}
                <View style={{flex: 1, width: Dimensions.get('window').width}}>
                  <Spacer isDoubleBase />
                  <Wrapper marginHorizontalLarge marginVerticalLarge>
                    <Text
                      style={{
                        fontSize: baseStyle.fontSize(30),
                        fontWeight: '900',
                        color: '#383838',
                        textAlign: 'left',
                      }}>
                      Select{`\n`}Options
                    </Text>
                  </Wrapper>
                  <Spacer isBasic />
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingHorizontal: totalSize(1),
                    }}>
                    <View style={{flex: 0.7, justifyContent: 'center'}}></View>
                    <View style={{flex: 0.5, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: baseStyle.fontSize(14),
                          fontWeight: '400',
                          color: '#586160',
                          textAlign: 'center',
                        }}>
                        Yes
                      </Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: baseStyle.fontSize(14),
                          fontWeight: '400',
                          color: '#586160',
                          textAlign: 'center',
                        }}>
                        Sometimes
                      </Text>
                    </View>
                    <View style={{flex: 0.5, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: baseStyle.fontSize(14),
                          fontWeight: '400',
                          color: '#586160',
                          textAlign: 'center',
                        }}>
                        No
                      </Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: baseStyle.fontSize(14),
                          fontWeight: '400',
                          color: '#586160',
                          textAlign: 'center',
                        }}>
                        Prefer not say
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingVertical: totalSize(3),
                      paddingHorizontal: totalSize(1),
                      borderBottomColor: '#DEE1E1',
                      borderBottomWidth: 1,
                    }}>
                    <View style={{flex: 0.7, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: baseStyle.fontSize(14),
                          fontWeight: '400',
                          color: '#586160',
                          textAlign: 'left',
                        }}>
                        Drinker
                      </Text>
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setDrinkerStatus(0)}
                      style={{
                        flex: 0.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <SvgIcons.CircleCheckRound
                        fillColor={
                          drinkerStatus === 0 ? colors.appColor1 : '#DEE1E1'
                        }
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setDrinkerStatus(1)}
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <SvgIcons.CircleCheckRound
                        fillColor={
                          drinkerStatus === 1 ? colors.appColor1 : '#DEE1E1'
                        }
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setDrinkerStatus(2)}
                      style={{
                        flex: 0.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <SvgIcons.CircleCheckRound
                        fillColor={
                          drinkerStatus === 2 ? colors.appColor1 : '#DEE1E1'
                        }
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setDrinkerStatus(3)}
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <SvgIcons.CircleCheckRound
                        fillColor={
                          drinkerStatus === 3 ? colors.appColor1 : '#DEE1E1'
                        }
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingVertical: totalSize(3),
                      paddingHorizontal: totalSize(1),
                      borderBottomColor: '#DEE1E1',
                      borderBottomWidth: 1,
                    }}>
                    <View style={{flex: 0.7, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: baseStyle.fontSize(14),
                          fontWeight: '400',
                          color: '#586160',
                          textAlign: 'left',
                        }}>
                        Smoker
                      </Text>
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setSmokerStatus(0)}
                      style={{
                        flex: 0.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <SvgIcons.CircleCheckRound
                        fillColor={
                          smokerStatus === 0 ? colors.appColor1 : '#DEE1E1'
                        }
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setSmokerStatus(1)}
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <SvgIcons.CircleCheckRound
                        fillColor={
                          smokerStatus === 1 ? colors.appColor1 : '#DEE1E1'
                        }
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setSmokerStatus(2)}
                      style={{
                        flex: 0.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <SvgIcons.CircleCheckRound
                        fillColor={
                          smokerStatus === 2 ? colors.appColor1 : '#DEE1E1'
                        }
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setSmokerStatus(3)}
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <SvgIcons.CircleCheckRound
                        fillColor={
                          smokerStatus === 3 ? colors.appColor1 : '#DEE1E1'
                        }
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingVertical: totalSize(3),
                      paddingHorizontal: totalSize(1),
                      borderBottomColor: '#DEE1E1',
                      borderBottomWidth: 1,
                    }}>
                    <View style={{flex: 0.7, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: baseStyle.fontSize(14),
                          fontWeight: '400',
                          color: '#586160',
                          textAlign: 'left',
                        }}>
                        Marijuana
                      </Text>
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setMarijuanaStatus(0)}
                      style={{
                        flex: 0.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <SvgIcons.CircleCheckRound
                        fillColor={
                          marijuanaStatus === 0 ? colors.appColor1 : '#DEE1E1'
                        }
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setMarijuanaStatus(1)}
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <SvgIcons.CircleCheckRound
                        fillColor={
                          marijuanaStatus === 1 ? colors.appColor1 : '#DEE1E1'
                        }
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setMarijuanaStatus(2)}
                      style={{
                        flex: 0.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <SvgIcons.CircleCheckRound
                        fillColor={
                          marijuanaStatus === 2 ? colors.appColor1 : '#DEE1E1'
                        }
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setMarijuanaStatus(3)}
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <SvgIcons.CircleCheckRound
                        fillColor={
                          marijuanaStatus === 3 ? colors.appColor1 : '#DEE1E1'
                        }
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingVertical: totalSize(3),
                      paddingHorizontal: totalSize(1),
                      borderBottomColor: '#DEE1E1',
                      borderBottomWidth: 1,
                    }}>
                    <View style={{flex: 0.7, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: baseStyle.fontSize(14),
                          fontWeight: '400',
                          color: '#586160',
                          textAlign: 'left',
                        }}>
                        Drugs
                      </Text>
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setDrugsStatus(0)}
                      style={{
                        flex: 0.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <SvgIcons.CircleCheckRound
                        fillColor={
                          drugsStatus === 0 ? colors.appColor1 : '#DEE1E1'
                        }
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setDrugsStatus(1)}
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <SvgIcons.CircleCheckRound
                        fillColor={
                          drugsStatus === 1 ? colors.appColor1 : '#DEE1E1'
                        }
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setDrugsStatus(2)}
                      style={{
                        flex: 0.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <SvgIcons.CircleCheckRound
                        fillColor={
                          drugsStatus === 2 ? colors.appColor1 : '#DEE1E1'
                        }
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setDrugsStatus(3)}
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <SvgIcons.CircleCheckRound
                        fillColor={
                          drugsStatus === 3 ? colors.appColor1 : '#DEE1E1'
                        }
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                {/*   Select{`\n`}Prompts */}
                <View
                  style={{
                    //  marginBottom: 400,
                    flex: 1,
                    width: Dimensions.get('window').width,
                  }}>
                  <Spacer isDoubleBase />
                  <Wrapper marginHorizontalLarge marginVerticalTiny>
                    <Text
                      style={{
                        fontSize: baseStyle.fontSize(30),
                        fontWeight: '900',
                        color: '#383838',
                        textAlign: 'left',
                      }}>
                      Select{`\n`}Prompts
                    </Text>
                    <Spacer isTiny />
                    {!promptsActive ? (
                      <>
                        <Text
                          style={{
                            color: '#586160',
                            fontSize: baseStyle.fontSize(14),
                            fontWeight: '400',
                            textAlign: 'left',
                            lineHeight: baseStyle.lineHight(22.4),
                          }}>
                          This is optional question
                        </Text>
                        <Spacer isTiny />
                        <View
                          style={{
                            borderColor: colors.appColor1,
                            borderWidth: 1,
                            borderRadius: 8,
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              backgroundColor: '#CA2D301A',
                              paddingHorizontal: totalSize(2),
                              paddingVertical: totalSize(1),
                              marginBottom: totalSize(1),
                              borderBottomColor: colors.appColor1,
                              borderBottomWidth: 1,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                            }}>
                            <View style={{flex: 1, justifyContent: 'center'}}>
                              <Text
                                style={{
                                  color: colors.appColor1,
                                  fontSize: baseStyle.fontSize(14),
                                  fontWeight: '400',
                                }}>
                                Typical Sunday
                              </Text>
                            </View>
                            <View style={{justifyContent: 'center'}}>
                              <SvgIcons.PlusIcon fillColor={colors.appColor1} />
                            </View>
                          </View>
                          <TextInput
                            placeholder="Write here"
                            placeholderTextColor={colors.appColor1}
                            style={{
                              paddingHorizontal: totalSize(1),
                              paddingBottom: totalSize(6),
                            }}
                          />
                        </View>
                        <Spacer isTiny />
                        <Tiles
                          index={1}
                          activeIndex={0}
                          plusIcon={true}
                          title={'Select a Prompt'}
                          onPress={() => setPromptsActive(true)}
                        />
                        <Tiles
                          index={1}
                          activeIndex={0}
                          plusIcon={true}
                          title={'Select a Prompt'}
                          onPress={() => setPromptsActive(true)}
                        />
                        <Spacer isTiny />
                        <Text
                          style={{
                            color: '#586160',
                            fontSize: baseStyle.fontSize(14),
                            fontWeight: '400',
                            textAlign: 'left',
                            lineHeight: baseStyle.lineHight(22.4),
                          }}>
                          Voice Prompt
                        </Text>
                        <Spacer isTiny />
                        <View
                          style={{
                            borderColor: colors.appColor1,
                            borderWidth: 1,
                            borderRadius: 8,
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              backgroundColor: '#CA2D301A',
                              paddingHorizontal: totalSize(2),
                              paddingVertical: totalSize(1),
                              marginBottom: totalSize(1),
                              borderBottomColor: colors.appColor1,
                              borderBottomWidth: 1,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                            }}>
                            <View style={{flex: 1, justifyContent: 'center'}}>
                              <Text
                                style={{
                                  color: colors.appColor1,
                                  fontSize: baseStyle.fontSize(14),
                                  fontWeight: '400',
                                }}>
                                Most irrational fear
                              </Text>
                            </View>
                            <View style={{justifyContent: 'center'}}>
                              <SvgIcons.PlusIcon fillColor={colors.appColor1} />
                            </View>
                          </View>
                          <View
                            style={{
                              height: baseStyle.height(120),
                              width: '100%',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            {!audioRecorder ? (
                              <Buttons.Colored
                                text="Record your answer"
                                onPress={() => setAudioRecorder(true)}
                                buttonStyle={{
                                  marginHorizontal: 0,
                                  paddingHorizontal: totalSize(3),
                                }}
                              />
                            ) : (
                              <View style={{alignItems: 'center'}}>
                                <SvgIcons.AudioIcon />
                                <Spacer isBasic />
                                <View
                                  style={{
                                    backgroundColor: '#E7E9E9',
                                    height: baseStyle.height(6),
                                    width: baseStyle.width(200),
                                    borderRadius: 100,
                                  }}>
                                  <View
                                    style={{
                                      backgroundColor: colors.appColor1,
                                      height: baseStyle.height(6),
                                      width: '30%',
                                      borderRadius: 100,
                                    }}></View>
                                </View>
                                <Spacer isTiny />
                                <View
                                  style={{flexDirection: 'row', width: 200}}>
                                  <View
                                    style={{flex: 1, justifyContent: 'center'}}>
                                    <Text
                                      style={{
                                        color: colors.appColor1,
                                        fontSize: baseStyle.fontSize(30),
                                        fontWeight: '400',
                                      }}>
                                      06:04
                                    </Text>
                                  </View>
                                  <View style={{justifyContent: 'center'}}>
                                    <SvgIcons.ResumeIcon />
                                  </View>
                                </View>
                              </View>
                            )}
                          </View>
                        </View>
                      </>
                    ) : (
                      <>
                        <Spacer isTiny />
                        {promptsData?.map((val, key) => {
                          return (
                            <Tiles
                              key={key}
                              index={key}
                              title={val?.title}
                              activeIndex={promptsIndex}
                              onPress={index => {
                                setPromptsIndex(index);
                                setTimeout(() => {
                                  setPromptsActive(false);
                                }, 200);
                              }}
                            />
                          );
                        })}
                      </>
                    )}
                  </Wrapper>
                </View>
                {/* Add Photos */}
                <View style={{flex: 1, width: Dimensions.get('window').width}}>
                  <Spacer isDoubleBase />
                  <Wrapper marginHorizontalLarge marginVerticalLarge>
                    <Text
                      style={{
                        fontSize: baseStyle.fontSize(30),
                        fontWeight: '900',
                        color: '#383838',
                        textAlign: 'center',
                      }}>
                      Add Photos
                    </Text>
                    <Spacer isBasic />
                    <Text
                      style={{
                        color: '#586160',
                        fontSize: baseStyle.fontSize(14),
                        fontWeight: '400',
                        textAlign: 'center',
                        lineHeight: baseStyle.lineHight(22.4),
                      }}>
                      Add 6 photos to get started
                    </Text>
                    <Spacer isDoubleBase />
                    <View style={{flexDirection: 'row'}}>
                      {imageOne !== null ? (
                        <TouchableOpacity
                          onPress={() => selectImageHandle('one')}
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            height: baseStyle.height(116),
                            width: baseStyle.width(116),
                            borderColor: '#DEE1E1',
                            borderWidth: 1,
                            borderRadius: 8,
                            marginRight: totalSize(1),
                          }}>
                          <Image
                            source={{uri: imageOne}}
                            style={{
                              height: '100%',
                              width: '100%',
                              resizeMode: 'cover',
                              borderRadius: 8,
                            }}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() => selectImageHandle('one')}
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: baseStyle.height(116),
                            width: baseStyle.width(116),
                            backgroundColor: '#FFF',
                            borderColor: '#DEE1E1',
                            borderWidth: 1,
                            borderRadius: 8,
                            marginRight: totalSize(1),
                          }}>
                          <SvgIcons.PlusIcon fillColor={colors.appColor1} />
                        </TouchableOpacity>
                      )}
                      {imageTwo !== null ? (
                        <TouchableOpacity
                          onPress={() => selectImageHandle('two')}
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            height: baseStyle.height(116),
                            width: baseStyle.width(116),
                            borderColor: '#DEE1E1',
                            borderWidth: 1,
                            borderRadius: 8,
                            marginRight: totalSize(1),
                          }}>
                          <Image
                            source={{uri: imageTwo}}
                            style={{
                              height: '100%',
                              width: '100%',
                              resizeMode: 'cover',
                              borderRadius: 8,
                            }}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() => selectImageHandle('two')}
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: baseStyle.height(116),
                            width: baseStyle.width(116),
                            backgroundColor: '#FFF',
                            borderColor: '#DEE1E1',
                            borderWidth: 1,
                            borderRadius: 8,
                            marginRight: totalSize(1),
                          }}>
                          <SvgIcons.PlusIcon fillColor={colors.appColor1} />
                        </TouchableOpacity>
                      )}
                      {imageThree !== null ? (
                        <TouchableOpacity
                          onPress={() => selectImageHandle('three')}
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            height: baseStyle.height(116),
                            width: baseStyle.width(116),
                            borderColor: '#DEE1E1',
                            borderWidth: 1,
                            borderRadius: 8,
                          }}>
                          <Image
                            source={{uri: imageThree}}
                            style={{
                              height: '100%',
                              width: '100%',
                              resizeMode: 'cover',
                              borderRadius: 8,
                            }}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() => selectImageHandle('three')}
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: baseStyle.height(116),
                            width: baseStyle.width(116),
                            backgroundColor: '#FFF',
                            borderColor: '#DEE1E1',
                            borderWidth: 1,
                            borderRadius: 8,
                          }}>
                          <SvgIcons.PlusIcon fillColor={colors.appColor1} />
                        </TouchableOpacity>
                      )}
                    </View>
                    <Spacer isBasic />
                    <View style={{flexDirection: 'row'}}>
                      {imageFour !== null ? (
                        <TouchableOpacity
                          onPress={() => selectImageHandle('four')}
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            height: baseStyle.height(116),
                            width: baseStyle.width(116),
                            borderColor: '#DEE1E1',
                            borderWidth: 1,
                            borderRadius: 8,
                            marginRight: totalSize(1),
                          }}>
                          <Image
                            source={{uri: imageFour}}
                            style={{
                              height: '100%',
                              width: '100%',
                              resizeMode: 'cover',
                              borderRadius: 8,
                            }}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() => selectImageHandle('four')}
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: baseStyle.height(116),
                            width: baseStyle.width(116),
                            backgroundColor: '#FFF',
                            borderColor: '#DEE1E1',
                            borderWidth: 1,
                            borderRadius: 8,
                            marginRight: totalSize(1),
                          }}>
                          <SvgIcons.PlusIcon fillColor={colors.appColor1} />
                        </TouchableOpacity>
                      )}
                      {imageFive !== null ? (
                        <TouchableOpacity
                          onPress={() => selectImageHandle('five')}
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            height: baseStyle.height(116),
                            width: baseStyle.width(116),
                            borderColor: '#DEE1E1',
                            borderWidth: 1,
                            borderRadius: 8,
                            marginRight: totalSize(1),
                          }}>
                          <Image
                            source={{uri: imageFive}}
                            style={{
                              height: '100%',
                              width: '100%',
                              resizeMode: 'cover',
                              borderRadius: 8,
                            }}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() => selectImageHandle('five')}
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: baseStyle.height(116),
                            width: baseStyle.width(116),
                            backgroundColor: '#FFF',
                            borderColor: '#DEE1E1',
                            borderWidth: 1,
                            borderRadius: 8,
                            marginRight: totalSize(1),
                          }}>
                          <SvgIcons.PlusIcon fillColor={colors.appColor1} />
                        </TouchableOpacity>
                      )}
                      {imageSix !== null ? (
                        <TouchableOpacity
                          onPress={() => selectImageHandle('six')}
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            height: baseStyle.height(116),
                            width: baseStyle.width(116),
                            borderColor: '#DEE1E1',
                            borderWidth: 1,
                            borderRadius: 8,
                          }}>
                          <Image
                            source={{uri: imageSix}}
                            style={{
                              height: '100%',
                              width: '100%',
                              resizeMode: 'cover',
                              borderRadius: 8,
                            }}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() => selectImageHandle('six')}
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: baseStyle.height(116),
                            width: baseStyle.width(116),
                            backgroundColor: '#FFF',
                            borderColor: '#DEE1E1',
                            borderWidth: 1,
                            borderRadius: 8,
                          }}>
                          <SvgIcons.PlusIcon fillColor={colors.appColor1} />
                        </TouchableOpacity>
                      )}
                    </View>
                  </Wrapper>
                </View>
              </ScrollView>
              {!promptsActive && (
                <Wrapper
                  marginHorizontalLarge
                  style={{
                    flexDirection: 'row',
                    marginBottom: totalSize(3),
                    //  marginTop: -500,
                  }}>
                  {currentIndex !== 0 && (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        marginRight: baseStyle.marginRight(6),
                      }}>
                      <Buttons.Colored
                        text="Back"
                        textStyle={{color: '#586160'}}
                        onPress={() => nextPageHandle(currentIndex - 1)}
                        buttonStyle={{
                          marginHorizontal: 0,
                          backgroundColor: '#E7E9E9',
                          borderWidth: 0,
                        }}
                      />
                    </View>
                  )}
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      marginLeft: currentIndex !== 0 ? 6 : 0,
                    }}>
                    <Buttons.Colored
                      text="Next"
                      buttonStyle={{marginHorizontal: 0}}
                      onPress={() => {
                        if (currentIndex === 9) {
                          setMoreStepScreenActive(true);
                        } else if (currentIndex === 12) {
                          navigation.navigate('ProfileCompleted', {
                            profileImage: imageOne,
                          });
                        } else {
                          nextPageHandle(currentIndex + 1);
                        }
                      }}
                    />
                  </View>
                </Wrapper>
              )}
              <Spacer isDoubleBase />
            </ScrollView>
          </KeyboardAvoidingView>
        </Wrapper>
      ) : (
        <Wrapper
          isMain
          style={{
            flex: 1,
            backgroundColor: colors.appColor1,
            justifyContent: 'center',
          }}>
          <CustomStatusBar
            barStyle={'dark'}
            backgroundColor={colors.appColor1}
          />
          <Wrapper marginHorizontalLarge marginVerticalLarge>
            <Wrapper marginHorizontalBase marginVerticalLarge>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: baseStyle.fontSize(14),
                  fontWeight: '400',
                  textAlign: 'left',
                  lineHeight: baseStyle.lineHight(22.4),
                }}>
                Almost Done
              </Text>
              <Spacer isBasic />
              <Text
                style={{
                  fontSize: baseStyle.fontSize(30),
                  fontWeight: '900',
                  color: '#FFFFFF',
                  textAlign: 'left',
                }}>
                Just few{`\n`}more{`\n`}steps
              </Text>
              <Spacer isDoubleBase />
              <Buttons.Colored
                text="Keep going!"
                textStyle={{color: '#383838'}}
                onPress={() => {
                  setMoreStepScreenActive(false);
                  setTimeout(() => {
                    nextPageHandle(currentIndex + 1);
                  }, 1);
                }}
                buttonStyle={{marginHorizontal: 0, backgroundColor: '#FFFFFF'}}
              />
            </Wrapper>
          </Wrapper>
        </Wrapper>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    width: '70%',
    height: 50,
  },
  selectedItem: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#DEE1E1',
  },
  itemText: {
    fontSize: baseStyle.fontSize(12),
    textAlign: 'center',
    fontWeight: 400,
    color: '#383838',
    opacity: 0.5,
  },
  selectedText: {
    opacity: 1,
  },
});

export default Profile;
