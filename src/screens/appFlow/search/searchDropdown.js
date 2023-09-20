import {ScrollView, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  Wrapper,
  Text,
  TextInputs,
  CustomStatusBar,
  Spacer,
  Lines,
  Tiles,
  ScrollViews,
} from '../../../components';
import {baseStyle, colors, routes} from '../../../services';
import {Icon} from '@rneui/base';
import {totalSize} from 'react-native-dimension';
import {SvgIcons} from '../../../services/constants/svg';
import {navigate} from '../../../navigation/rootNavigation';

export default function SearchDropDown() {
  const [showDropDownOne, setShowDropDownOne] = useState(false);
  const [showDropDownTwo, setShowDropDownTwo] = useState(false);
  const [showDropDownThree, setShowDropDownThree] = useState(false);
  const [showDropDownFour, setShowDropDownFour] = useState(false);
  const [showDropDownFive, setShowDropDownFive] = useState(false);
  const [showDropDownSix, setShowDropDownSix] = useState(false);
  const [showDropDownSeven, setShowDropDownSeven] = useState(false);
  const [showDropDownEight, setShowDropDownEight] = useState(false);
  const [showDropDownNine, setShowDropDownNine] = useState(false);
  const [showDropDownTen, setShowDropDownTen] = useState(false);
  const [showDropDownEleven, setShowDropDownEleven] = useState(false);
  const [showDropDownTwelve, setShowDropDownTwelve] = useState(false);

  {
    /* Relationship Goals */
  }
  const [goal, setGoal] = useState('Not Selected');
  const [goalIndex, setGoalIndex] = useState(null);
  {
    /* Family plans */
  }
  const [familyPlans, setfamilyPlans] = useState('Not Selected');
  const [familyIndex, setFamilyIndex] = useState(null);
  {
    /* Gender Data */
  }
  const [GenderData, setGenderData] = useState('Not Selected');
  const [GenderIndex, setGenderIndex] = useState(null);
  {
    /* Ethnicity */
  }
  const [ethnicityValue, setEthnicityValue] = useState('Not Selected');
  const [ethnicityIndex, setEthnicityIndex] = useState(null);
  {
    /* Degree */
  }
  const [degreeValue, setDegreeValue] = useState('Not Selected');
  const [degreeIndex, setDegreeIndex] = useState(null);
  {
    /* Religion */
  }
  const [religionValue, setReligionValue] = useState('Not Selected');
  const [religionIndex, setReligionIndex] = useState(null);
  {
    /* Ocuupation */
  }
  const [occupatoinValue, setOccupatoinValue] = useState('Not Selected');
  const [occupatoinIndex, setOccupatoinIndex] = useState(null);
  {
    /* ُPolitics */
  }
  const [politicsValue, setPoliticsValue] = useState('Not Selected');
  const [politicsStatusIndex, setPoliticsStatusIndex] = useState(null);

  {
    /* ُDrink */
  }
  const [drinkValue, setDrinkValue] = useState('Not Selected');
  const [drinkIndex, setDrinkIndex] = useState(null);
  {
    /* ُ Smoke */
  }
  const [smokeValue, setSmokeValue] = useState('Not Selected');
  const [smokeIndex, setSmokeIndex] = useState(null);
  {
    /* ُ Drug */
  }
  const [drugValue, setDrugValue] = useState('Not Selected');
  const [drugIndex, setDrugIndex] = useState(null);
  {
    /* ُ Location */
  }
  const [locationValue, setLocationValue] = useState('Not Selected');
  const [searchLocation, setSearchLocation] = useState('');

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
    {id: 5, title: 'Other'},
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
  const Gender = [
    {id: '0', title: 'Male'},
    {id: '1', title: 'Female'},
    {id: '2', title: 'Other'},
  ];
  const DrinkData = [
    {id: '0', title: 'Yes'},
    {id: '1', title: 'No'},
  ];
  const SmokeData = [
    {id: '0', title: 'Yes'},
    {id: '1', title: 'No'},
  ];
  const DrugsData = [
    {id: '0', title: 'Yes'},
    {id: '1', title: 'No'},
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
  const searchData = [
    {id: 0, title: 'Relationship Goals', value: 'Goal One', number: 2145},
    {id: 1, title: 'Family Plans', value: 'Open to children', number: 2145},
    {id: 2, title: 'Gender', value: 'Female', number: 2145},
    {id: 3, title: 'Ethnicity', value: 'Ethnicity', number: 2145},
    {id: 4, title: 'Hometown', value: 'London', number: 2145},
    {id: 5, title: 'Degree', value: 'Not Selected', number: 2145},
    {id: 6, title: 'Occupation', value: 'Not Selected', number: 2145},
    {id: 7, title: 'Politics', value: 'Not Selected', number: 2145},
    {id: 8, title: 'Drink', value: 'Not Selected', number: 2145},
    {id: 9, title: 'Smoke', value: 'Not Selected', number: 2145},
    {id: 10, title: 'Drugs', value: 'Not Selected', number: 2145},
  ];
  return (
    <Wrapper isMain style={{backgroundColor: colors.appTextColor11}}>
      <CustomStatusBar
        barStyle={'dark'}
        backgroundColor={colors.appTextColor11}
      />
      <ScrollViews.KeyboardAvoiding>
        <Wrapper marginVerticalLarge marginHorizontalBase>
          {/* <TextInputs.Underlined
            editable={false}
            value={"Let's Search"}
            // placeholder={'Search'}
            iconNameRight={'search'}
            iconTypeRight={'feather'}
            iconColorRight={colors.snow}
            inputStyle={{color: colors.snow, fontSize: baseStyle.fontSize(16)}}
            // placeholderTextColor={colors.snow}
          /> */}
          <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
            {/*  Left */}
            <Text
              isWhite
              style={{fontSize: baseStyle.fontSize(20), fontWeight: 800}}>
              Let's Search
            </Text>
            {/* Right */}
            <Wrapper flexDirectionRow alignItemsCenter>
              {/* total record */}
              <Wrapper
                marginHorizontalSmall
                paddingVerticalTiny
                alignItemsCenter
                justifyContentCenter
                paddingHorizontalBase
                style={{
                  backgroundColor: colors.appBgColor12,
                  borderRadius: 33,
                }}>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.black,
                    fontWeight: 900,
                  }}>
                  545
                </Text>
              </Wrapper>
              {/* Icon */}
              <TouchableOpacity onPress={() => navigate(routes.SearchStack)}>
                <Icon name="search" type="feather" color={colors.snow} />
              </TouchableOpacity>
            </Wrapper>
          </Wrapper>

          <Spacer isTiny />
          <Lines.Horizontal height={1} color={colors.border1} />
        </Wrapper>
        {/*  Relationship Goals  */}
        <Wrapper>
          <TouchableOpacity
            onPress={() => setShowDropDownOne(!showDropDownOne)}>
            <Lines.Horizontal color={colors.border1} />
            <Wrapper
              alignItemsCenter
              marginHorizontalBase
              marginVerticalSmall
              flexDirectionRow
              justifyContentSpaceBetween>
              <Wrapper>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.appBgColor12,
                  }}>
                  Relationship Goals
                </Text>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(16),
                    color: colors.snow,
                    fontWeight: 900,
                  }}>
                  {goal}
                </Text>
              </Wrapper>
              <Wrapper
                paddingVerticalTiny
                alignItemsCenter
                justifyContentCenter
                paddingHorizontalBase
                style={{
                  backgroundColor: colors.appBgColor12,
                  borderRadius: 33,
                }}>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.black,
                    fontWeight: 900,
                  }}>
                  545
                </Text>
              </Wrapper>
            </Wrapper>
          </TouchableOpacity>
          <Wrapper marginHorizontalBase>
            {showDropDownOne &&
              relationShipGoalsData.map((val, key) => {
                return (
                  <Tiles
                    key={key}
                    index={key}
                    title={val?.title}
                    activeIndex={goalIndex}
                    onPress={index => {
                      setGoalIndex(index);
                      setGoal(val?.title);
                      setShowDropDownOne(!showDropDownOne);
                    }}
                  />
                );
              })}
          </Wrapper>
          <Lines.Horizontal color={colors.border1} />
        </Wrapper>
        {/*Family plans*/}
        <Wrapper>
          <TouchableOpacity
            onPress={() => setShowDropDownTwo(!showDropDownTwo)}>
            <Wrapper
              alignItemsCenter
              marginHorizontalBase
              marginVerticalSmall
              flexDirectionRow
              justifyContentSpaceBetween>
              <Wrapper>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.appBgColor12,
                  }}>
                  Family Plans
                </Text>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(16),
                    color: colors.snow,
                    fontWeight: 900,
                  }}>
                  {familyPlans}
                </Text>
              </Wrapper>
              <Wrapper
                paddingVerticalTiny
                alignItemsCenter
                justifyContentCenter
                paddingHorizontalBase
                style={{
                  backgroundColor: colors.appBgColor12,
                  borderRadius: 33,
                }}>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.black,
                    fontWeight: 900,
                  }}>
                  156
                </Text>
              </Wrapper>
            </Wrapper>
          </TouchableOpacity>
          <Wrapper marginHorizontalBase>
            {showDropDownTwo &&
              familyData.map((val, key) => {
                return (
                  <Tiles
                    key={key}
                    index={key}
                    title={val?.title}
                    activeIndex={familyIndex}
                    onPress={index => {
                      setFamilyIndex(index);
                      setfamilyPlans(val?.title);
                      setShowDropDownTwo(!showDropDownTwo);
                    }}
                  />
                );
              })}
          </Wrapper>
          <Lines.Horizontal color={colors.border1} />
        </Wrapper>
        {/* Gender Data */}
        <Wrapper>
          <TouchableOpacity
            onPress={() => setShowDropDownThree(!showDropDownThree)}>
            <Wrapper
              alignItemsCenter
              marginHorizontalBase
              marginVerticalSmall
              flexDirectionRow
              justifyContentSpaceBetween>
              <Wrapper>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.appBgColor12,
                  }}>
                  Gender
                </Text>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(16),
                    color: colors.snow,
                    fontWeight: 900,
                  }}>
                  {GenderData}
                </Text>
              </Wrapper>
              <Wrapper
                paddingVerticalTiny
                alignItemsCenter
                justifyContentCenter
                paddingHorizontalBase
                style={{
                  backgroundColor: colors.appBgColor12,
                  borderRadius: 33,
                }}>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.black,
                    fontWeight: 900,
                  }}>
                  545
                </Text>
              </Wrapper>
            </Wrapper>
          </TouchableOpacity>
          <Wrapper marginHorizontalBase>
            {showDropDownThree &&
              Gender.map((val, key) => {
                return (
                  <Tiles
                    key={key}
                    index={key}
                    title={val?.title}
                    activeIndex={GenderIndex}
                    onPress={index => {
                      setGenderIndex(index);
                      setGenderData(val?.title);
                      setShowDropDownThree(!showDropDownThree);
                    }}
                  />
                );
              })}
          </Wrapper>
          <Lines.Horizontal color={colors.border1} />
        </Wrapper>
        {/* Religion */}
        <Wrapper>
          <TouchableOpacity
            onPress={() => setShowDropDownTwelve(!showDropDownTwelve)}>
            <Wrapper
              alignItemsCenter
              marginHorizontalBase
              marginVerticalSmall
              flexDirectionRow
              justifyContentSpaceBetween>
              <Wrapper>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.appBgColor12,
                  }}>
                  Religion
                </Text>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(16),
                    color: colors.snow,
                    fontWeight: 900,
                  }}>
                  {religionValue}
                </Text>
              </Wrapper>
              <Wrapper
                paddingVerticalTiny
                alignItemsCenter
                justifyContentCenter
                paddingHorizontalBase
                style={{
                  backgroundColor: colors.appBgColor12,
                  borderRadius: 33,
                }}>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.black,
                    fontWeight: 900,
                  }}>
                  545
                </Text>
              </Wrapper>
            </Wrapper>
          </TouchableOpacity>
          <Wrapper marginHorizontalBase>
            {showDropDownTwelve &&
              religionData.map((val, key) => {
                return (
                  <Tiles
                    key={key}
                    index={key}
                    title={val?.title}
                    activeIndex={religionIndex}
                    onPress={index => {
                      setReligionIndex(index);
                      setReligionValue(val?.title);
                      setShowDropDownTwelve(!showDropDownTwelve);
                    }}
                  />
                );
              })}
          </Wrapper>
          <Lines.Horizontal color={colors.border1} />
        </Wrapper>
        {/* Ethinicity */}
        <Wrapper>
          <TouchableOpacity
            onPress={() => setShowDropDownFour(!showDropDownFour)}>
            <Wrapper
              alignItemsCenter
              marginHorizontalBase
              marginVerticalSmall
              flexDirectionRow
              justifyContentSpaceBetween>
              <Wrapper>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.appBgColor12,
                  }}>
                  Ethnicity
                </Text>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(16),
                    color: colors.snow,
                    fontWeight: 900,
                  }}>
                  {ethnicityValue}
                </Text>
              </Wrapper>
              <Wrapper
                paddingVerticalTiny
                alignItemsCenter
                justifyContentCenter
                paddingHorizontalBase
                style={{
                  backgroundColor: colors.appBgColor12,
                  borderRadius: 33,
                }}>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.black,
                    fontWeight: 900,
                  }}>
                  545
                </Text>
              </Wrapper>
            </Wrapper>
          </TouchableOpacity>
          <Wrapper marginHorizontalBase>
            {showDropDownFour &&
              ethnicityData.map((val, key) => {
                return (
                  <Tiles
                    key={key}
                    index={key}
                    title={val?.title}
                    activeIndex={ethnicityIndex}
                    onPress={index => {
                      setEthnicityIndex(index);
                      setEthnicityValue(val?.title);
                      setShowDropDownFour(!showDropDownFour);
                    }}
                  />
                );
              })}
          </Wrapper>
          <Lines.Horizontal color={colors.border1} />
        </Wrapper>
        {/* Home Town */}
        <Wrapper>
          <TouchableOpacity
            onPress={() => setShowDropDownFive(!showDropDownFive)}>
            <Wrapper
              alignItemsCenter
              marginHorizontalBase
              marginVerticalSmall
              flexDirectionRow
              justifyContentSpaceBetween>
              <Wrapper>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.appBgColor12,
                  }}>
                  Hometown
                </Text>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(16),
                    color: colors.snow,
                    fontWeight: 900,
                  }}>
                  {locationValue}
                </Text>
              </Wrapper>
              <Wrapper
                paddingVerticalTiny
                alignItemsCenter
                justifyContentCenter
                paddingHorizontalBase
                style={{
                  backgroundColor: colors.appBgColor12,
                  borderRadius: 33,
                }}>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.black,
                    fontWeight: 900,
                  }}>
                  545
                </Text>
              </Wrapper>
            </Wrapper>
          </TouchableOpacity>
          {showDropDownFive && (
            <Wrapper marginHorizontalBase marginVerticalSmall>
              <View
                style={{
                  borderColor: '#4A5458',
                  borderWidth: baseStyle.borderWidth(1),
                  borderRadius: 8,
                  marginTop: totalSize(1),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    borderRadius: 8,
                    backgroundColor: 'transparent',
                    paddingHorizontal: totalSize(1),
                    paddingVertical: totalSize(1),
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    borderBottomLeftRadius: searchLocation === '' ? 8 : 0,
                    borderBottomRightRadius: searchLocation === '' ? 8 : 0,
                  }}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <TextInput
                      value={searchLocation}
                      placeholder="Search Location"
                      placeholderTextColor={colors.snow}
                      style={{paddingVertical: 0, color: colors.snow}}
                      onChangeText={text => setSearchLocation(text)}
                    />
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 32,
                      height: 32,
                      borderRadius: 32 / 2,
                      backgroundColor: colors.appBgColor12,
                    }}>
                    <SvgIcons.SearchIcon />
                  </View>
                </View>
                {searchLocation !== '' && (
                  <View
                    style={{
                      paddingHorizontal: totalSize(1),
                      backgroundColor: 'transparent',
                      borderTopColor: '#DEE1E1',
                      borderColor: '#4A5458',
                      borderTopWidth: 1,
                      paddingTop: totalSize(1),
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      overflow: 'hidden',
                    }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                      {locationData
                        ?.filter(item =>
                          item?.title?.match(new RegExp(searchLocation, 'i')),
                        )
                        .map((val, key) => {
                          return (
                            <TouchableOpacity
                              activeOpacity={0.7}
                              onPress={() => {
                                setLocationValue(val?.title);
                                setShowDropDownFive(!showDropDownFive);
                              }}
                              style={{paddingBottom: totalSize(1)}}>
                              <Text
                                style={{
                                  color: colors.snow,
                                  fontSize: baseStyle.fontSize(16),
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
          )}
          <Lines.Horizontal color={colors.border1} />
        </Wrapper>
        {/* Degree */}
        <Wrapper>
          <TouchableOpacity
            onPress={() => setShowDropDownSix(!showDropDownSix)}>
            <Wrapper
              alignItemsCenter
              marginHorizontalBase
              marginVerticalSmall
              flexDirectionRow
              justifyContentSpaceBetween>
              <Wrapper>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.appBgColor12,
                  }}>
                  Degree
                </Text>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(16),
                    color: colors.snow,
                    fontWeight: 900,
                  }}>
                  {degreeValue}
                </Text>
              </Wrapper>
              <Wrapper
                paddingVerticalTiny
                alignItemsCenter
                justifyContentCenter
                paddingHorizontalBase
                style={{
                  backgroundColor: colors.appBgColor12,
                  borderRadius: 33,
                }}>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.black,
                    fontWeight: 900,
                  }}>
                  545
                </Text>
              </Wrapper>
            </Wrapper>
          </TouchableOpacity>
          <Wrapper marginHorizontalBase>
            {showDropDownSix &&
              degreeData.map((val, key) => {
                return (
                  <Tiles
                    key={key}
                    index={key}
                    title={val?.title}
                    activeIndex={degreeIndex}
                    onPress={index => {
                      setDegreeIndex(index);
                      setDegreeValue(val?.title);
                      setShowDropDownSix(!showDropDownSix);
                    }}
                  />
                );
              })}
          </Wrapper>
          <Lines.Horizontal color={colors.border1} />
        </Wrapper>
        {/* Occupation */}
        <Wrapper>
          <TouchableOpacity
            onPress={() => setShowDropDownSeven(!showDropDownSeven)}>
            <Wrapper
              alignItemsCenter
              marginHorizontalBase
              marginVerticalSmall
              flexDirectionRow
              justifyContentSpaceBetween>
              <Wrapper>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.appBgColor12,
                  }}>
                  Occupation
                </Text>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(16),
                    color: colors.snow,
                    fontWeight: 900,
                  }}>
                  {occupatoinValue}
                </Text>
              </Wrapper>
              <Wrapper
                paddingVerticalTiny
                alignItemsCenter
                justifyContentCenter
                paddingHorizontalBase
                style={{
                  backgroundColor: colors.appBgColor12,
                  borderRadius: 33,
                }}>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.black,
                    fontWeight: 900,
                  }}>
                  545
                </Text>
              </Wrapper>
            </Wrapper>
          </TouchableOpacity>
          <Wrapper marginHorizontalBase>
            {showDropDownSeven &&
              occupationData.map((val, key) => {
                return (
                  <Tiles
                    key={key}
                    index={key}
                    title={val?.title}
                    activeIndex={occupatoinIndex}
                    onPress={index => {
                      setOccupatoinIndex(index);
                      setOccupatoinValue(val?.title);
                      setShowDropDownSeven(!showDropDownSeven);
                    }}
                  />
                );
              })}
          </Wrapper>
          <Lines.Horizontal color={colors.border1} />
        </Wrapper>
        {/* Politics */}
        <Wrapper>
          <TouchableOpacity
            onPress={() => setShowDropDownEight(!showDropDownEight)}>
            <Wrapper
              alignItemsCenter
              marginHorizontalBase
              marginVerticalSmall
              flexDirectionRow
              justifyContentSpaceBetween>
              <Wrapper>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.appBgColor12,
                  }}>
                  Politics
                </Text>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(16),
                    color: colors.snow,
                    fontWeight: 900,
                  }}>
                  {politicsValue}
                </Text>
              </Wrapper>
              <Wrapper
                paddingVerticalTiny
                alignItemsCenter
                justifyContentCenter
                paddingHorizontalBase
                style={{
                  backgroundColor: colors.appBgColor12,
                  borderRadius: 33,
                }}>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.black,
                    fontWeight: 900,
                  }}>
                  545
                </Text>
              </Wrapper>
            </Wrapper>
          </TouchableOpacity>
          <Wrapper marginHorizontalBase>
            {showDropDownEight &&
              politicsStatusData.map((val, key) => {
                return (
                  <Tiles
                    key={key}
                    index={key}
                    title={val?.title}
                    activeIndex={politicsStatusIndex}
                    onPress={index => {
                      setPoliticsStatusIndex(index);
                      setPoliticsValue(val?.title);
                      setShowDropDownEight(!showDropDownEight);
                    }}
                  />
                );
              })}
          </Wrapper>
          <Lines.Horizontal color={colors.border1} />
        </Wrapper>
        {/* Drink */}
        <Wrapper>
          <TouchableOpacity
            onPress={() => setShowDropDownNine(!showDropDownNine)}>
            <Wrapper
              alignItemsCenter
              marginHorizontalBase
              marginVerticalSmall
              flexDirectionRow
              justifyContentSpaceBetween>
              <Wrapper>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.appBgColor12,
                  }}>
                  Drink
                </Text>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(16),
                    color: colors.snow,
                    fontWeight: 900,
                  }}>
                  {drinkValue}
                </Text>
              </Wrapper>
              <Wrapper
                paddingVerticalTiny
                alignItemsCenter
                justifyContentCenter
                paddingHorizontalBase
                style={{
                  backgroundColor: colors.appBgColor12,
                  borderRadius: 33,
                }}>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.black,
                    fontWeight: 900,
                  }}>
                  545
                </Text>
              </Wrapper>
            </Wrapper>
          </TouchableOpacity>
          <Wrapper marginHorizontalBase>
            {showDropDownNine &&
              DrinkData.map((val, key) => {
                return (
                  <Tiles
                    key={key}
                    index={key}
                    title={val?.title}
                    activeIndex={drinkIndex}
                    onPress={index => {
                      setDrinkIndex(index);
                      setDrinkValue(val?.title);
                      setShowDropDownNine(!showDropDownNine);
                    }}
                  />
                );
              })}
          </Wrapper>
          <Lines.Horizontal color={colors.border1} />
        </Wrapper>
        {/* Smoke */}
        <Wrapper>
          <TouchableOpacity
            onPress={() => setShowDropDownTen(!showDropDownTen)}>
            <Wrapper
              alignItemsCenter
              marginHorizontalBase
              marginVerticalSmall
              flexDirectionRow
              justifyContentSpaceBetween>
              <Wrapper>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.appBgColor12,
                  }}>
                  Smoke
                </Text>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(16),
                    color: colors.snow,
                    fontWeight: 900,
                  }}>
                  {smokeValue}
                </Text>
              </Wrapper>
              <Wrapper
                paddingVerticalTiny
                alignItemsCenter
                justifyContentCenter
                paddingHorizontalBase
                style={{
                  backgroundColor: colors.appBgColor12,
                  borderRadius: 33,
                }}>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.black,
                    fontWeight: 900,
                  }}>
                  545
                </Text>
              </Wrapper>
            </Wrapper>
          </TouchableOpacity>
          <Wrapper marginHorizontalBase>
            {showDropDownTen &&
              SmokeData.map((val, key) => {
                return (
                  <Tiles
                    key={key}
                    index={key}
                    title={val?.title}
                    activeIndex={smokeIndex}
                    onPress={index => {
                      setSmokeIndex(index);
                      setSmokeValue(val?.title);
                      setShowDropDownTen(!showDropDownTen);
                    }}
                  />
                );
              })}
          </Wrapper>
          <Lines.Horizontal color={colors.border1} />
        </Wrapper>
        {/* Drugs */}
        <Wrapper>
          <TouchableOpacity
            onPress={() => setShowDropDownEleven(!showDropDownEleven)}>
            <Lines.Horizontal color={colors.border1} />
            <Wrapper
              alignItemsCenter
              marginHorizontalBase
              marginVerticalSmall
              flexDirectionRow
              justifyContentSpaceBetween>
              <Wrapper>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.appBgColor12,
                  }}>
                  Drugs
                </Text>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(16),
                    color: colors.snow,
                    fontWeight: 900,
                  }}>
                  {drugValue}
                </Text>
              </Wrapper>
              <Wrapper
                paddingVerticalTiny
                alignItemsCenter
                justifyContentCenter
                paddingHorizontalBase
                style={{
                  backgroundColor: colors.appBgColor12,
                  borderRadius: 33,
                }}>
                <Text
                  style={{
                    fontSize: baseStyle.fontSize(12),
                    color: colors.black,
                    fontWeight: 900,
                  }}>
                  545
                </Text>
              </Wrapper>
            </Wrapper>
          </TouchableOpacity>
          <Wrapper marginHorizontalBase>
            {showDropDownEleven &&
              DrugsData.map((val, key) => {
                return (
                  <Tiles
                    key={key}
                    index={key}
                    title={val?.title}
                    activeIndex={drugIndex}
                    onPress={index => {
                      setDrugIndex(index);
                      setDrugValue(val?.title);
                      setShowDropDownEleven(!showDropDownEleven);
                    }}
                  />
                );
              })}
          </Wrapper>
          <Lines.Horizontal color={colors.border1} />
        </Wrapper>
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}
