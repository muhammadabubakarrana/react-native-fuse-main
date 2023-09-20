import React, {useState, useEffect, useMemo} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ViewPropTypes,
  FlatList,
  Keyboard,
  Platform,
  AppState,
  BackHandler,
} from 'react-native';
import {Icon} from '@rneui/base';
import {height, totalSize, width} from 'react-native-dimension';
import {
  colors,
  sizes,
  appStyles,
  HelpingMethods,
  baseStyle,
  fontFamily,
} from '../../services';
import Modal from 'react-native-modal';
import {styles} from './styles';
import * as Lines from '../lines';
import Wrapper from '../wrapper';
import Text from '../text';
import Spacer from '../spacer';
import * as Icons from '../icons';
import * as ScrollViews from '../scrollViews';
import * as Buttons from '../buttons';
import * as Common from '../common';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import DatePicker from 'react-native-date-picker';
import CountDown from 'react-native-countdown-component';

export const Swipable = ({
  children,
  title,
  isVisible,
  toggleModal,
  footerFlex,
  headerFlex,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={toggleModal}
      style={{margin: 0}}
      // backdropOpacity={0}
      onBackdropPress={toggleModal}>
      <Wrapper flex={1}>
        <Wrapper flex={headerFlex ? headerFlex : 1.5} />
        <Wrapper
          flex={footerFlex ? footerFlex : 8.5}
          style={[styles.swipableModalFooter]}>
          {children}
          <Wrapper style={[styles.barContainer]}>
            <Wrapper style={[appStyles.center]}>
              <TouchableOpacity onPress={toggleModal}>
                <Lines.Horizontal
                  height={4}
                  width={width(15)}
                  style={{borderRadius: 5}}
                  color={colors.appBgColor3}
                />
              </TouchableOpacity>
              <Spacer isBasic />
              <Text isTinyTitle>{title}</Text>
            </Wrapper>
          </Wrapper>
          <Wrapper
            isAbsolute
            style={[
              {top: sizes.baseMargin * 1.5, left: sizes.marginHorizontal},
            ]}>
            <Icon name="close" />
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Modal>
  );
};

export const SwipeablePrimary = ({
  visible,
  toggle,
  disableSwipe,
  disableBackdropPress,
  topMargin,
  headerTitle,
  headerRight,
  headerLeft,
  hideHeader,
  children,
  backdropOpacity,
  backdropColor,
  containerStyle,
  subContainerStyle,
}) => {
  // manage keyboard
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  let keyboardDidShowListener;
  let keyboardDidHideListener;

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      HelpingMethods.handleAnimation();
      setKeyboardVisible(true);
    });
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      HelpingMethods.handleAnimation();
      setKeyboardVisible(false);
    });
  });

  const defaultTopMargin = keyboardVisible
    ? height(12)
    : topMargin
    ? Platform.OS === 'ios'
      ? topMargin
      : topMargin + height(5)
    : height(12);
  return (
    <Modal
      isVisible={visible} // Comment on video User
      style={[{margin: 0}, containerStyle]}
      onSwipeComplete={toggle}
      swipeDirection={disableSwipe ? null : 'down'}
      propagateSwipe
      onBackdropPress={disableBackdropPress ? null : toggle}
      backdropOpacity={0.5}
      //backdropOpacity={backdropOpacity ? backdropOpacity : 0}
      backdropColor={backdropColor && backdropColor}>
      {/* <Wrapper flex={1}> */}
      {/* <LinearGradient style={{ flex: 1 }}
                colors={['#00000000', '#000000']}
            > */}
      {/* <TouchableOpacity onPress={disableBackdropPress ? null : toggle} activeOpacity={1} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, }}>
                    <LinearGradient style={{ flex: 1 }}
                        colors={['#00000000', '#000000BF']}
                    />
                </TouchableOpacity> */}
      <View
        style={[
          {
            flex: 1,
            marginTop: defaultTopMargin,
            backgroundColor: colors.appBgColor1,
            borderTopRightRadius: sizes.modalRadius,
            borderTopLeftRadius: sizes.modalRadius,
            //...appStyles.shadowExtraDark
          },
          subContainerStyle,
        ]}>
        {hideHeader ? null : (
          <View style={appStyles.rowCompContainer}>
            <Wrapper style={{alignItems: 'center', right: 0, left: 0}}>
              <Text isTinyTitle style={[appStyles.headerTitleStyle]}>
                {/* {data ? data.length + ' People' : 0 + ' People'} */}
                {headerTitle ? headerTitle : 'Title'}
              </Text>
            </Wrapper>
            <View>
              {headerLeft ? (
                headerLeft
              ) : (
                // <BackIcon
                //     onPress={toggle}
                //     color={colors.appTextColor6}
                // />
                <Icon
                  name="x"
                  type="feather"
                  size={totalSize(2.5)}
                  color={colors.appTextColor1}
                  onPress={toggle}
                />
              )}
            </View>

            <View style={{}}>{headerRight}</View>
          </View>
        )}
        {children}
      </View>
      {/* </LinearGradient> */}
      {/* </Wrapper> */}
    </Modal>
  );
};

// export const PopupPrimary = ({
//     visible, toggle, title, info, iconName, iconType,
//     customIcon, buttonText1, buttonText2, onPressButton1,
//     onPressButton2, topMargin, children, scrollEnabled,
//     backdropColor, backdropOpacity, onPressClose,
//     button1Style, button2Style, keyboardShouldPersistTaps,
//     headerTitle, topImage, headerRight, closeIconColor, disableSwipe, icon, disableBackdropPress,
//     headerTitleStyle, preBottom, headerStyle, closeIconSize, rightContainerStyle, closeIconContainerSize,
//     buttonWrapperShadow, headerBottom, titleStyle, buttonText1Style, buttonText2Style, headerSubtitleStyle, headerSubtitle,
//     buttonsDirection,

//     //loaders
//     loadingButton1, loadingButton2
// }) => {

//     // manage keyboard
//     const [keyboardVisible, setKeyboardVisible] = useState(false)
//     let keyboardDidShowListener
//     let keyboardDidHideListener
//     useEffect(() => {
//         keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => { HelpingMethods.handleAnimation(); setKeyboardVisible(true) });
//         keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => { HelpingMethods.handleAnimation(); setKeyboardVisible(false) });
//     })

//     const defaultTopMargin = Platform.OS === 'ios' ? height(50) : height(40)
//     const customTopMargin = keyboardVisible ? height(10) : topMargin ? Platform.OS === 'ios' ? topMargin : topMargin - height(10) : defaultTopMargin
//     const isVerticalButtons = buttonsDirection === 'column' || buttonsDirection === 'column-reverse'
//     return (
//         <SwipeablePrimary
//             visible={visible}
//             toggle={toggle}
//             hideHeader
//             topMargin={customTopMargin}
//             backdropColor={backdropColor}
//             backdropOpacity={backdropOpacity ? backdropOpacity : 0}
//             disableSwipe={disableSwipe}
//             disableBackdropPress={disableBackdropPress}
//         >
//             <Wrapper flex={1}>
//                 {
//                     headerTitle ?
//                         <Wrapper style={{}}>
//                             <Wrapper style={[{ paddingHorizontal: sizes.marginHorizontal, backgroundColor: 'transparent', paddingBottom: sizes.marginVertical, paddingTop: sizes.marginVertical * 1.5, justifyContent: 'center', }, headerStyle]}>
//                                 <Text isSmallTitle style={[appStyles.textCenter, headerTitleStyle]}>{headerTitle}</Text>
//                                 {
//                                     headerSubtitle ?
//                                         <Text isRegular style={[appStyles.textCenter, { marginTop: sizes.smallMargin }, headerSubtitleStyle]}>{headerSubtitle}</Text>
//                                         :
//                                         null
//                                 }
//                                 <Wrapper isAbsolute style={[{ right: sizes.marginHorizontal, top: sizes.marginVertical * 1.3 }, rightContainerStyle]}>
//                                     {
//                                         headerRight ? headerRight :
//                                             onPressClose ?
//                                                 <Icons.Button
//                                                     iconName="close"
//                                                     iconColor={closeIconColor ? closeIconColor : colors.appTextColor1}
//                                                     //buttonColor={colors.appBgColor3}
//                                                     onPress={onPressClose}
//                                                     iconSize={closeIconSize ? closeIconSize : totalSize(3)}
//                                                     buttonSize={closeIconContainerSize ? closeIconContainerSize : totalSize(4)}
//                                                     isRound
//                                                 //buttonColor={'red'}
//                                                 />
//                                                 :
//                                                 null
//                                     }
//                                 </Wrapper>
//                             </Wrapper>
//                             {headerBottom && headerBottom}
//                         </Wrapper>
//                         :

//                         <Spacer height={sizes.baseMargin * 1.5} />
//                 }

//                 <KeyboardAvoidingView
//                     style={{ flex: 1 }}
//                     behavior={Platform.OS == 'ios' ? 'padding' : 'padding'}
//                     keyboardVerticalOffset={Platform.OS == 'ios' ? height(12.5) : 0}
//                     enabled={Platform.OS === 'ios' ? true : false}
//                 >
//                     <ScrollViews.WithKeyboardAvoidingView
//                     //keyboardShouldPersistTaps={keyboardShouldPersistTaps}
//                     // keyboardShouldPersistTaps={'always'}
//                     // showsVerticalScrollIndicator={false}
//                     // scrollEnabled={scrollEnabled}
//                     >

//                         <Wrapper style={[appStyles.alignItemsCenter]}>
//                             {

//                                 (icon || iconName || customIcon) ?

//                                     <>
//                                         {icon ? icon :
//                                             <Icons.Button
//                                                 iconName={iconName}
//                                                 iconType={iconType}
//                                                 customIcon={customIcon}
//                                                 iconColor={colors.appTextColor6}
//                                                 buttonColor={colors.appColor1}
//                                                 buttonSize={totalSize(10)}
//                                                 iconSize={totalSize(4)}
//                                                 buttonStyle={{ borderRadius: 100, }}
//                                             />
//                                         }
//                                         <Spacer height={sizes.baseMargin * 1.5} />
//                                     </>
//                                     :
//                                     null
//                             }
//                         </Wrapper>
//                         {
//                             title ?
//                                 <>
//                                     <Wrapper marginHorizontalLarge style={{ backgroundColor: 'transparent' }}>
//                                         <Text isSmallTitle isBoldFont style={[appStyles.textCenter, titleStyle]}>{title}</Text>
//                                     </Wrapper>
//                                     <Spacer height={sizes.baseMargin} />
//                                 </>
//                                 :
//                                 null
//                         }
//                         {
//                             info ?
//                                 <>
//                                     <Wrapper marginHorizontalLarge style={{ backgroundColor: 'transparent', }}>
//                                         <Text isMedium style={[appStyles.textCenter]}>{info}</Text>
//                                     </Wrapper>
//                                     <Spacer isBasic />
//                                 </>
//                                 :
//                                 null
//                         }
//                         {children}
//                     </ScrollViews.WithKeyboardAvoidingView>
//                     {preBottom}
//                 </KeyboardAvoidingView>
//                 {/* <Spacers.Spacer height={sizes.baseMargin} /> */}

//                 {
//                     onPressButton1 || onPressButton2 ?
//                         <Wrapper style={[{ backgroundColor: colors.appBgColor1, }, buttonWrapperShadow && appStyles.shadowDark]}>
//                             <Spacer isBasic />
//                             <Wrapper marginHorizontalMedium style={{ flexDirection: buttonsDirection || 'row', }}>
//                                 {
//                                     onPressButton2 ?
//                                         <Wrapper style={[!isVerticalButtons && { flex: 1 }]}>
//                                             <Buttons.Bordered
//                                                 text={buttonText2}
//                                                 onPress={onPressButton2}
//                                                 buttonColor={colors.appBgColor3}
//                                                 //tintColor={colors.appTextColor1}
//                                                 buttonStyle={[{ marginHorizontal: 0, }, button2Style]}
//                                                 textStyle={[buttonText2Style]}
//                                                 isLoading={loadingButton2}

//                                             />
//                                         </Wrapper>
//                                         :
//                                         null
//                                 }
//                                 {
//                                     (onPressButton2 && onPressButton1) ?
//                                         !isVerticalButtons ?
//                                             <Spacer width={sizes.marginHorizontal} ho />
//                                             :
//                                             <Spacer height={sizes.marginVertical} />
//                                         : null
//                                 }

//                                 {
//                                     onPressButton1 ?
//                                         <Wrapper style={[!isVerticalButtons && { flex: 1 }]}>
//                                             <Buttons.Colored
//                                                 text={buttonText1}
//                                                 onPress={onPressButton1}
//                                                 shadow
//                                                 buttonStyle={[{ marginHorizontal: 0, }, button1Style]}
//                                                 textStyle={[buttonText1Style]}
//                                                 isLoading={loadingButton1}
//                                             />
//                                         </Wrapper>
//                                         :
//                                         null
//                                 }
//                             </Wrapper>
//                             <Spacer height={sizes.baseMargin * 1.5} />
//                         </Wrapper>
//                         :
//                         null
//                 }
//                 {/* <Spacers.Spacer height={sizes.baseMargin} /> */}

//             </Wrapper>
//         </SwipeablePrimary>
//     )
// }

export const PopupPrimary = ({visible, toggle, children}) => {
  return (
    <SwipeablePrimary
      visible={visible}
      toggle={toggle}
      hideHeader
      //topMargin={height(50)}
      containerStyle={[appStyles.justifyContentFlexend]}
      subContainerStyle={[{flex: 0}]}>
      <Wrapper>
        <Wrapper alignItemsCenter paddingVerticalSmall>
          <Lines.Horizontal
            width={width(10)}
            height={height(0.5)}
            style={{borderRadius: 100}}
            color={colors.appBgColor3}
          />
        </Wrapper>
        {children}
      </Wrapper>
    </SwipeablePrimary>
  );
};
export const CalendarPopup = ({
  visible,
  toggle,
  buttonText,
  initialDate,
  minDate,
  maxDate,
  selectedDate,
  ...props
}) => {
  const [selected, setSelected] = useState(initialDate);
  const marked = useMemo(
    () => ({
      [selected]: {
        selected: true,
        selectedColor: colors.background,
        // customContainerStyle: {
        //   borderRadius: 2,
        // },
        // selectedTextColor: "yellow",
      },
    }),
    [selected],
  );

  // LocaleConfig.defaultLocale = "en";

  return (
    <SwipeablePrimary
      visible={visible}
      toggle={toggle}
      hideHeader
      //topMargin={height(50)}
      containerStyle={[appStyles.justifyContentFlexend]}
      subContainerStyle={[{flex: 0}]}>
      <Wrapper>
        <Wrapper alignItemsCenter paddingVerticalSmall>
          <Lines.Horizontal
            width={width(10)}
            height={height(0.5)}
            style={{borderRadius: 100}}
            color={colors.appBgColor3}
          />
        </Wrapper>
        <Calendar
          initialDate={initialDate}
          minDate={minDate}
          maxDate={maxDate}
          onDayPress={day => {
            setSelected(day.dateString);
            props.onDaySelect && props.onDaySelect(day);
          }}
          theme={{
            textMonthFontWeight: '700',
            textDayHeaderFontWeight: '700',
            todayButtonFontWeight: '700',
            textSectionTitleColor: colors.black,
            todayTextColor: colors.background,
            dayTextColor: '#2d4150',
            arrowColor: colors.background,
            // monthTextColor:  colors.background,
            // textDayFontWeight: "bold", // If you want the day numbers to be bold as well
          }}
          markedDates={marked}
          disableAllTouchEventsForDisabledDays={true}
          {...props}
        />

        <Wrapper marginHorizontalBase>
          <Spacer isBasic />
          <Buttons.Colored
            text={buttonText}
            buttonStyle={{marginHorizontal: 0}}
            //onPress={() => navigation.navigate("SignIn")}
            onPress={() => {
              toggle(), selectedDate(selected);
            }}
          />
          <Spacer isBasic />
        </Wrapper>
      </Wrapper>
    </SwipeablePrimary>
  );
};
export const DateTimePopup = ({
  visible,
  toggle,
  date,
  mode,
  buttonText,
  selectedDateTame,
}) => {
  const [selected, setSelected] = useState(new Date());

  return (
    <SwipeablePrimary
      visible={visible}
      toggle={toggle}
      hideHeader
      //topMargin={height(50)}
      containerStyle={[appStyles.justifyContentFlexend]}
      subContainerStyle={[{flex: 0}]}>
      <Wrapper alignItemsCenter>
        <Wrapper alignItemsCenter paddingVerticalSmall>
          <Lines.Horizontal
            width={width(10)}
            height={height(0.5)}
            style={{borderRadius: 100}}
            color={colors.appBgColor3}
          />
        </Wrapper>
        <Text isLarge isBoldFont>
          TIME
        </Text>
        <Spacer isBasic />

        <DatePicker
          theme={'light'}
          mode={mode}
          date={date}
          onDateChange={_DateTime => {
            setSelected(_DateTime);
          }}
        />
      </Wrapper>
      <Wrapper marginHorizontalBase>
        <Spacer isBasic />
        <Buttons.Colored
          text={buttonText}
          buttonStyle={{marginHorizontal: 0}}
          //onPress={() => navigation.navigate("SignIn")}
          onPress={() => {
            toggle(), selectedDateTame(selected);
          }}
        />
        <Spacer isBasic />
      </Wrapper>
    </SwipeablePrimary>
  );
};

export const OptionsPopupPrimary = ({
  visible,
  toggle,
  optoins,
  onPressOption,
  showMeStatus,
}) => {
  return (
    <PopupPrimary
      visible={visible}
      toggle={toggle}
      //hideHeader
      //topMargin={height(50)}
      // containerStyle={[appStyles.justifyContentFlexend]}
      // subContainerStyle={[{ flex: 0 }]}
    >
      <Wrapper>
        {/* <Wrapper alignItemsCenter paddingVerticalSmall>
                    <Lines.Horizontal
                        width={width(10)}
                        height={height(0.5)}
                        style={{ borderRadius: 100 }}
                        color={colors.appBgColor3}
                    />
                </Wrapper> */}
        <Spacer isSmall />
        {optoins.map((item, index) => {
          const {label, value, icon, type, iconSize} = item;
          const isErrorType = type === 'error';
          const defaultIconSize = iconSize || totalSize(4);
          return (
            // <Pressable
            //     style={{ marginBottom: height(2) }}
            //     onPress={() => onPressOption(item, index)}
            // >
            //     <Wrapper isColored paddingVerticalSmall>
            //         <Icons.WithText
            //             customIcon={icon}
            //             text={label}
            //             tintColor={isErrorType ? colors.error : colors.appTextColor1}
            //             iconSize={defaultIconSize}
            //             textStyle={[appStyles.textMedium, { color: isErrorType ? colors.error : colors.appTextColor1 }]}
            //             textContainerStyle={[{ marginHorizontal: width(3) }]}
            //         />
            //     </Wrapper>
            // </Pressable>
            <Common.IconTitleColored
              key={index}
              // onPress={() => onPressOption(item, index)}
              iconSize={defaultIconSize}
              icon={icon}
              title={
                showMeStatus !== undefined
                  ? showMeStatus && index === 0
                    ? 'Show Me'
                    : label
                  : label
              }
              // iconColor={isErrorType ? colors.error : colors.appTextColor1}
              // titleColor={isErrorType ? colors.error : colors.appTextColor1}
              iconColor={
                isErrorType
                  ? colors.error
                  : showMeStatus !== undefined
                  ? showMeStatus && index === 0
                    ? '#4792F0'
                    : colors.appTextColor1
                  : colors.appTextColor1
              }
              titleColor={
                isErrorType
                  ? colors.error
                  : showMeStatus !== undefined
                  ? showMeStatus && index === 0
                    ? '#4792F0'
                    : colors.appTextColor1
                  : colors.appTextColor1
              }
              containerStyle={[{marginBottom: height(2)}]}
            />
          );
        })}
        <Spacer isBasic />
        <Spacer isSmall />
      </Wrapper>
    </PopupPrimary>
  );
};

export const SettingsModal = ({
  visible,
  toggle,
  title,
  btnText,
  onPress,
  textStlyle,
  notPaused,
}) => {
  return (
    <Modal
      // animationIn={'slideInUp'}
      // animationInTiming={'800'}
      // animationOutTiming={'300'}
      animationOut={'slideOutDown'}
      isVisible={visible}
      toggle={toggle}>
      <Wrapper
        paddingVerticalLarge
        paddingHorizontalSmall
        isCardView
        style={{backgroundColor: notPaused ? colors.appBgColor14 : '#B5C6C4'}}>
        <Text
          style={[
            {
              fontSize: baseStyle.fontSize(32),
              color: colors.black,
              fontWeight: 900,
              textAlign: 'center',
            },
            textStlyle,
          ]}>
          {title}
        </Text>
        <Spacer isBasic />
        {notPaused && <Buttons.Colored onPress={onPress} text={btnText} />}
        {!notPaused && (
          <Wrapper justifyContentCenter flexDirectionRow alignItemsCenter>
            <Buttons.Bordered
              onPress={onPress}
              textStyle={{
                fontSize: baseStyle.fontSize(16),
                color: colors.black,
              }}
              buttonStyle={{borderWidth: 0}}
              text={'Cancel'}
            />
            <Buttons.Colored
              onPress={onPress}
              buttonStyle={{
                paddingHorizontal: baseStyle.paddingHorizontal(30),
                marginHorizontal: 0,
              }}
              textStyle={{
                fontSize: baseStyle.fontSize(16),
              }}
              text={'Remove'}
            />
          </Wrapper>
        )}
      </Wrapper>
    </Modal>
  );
};

export const DeleteCounterModal = ({visible, toggle, onPress}) => {
  return (
    <Modal
      // animationIn={'slideInUp'}
      // animationInTiming={'800'}
      // animationOutTiming={'300'}
      animationOut={'slideOutDown'}
      isVisible={visible}
      toggle={toggle}>
      <Wrapper
        style={{
          //  justifyContent: 'center',
          //height: Dimensions.get('window').height / 2,
          backgroundColor: colors.appBgColor14,
        }}>
        <Wrapper paddingHorizontalBase>
          <Spacer isBasic />
          {/* Back */}
          <TouchableOpacity
            style={{
              marginVertical: baseStyle.marginVertical(10),
              backgroundColor: colors.snow,
              borderRadius: 100,
              alignItems: 'center',
              width: 45,
              height: 45,
              justifyContent: 'center',
            }}
            onPress={toggle}>
            <Icon
              size={totalSize(3.5)}
              type="material-icons"
              name="keyboard-backspace"
            />
          </TouchableOpacity>
          <Spacer isTiny />

          <Text
            style={{
              fontSize: baseStyle.fontSize(42),
              fontWeight: 900,
              color: colors.black,
            }}>
            Delete{`\n`}Account
          </Text>
          <Spacer isBasic />
          <Text
            style={{
              fontSize: baseStyle.fontSize(16),
              fontWeight: 400,
              color: colors.black,
              //fontfamily: fontFamily.appTextRegular,
            }}>
            Your account will be deleted in:
          </Text>
          <Spacer isBasic />
          <CountDown
            onPress={() => console.log('hello')}
            onFinish={() => console.log('a')}
            until={604800} // 7 days in seconds
            size={30}
            digitStyle={{backgroundColor: colors.appTextColor9}}
            digitTxtStyle={{
              color: colors.snow,
              fontSize: baseStyle.fontSize(20),
              // fontFamily: fontFamily.appTextRegular,
            }}
            timeToShow={['D', 'H', 'M', 'S']} // Display days, hours, minutes, and seconds
            timeLabels={{d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds'}}
          />
          <Spacer isBasic />
        </Wrapper>
        {/* button */}

        <Buttons.Colored
          buttonStyle={{backgroundColor: colors.appTextColor9}}
          onPress={onPress}
          text={'Cancel'}
        />
        <Spacer isBasic />
      </Wrapper>
    </Modal>
  );
};
