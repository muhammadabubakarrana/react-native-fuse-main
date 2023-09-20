import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Text, Wrapper} from '../../../components';
import CustomStatusBar from '../../../components/statusBars/customStatusBar';
import {SvgIcons} from '../../../services/constants/svg';
import {height, totalSize} from 'react-native-dimension';
import {useNavigation} from '@react-navigation/native';
import {appImages, baseStyle, colors, sizes} from '../../../services';
import Carousel from 'react-native-snap-carousel';
import {Icon} from '@rneui/base';
import {goBack} from '../../../navigation/rootNavigation';

const dropdownData = [
  {
    id: '1',
    name: 'Marriam M.',
    image: require('../../../assets/images/main/user-4.png'),
  },
  {
    id: '2',
    name: 'Janna S.',
    image: require('../../../assets/images/main/user-5.png'),
  },
  {
    id: '3',
    name: 'Danny L.',
    image: require('../../../assets/images/main/user-6.png'),
  },
];
const tabData = [
  {id: 1, title: 'Compatible'},
  {id: 2, title: 'Active Today'},
  {id: 3, title: 'Reccomended'},
  {id: 4, title: 'Recent'},
];
const sliderData = [
  {
    id: '1',
    name: 'Nicole',
    image: require('../../../assets/images/main/user-7.png'),
  },
  {
    id: '2',
    name: 'Janna S.',
    image: require('../../../assets/images/main/user-8.png'),
  },
  {
    id: '3',
    name: 'Danny L.',
    image: require('../../../assets/images/main/user-9.png'),
  },
  {
    id: '4',
    name: 'Marriam M.',
    image: require('../../../assets/images/main/user-10.png'),
  },
  {
    id: '5',
    name: 'Janna S.',
    image: require('../../../assets/images/main/user-11.png'),
  },
  {
    id: '6',
    name: 'Danny L.',
    image: require('../../../assets/images/main/user-12.png'),
  },
];

function ScrollDetail(props) {
  const scrollViewRef = useRef(null);
  //const navigation = useNavigation();
  // const {userDetail} = props.route.params;

  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
  };

  return (
    <Wrapper isMain style={{backgroundColor: colors.appTextColor11}}>
      <CustomStatusBar
        barStyle={'light'}
        backgroundColor={colors.appTextColor11}
      />

      <ScrollView ref={scrollViewRef}>
        {/* Back */}
        <Wrapper marginVerticalBase marginHorizontalBase>
          <TouchableOpacity
            style={{
              backgroundColor: colors.snow,
              borderRadius: 100,
              alignItems: 'center',
              width: 45,
              height: 45,
              justifyContent: 'center',
            }}
            onPress={goBack}>
            <Icon
              size={totalSize(3.5)}
              type="material-icons"
              name="keyboard-backspace"
            />
          </TouchableOpacity>
        </Wrapper>
        <Wrapper marginHorizontalBase>
          {/* text */}
          <Wrapper alignItemsCenter>
            <Text
              style={{
                color: colors.snow,
                fontSize: baseStyle.fontSize(42),
                fontWeight: 800,
              }}>
              Michael{`\n`}Wawrick
            </Text>
          </Wrapper>
          <Spacer isBasic />
          {/* Image */}
          <Wrapper>
            <Image style={styles.image} source={appImages.profileBg} />
          </Wrapper>
          <Spacer isBasic />
          <Wrapper
            style={{
              flexDirection: 'row',

              // backgroundColor: '#B5C6C41A',
              //borderRadius: 24,
              paddingVertical: totalSize(2),
              paddingHorizontal: totalSize(2),
            }}>
            <Wrapper style={{flex: 0.7, justifyContent: 'center'}}>
              <Text
                style={{
                  color: '#B5C6C4',
                  fontSize: baseStyle.fontSize(12),
                  fontWeight: '400',
                }}>
                Heigh
              </Text>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(16),
                  fontWeight: '400',
                }}>
                178cm
              </Text>
            </Wrapper>
            <Wrapper style={{flex: 1, justifyContent: 'center'}}>
              <Text
                style={{
                  color: '#B5C6C4',
                  fontSize: baseStyle.fontSize(12),
                  fontWeight: '400',
                }}>
                Drink
              </Text>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(16),
                  fontWeight: '400',
                }}>
                Sometimes
              </Text>
            </Wrapper>
            <Wrapper style={{flex: 0.7, justifyContent: 'center'}}>
              <Text
                style={{
                  color: '#B5C6C4',
                  fontSize: baseStyle.fontSize(12),
                  fontWeight: '400',
                }}>
                Smoke
              </Text>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(16),
                  fontWeight: '400',
                }}>
                No
              </Text>
            </Wrapper>
            <Wrapper style={{flex: 0.7, justifyContent: 'center'}}>
              <Text
                style={{
                  color: '#B5C6C4',
                  fontSize: baseStyle.fontSize(12),
                  fontWeight: '400',
                }}>
                Drugs
              </Text>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(16),
                  fontWeight: '400',
                }}>
                Yes
              </Text>
            </Wrapper>
          </Wrapper>
          {/* Flex-row */}
          <Wrapper
            marginVerticalBase
            marginHorizontalBase
            flexDirectionRow
            alignItemsCenter
            justifyContentSpaceBetween>
            <TouchableOpacity
              //onPress={() => navigate(routes.settings)}
              style={{
                backgroundColor: colors.appColor1,
                borderRadius: 100,
                alignItems: 'center',
                width: 45,
                height: 45,
                justifyContent: 'center',
              }}>
              <Icon
                type="material-community"
                name="close"
                color={colors.appBgColor3}
                size={totalSize(3.5)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#B5C6C4',
                borderRadius: 100,
                alignItems: 'center',
                width: 45,
                height: 45,
                justifyContent: 'center',
              }}>
              <SvgIcons.DualHeartIconOutlined
                width={'35'}
                height={'50'}
                strokeColor={colors.black}
                fillColor={colors.black}
              />
            </TouchableOpacity>
          </Wrapper>
          {/* Image */}
          <Wrapper>
            <Image
              style={styles.image}
              source={require('../../../assets/images/main/user-8.png')}
            />
          </Wrapper>
          <Spacer isBasic />
          {/* TExt */}
          <Wrapper
            style={{
              //  backgroundColor: '#B5C6C41A',
              // borderRadius: 24,
              paddingVertical: totalSize(2),
              paddingHorizontal: totalSize(2),
            }}>
            <Wrapper style={{marginBottom: totalSize(1)}}>
              <Text
                style={{
                  color: '#B5C6C4',
                  fontSize: baseStyle.fontSize(12),
                  fontWeight: '400',
                }}>
                From
              </Text>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(16),
                  fontWeight: '400',
                }}>
                New York
              </Text>
            </Wrapper>
            <Wrapper style={{marginBottom: totalSize(1)}}>
              <Text
                style={{
                  color: '#B5C6C4',
                  fontSize: baseStyle.fontSize(12),
                  fontWeight: '400',
                }}>
                Relationship Goals
              </Text>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(16),
                  fontWeight: '400',
                }}>
                Affection and Romance
              </Text>
            </Wrapper>
            <Wrapper style={{}}>
              <Text
                style={{
                  color: '#B5C6C4',
                  fontSize: baseStyle.fontSize(12),
                  fontWeight: '400',
                }}>
                Politicly Status
              </Text>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(16),
                  fontWeight: '400',
                }}>
                Politicly active
              </Text>
            </Wrapper>
          </Wrapper>
          <Spacer isBasic />
          {/* Image */}
          <Wrapper>
            <Image
              style={styles.image}
              source={require('../../../assets/images/main/user-9.png')}
            />
          </Wrapper>
          <Spacer isBasic />
          {/* Text */}
          <Wrapper
            style={{
              //  backgroundColor: '#B5C6C41A',
              // borderRadius: 24,
              paddingVertical: totalSize(2),
              paddingHorizontal: totalSize(2),
            }}>
            <Wrapper style={{}}>
              <Text
                style={{
                  color: '#B5C6C4',
                  fontSize: baseStyle.fontSize(12),
                  fontWeight: '400',
                  marginBottom: totalSize(1),
                }}>
                Typical Sunday
              </Text>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(16),
                  fontWeight: '400',
                }}>
                Running 🏃 from 06AM to 08PM and rest of the day enjoys 🎉
                partying with friends 🥳
              </Text>
            </Wrapper>
          </Wrapper>
          <Spacer isBasic />
          {/* Image */}
          <Wrapper>
            <Image
              style={styles.image}
              source={require('../../../assets/images/main/user-10.png')}
            />
          </Wrapper>
          <Spacer isBasic />
          {/* TExt */}
          <Wrapper
            style={{
              //  backgroundColor: '#B5C6C41A',
              // borderRadius: 24,
              paddingVertical: totalSize(2),
              paddingHorizontal: totalSize(2),
            }}>
            <Wrapper style={{marginBottom: totalSize(1)}}>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(12),
                  fontWeight: '400',
                }}>
                Children
              </Text>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(16),
                  fontWeight: '400',
                }}>
                Yes 2
              </Text>
            </Wrapper>
            <Wrapper style={{marginBottom: totalSize(1)}}>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(12),
                  fontWeight: '400',
                }}>
                Gender
              </Text>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(16),
                  fontWeight: '400',
                }}>
                Female
              </Text>
            </Wrapper>
            <Wrapper style={{marginBottom: totalSize(1)}}>
              <Text
                style={{color: colors.snow, fontSize: 10, fontWeight: '400'}}>
                Ethnicity
              </Text>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(16),
                  fontWeight: '400',
                }}>
                Politicly active
              </Text>
            </Wrapper>
            <Wrapper>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(12),
                  fontWeight: '400',
                }}>
                Religion
              </Text>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(16),
                  fontWeight: '400',
                }}>
                Hinduism
              </Text>
            </Wrapper>
          </Wrapper>
          <Spacer isBasic />
          <Wrapper>
            <Image
              style={styles.image}
              source={require('../../../assets/images/main/user-11.png')}
            />
          </Wrapper>
          <Spacer isBasic />
          <Wrapper
            style={{
              backgroundColor: '#B5C6C41A',
              borderRadius: 24,
              paddingVertical: totalSize(2),
              paddingHorizontal: totalSize(2),
            }}>
            <Wrapper style={{marginBottom: totalSize(1)}}>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(12),
                  fontWeight: '400',
                }}>
                Highest Degree
              </Text>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(16),
                  fontWeight: '400',
                }}>
                Associate degree
              </Text>
            </Wrapper>
            <Wrapper>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(12),
                  fontWeight: '400',
                }}>
                Current Occupation
              </Text>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(16),
                  fontWeight: '400',
                }}>
                Web Designer
              </Text>
            </Wrapper>
          </Wrapper>
          <Spacer isBasic />
          <Wrapper>
            <Image
              style={styles.image}
              source={require('../../../assets/images/main/user-12.png')}
            />
          </Wrapper>
          <Spacer isBasic />
          <Wrapper
            style={{
              backgroundColor: '#B5C6C41A',
              borderRadius: 24,
              paddingVertical: totalSize(2),
              paddingHorizontal: totalSize(2),
            }}>
            <Wrapper style={{}}>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(12),
                  fontWeight: '400',
                  marginBottom: totalSize(1),
                }}>
                Typical Sunday
              </Text>
              <Text
                style={{
                  color: colors.snow,
                  fontSize: baseStyle.fontSize(16),
                  fontWeight: '400',
                }}>
                Running 🏃 from 06AM to 08PM and rest of the day enjoys 🎉
                partying with friends 🥳
              </Text>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />

        <ImageBackground
          source={appImages.bottom}
          style={{height: 111}}
          resizeMode="contain">
          <TouchableOpacity
            onPress={scrollToTop}
            style={{alignItems: 'center', marginTop: 25, marginLeft: -7}}>
            <SvgIcons.TopArrowIcon />

            <Text
              style={{
                marginTop: 15,
                color: colors.black,
                fontSize: baseStyle.fontSize(16),
                fontWeight: '400',
              }}>
              Back to Top
            </Text>
          </TouchableOpacity>
        </ImageBackground>
        {/* <Spacer isDoubleBase /> */}
      </ScrollView>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 370,
    resizeMode: 'cover',
    //borderRadius: 40,
  },
});

export default ScrollDetail;
