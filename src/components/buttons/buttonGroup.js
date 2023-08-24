import React, { useEffect, useState } from "react";
import {
  View,
  Animated,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { StyleSheet } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import { appStyles, colors, sizes } from "../../services";
import * as Icons from "../icons";
import Wrapper from "../wrapper";
import Text from "../text";
// import { Icons, Wrapper ,Text} from '..';
import { Icon } from "@rneui/base";

export default function ButtonGroup({
  onPressButton,
  data,
  activeButtonStyle,
  inActiveButtonStyle,
  activeTextStyle,
  inActiveTextStyle,
  indentifier,
  //scrollViewRef,
  containerStyle,
  iconSize,
  activeButtonContent,
  activeButtonForceStyle,
  initalIndex,
  disableAutoSwipe,
  activeTintColor,
  inActiveTintColor,
  scrollEnabled,
  iconStyle,
  hideLabel,
  inActiveButtonActiveStyle,
}) {
  const scrollViewRef = React.useRef();
  const [activeTabTranslateX] = useState(new Animated.Value(0));
  const [activeTabWidth] = useState(new Animated.Value(0));
  const [activeTabHeight] = useState(new Animated.Value(0));
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [scrollViewWrapperWidth, setScrollViewWrapperWidth] = useState(0);

  //handle scroll
  // useEffect(() => {
  //   scrollEnabled != false && scrollViewRef.current?.scrollTo({
  //     // index: initalIndex,
  //     x: initalIndex * scrollViewWrapperWidth,
  //     animated: true,
  //     viewPosition: 0.5
  //   })
  // }, [initalIndex])

  // const handleTabSlide = (x, height, width) => {
  //   console.log(x, height, width);
  //   //const xValue = x > 0 ? -x : -0
  //   // console.log('xValue: ', xValue)
  //   Animated.timing(activeTabTranslateX, {
  //     toValue: x,
  //     duration: 250,
  //     useNativeDriver: false,
  //   }).start();
  //   Animated.timing(activeTabHeight, {
  //     toValue: height,
  //     duration: 250,
  //     useNativeDriver: false,
  //   }).start();
  //   Animated.timing(activeTabWidth, {
  //     toValue: width,
  //     duration: 250,
  //     useNativeDriver: false,
  //   }).start();
  // }
  //const handleOnPress = async (item, key) => {
  // setSelectedTabIndex(key)
  // handleTabSlide(item.x, item.tabHeight, item.tabWidth)
  // console.log('data?.length - key: ',(data?.length-1) - key)
  // const _item = data.reverse()[key]
  // const { x, tabHeight, tabWidth } = _item
  // handleTabSlide(x, item?.tabHeight, item?.tabWidth)

  //}

  // console.log('initalIndex < data.length:',initalIndex < data.length)
  // if (initalIndex < data.length) {
  //console.log('!disableAutoSwipe && selectedTabIndex != initalIndex && data[initalIndex].x >= 0',(!disableAutoSwipe && selectedTabIndex != initalIndex && data[initalIndex].x >= 0))
  // console.log('!disableAutoSwipe ',(!disableAutoSwipe))
  // console.log('selectedTabIndex != initalIndex ',(selectedTabIndex != initalIndex))
  // console.log('data[initalIndex].x >= 0',(data[initalIndex].x >= 0))

  //   if (!disableAutoSwipe && selectedTabIndex != initalIndex && data[initalIndex].x >= 0) {
  //     handleOnPress(data[initalIndex], initalIndex)
  //   }
  // }

  const defaultIconSize = totalSize(2);
  const defaultActiveTintColor = activeTintColor
    ? activeTintColor
    : appStyles.textPrimaryColor.color;
  const defaultInactiveTintColor = inActiveTintColor
    ? inActiveTintColor
    : colors.appTextColor5;

  return (
    <View style={[styles.animatedGroupButtonMainContainer, containerStyle]}>
      {/* <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={scrollEnabled}
          keyboardShouldPersistTaps='always'
        > */}
      <View style={{ flexDirection: "row" }}>
        {data?.map((item, key) => {
          const { icon, iconName, iconType } = item;
          //const isSelectedButton = key === selectedTabIndex
          const isSelectedButton = key === initalIndex;
          return (
            <TouchableHighlight
              key={key}
              underlayColor={colors.transparent}
              style={[
                {
                  ...styles.animatedGroupButtonInactivatedButton,
                  borderColor: isSelectedButton ? "transparent" : "lightgray",
                  marginLeft: key === 0 ? sizes.marginHorizontal : 0,
                  marginRight: sizes.marginHorizontal / 2,
                },
                !isSelectedButton ? inActiveButtonStyle : activeButtonStyle,
                //isSelectedButton && inActiveButtonActiveStyle
              ]}
              onPress={async () => {
                // handleOnPress(item, key);
                onPressButton &&
                  setTimeout(
                    () => {
                      onPressButton(item, key);
                    },
                    disableAutoSwipe ? 250 : 0
                  );
              }}
            >
              <Wrapper flexDirectionRow>
                {!hideLabel ? (
                  <Text
                    isRegular
                    style={[
                      styles.animatedGroupButtonInactivatedButtonTxt,
                      isSelectedButton ? activeTextStyle : inActiveTextStyle,
                    ]}
                  >
                    {indentifier ? item[indentifier] : item.label}
                    {/* {indentifier} */}
                  </Text>
                ) : null}
                {icon ? (
                  <Icons.Custom
                    icon={icon}
                    color={
                      isSelectedButton ? activeTintColor : inActiveTintColor
                    }
                    size={iconSize ? iconSize : defaultIconSize}
                    style={[!hideLabel && styles.iconStyle, iconStyle]}
                  />
                ) : iconName ? (
                  <Icon
                    name={iconName}
                    type={iconType}
                    color={
                      isSelectedButton ? activeTintColor : inActiveTintColor
                    }
                    size={iconSize ? iconSize : defaultIconSize}
                    iconStyle={[!hideLabel && styles.iconStyle, iconStyle]}
                  />
                ) : null}
              </Wrapper>
            </TouchableHighlight>
          );
        })}
      </View>

      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  // Animated Button Group styles
  animatedGroupButtonMainContainer: {},
  animatedGroupButtonInactivatedButton: {
    borderRadius: sizes.buttonRadius,
    // height: height(5),
    //width: width(30),
    paddingVertical: sizes.marginVertical / 1.5,
    paddingHorizontal: sizes.marginHorizontal,
    marginHorizontal: width(1),
    backgroundColor: colors.appBgColor3,
    ...appStyles.center,
  },
  animatedGroupButtonInactivatedButtonTxt: {
    //color: colors.appTextColor4
  },
  animatedGroupButtonActivatedButton: {
    position: "absolute",
    top: 0,
    backgroundColor: colors.appColor1,
    borderRadius: sizes.buttonRadius,
    ...appStyles.center,
  },
  animatedGroupButtonActivatedButtonTxt: {
    ...appStyles.textWhite,
  },
  iconStyle: { marginLeft: sizes.marginHorizontal / 4 },
});
