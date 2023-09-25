import React, {useState, useRef} from 'react';
import {
  Buttons,
  Wrapper,
  Spacer,
  Text,
  StatusBars,
  GeneralSwitch,
  PhotosSwitch,
  PromptsSwitch,
  ScrollViews,
  CustomStatusBar,
  Images,
} from '../../../components';
import {
  Dimensions,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
//import {useNavigation} from '@react-navigation/native';
import {
  appImages,
  appStyles,
  appSvgs,
  baseStyle,
  colors,
  routes,
  sizes,
} from '../../../services';
import {totalSize, height, width} from 'react-native-dimension';
import {CustomHeader} from '../../../components/headers/customHeader';
import {Icon} from '@rneui/themed';
import {goBack, navigate} from '../../../navigation/rootNavigation';
import {useSelector} from 'react-redux';
import {SvgIcons} from '../../../services/constants/svg';
import {useNavigation} from '@react-navigation/native';

const ScrollTab = () => {
  const tabData = [
    {id: 1, title: 'Compatible'},
    {id: 2, title: 'Active Today'},
    {id: 3, title: 'Reccomended'},
    {id: 4, title: 'Recent'},
  ];
  const {userType} = useSelector(state => state.userType);
  const {navigate} = useNavigation();
  // const {profileImage} = props.route.params;
  const [activeTab, setActivetab] = useState(0);

  return (
    <Wrapper isMain style={{backgroundColor: colors.appTextColor11}}>
      <CustomStatusBar
        barStyle={'light'}
        backgroundColor={colors.appBgColor11}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image */}
        <View>
          <ImageBackground
            resizeMode="stretch"
            style={{
              height: Dimensions.get('window').height / 2,
              width: Dimensions.get('window').width,
            }}
            source={appImages.profileBg}>
            {/* flex row */}
            <Wrapper
              marginHorizontalBase
              flexDirectionRow
              alignItemsCenter
              justifyContentSpaceBetween
              style={{marginTop: height(42)}}>
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
          </ImageBackground>
        </View>

        {/* Profile Name */}
        <TouchableOpacity onPress={() => navigate(routes.ScrollDetail)}>
          <Wrapper marginHorizontalBase marginVerticalSmall>
            <Text
              style={{
                color: colors.snow,
                fontSize: baseStyle.fontSize(42),
                fontWeight: 800,
              }}>
              Michael{`\n`}Wawrick
            </Text>
          </Wrapper>
        </TouchableOpacity>
        {/* tab data */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tabData?.map((val, key) => {
            return (
              <TouchableOpacity
                key={key}
                onPress={() => setActivetab(key)}
                style={{
                  backgroundColor:
                    activeTab === key
                      ? colors.appColor1
                      : colors.appTextColor11,
                  marginLeft: key === 0 ? totalSize(2) : 0,
                  marginRight:
                    tabData?.length - 1 === key
                      ? totalSize(2)
                      : baseStyle.marginRight(11),
                  borderRadius: 100,
                  borderWidth: activeTab === key ? 0 : 1,
                  borderColor: '#4A5458',
                  paddingVertical: totalSize(1),
                  paddingHorizontal: totalSize(1.5),
                }}>
                <Text
                  style={{
                    color: activeTab === key ? '#FFF' : '#B5C6C4',
                    fontSize: baseStyle.fontSize(14),
                    fontWeight: '400',
                    textAlign: 'center',
                  }}>
                  {val?.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        {/* Fusing for */}
        <Wrapper
          marginHorizontalBase
          paddingHorizontalSmall
          paddingVerticalSmall
          marginVerticalBase
          flexDirectionRow
          alignItemsCenter
          justifyContentSpaceBetween
          style={{
            backgroundColor: colors.transparent,
            borderRadius: 15,
            borderColor: '#4A5458',
            borderWidth: 1,
          }}>
          <Wrapper flexDirectionRow alignItemsCenter style={{}}>
            <Text
              style={{
                fontSize: baseStyle.fontSize(16),
                fontWeight: 400,
                color: colors.snow,
                marginRight: baseStyle.marginRight(8),
              }}>
              Fusing For
            </Text>
            <Images.Round size={totalSize(5)} source={appImages.profileBg} />
            <Text
              style={{
                fontSize: baseStyle.fontSize(16),
                fontWeight: 900,
                color: colors.snow,
                marginLeft: baseStyle.marginLeft(8),
              }}>
              James C.
            </Text>
          </Wrapper>
          <TouchableOpacity onPress={() => navigate(routes.ChoseWhoFuse)}>
            <SvgIcons.DotIconHorizontal width="21" height="25" />
          </TouchableOpacity>
        </Wrapper>
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
      </ScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  switch: {
    // borderColor: colors.snow,
    // borderWidth: 1,
    //borderRadius: totalSize(50),
  },
});

export default ScrollTab;
