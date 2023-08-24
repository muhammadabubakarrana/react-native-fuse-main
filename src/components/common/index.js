import * as Images from "../images"
import * as Icons from "../icons"
import Wrapper from "../wrapper"
import { HelpingMethods, appImages, appStyles, colors, sizes } from "../../services"
import { totalSize, height, width } from 'react-native-dimension'
import * as Lines from "../lines"
import Text from "../text"
import Spacer from "../spacer"
import * as Buttons from "../buttons"
import { Pressable } from "react-native"

export const ImagesGroupPrimary = ({ data, imageSize, bordersColor, countBackgroundColor }) => {
    const _data = data?.length > 4 ? data.slice(0, 4) : data.slice()
    const image_size = imageSize || totalSize(3.75)
    const countMargin = image_size / 1.25
    const defaultBordersColor = bordersColor || colors.appBgColor1
    const defaultCountBackgroundColor = countBackgroundColor || colors.appBgColor4
    return (

        <Wrapper alignItemsCenter style={{ marginRight: data?.length > 3 ? countMargin : 0 }}>

            <Wrapper flexDirectionRow alignItemsCenter style={{}}>
                {
                    _data.map((item, index) => {
                        return (
                            <Wrapper key={index}
                                // style={{ marginLeft: -((index) * (index <= 1 ? (image_size / 3) : (image_size / 4))) }}
                                //style={{ marginLeft: -((index) * totalSize(1)) }}
                                style={{ marginLeft: index != 0 && -(image_size / 2.5) }}
                            >
                                <Images.Round
                                    //source={{ uri: appImages.noUser }}
                                    source={{ uri: item }}
                                    size={image_size}
                                    key={item}
                                // style={{
                                //     borderWidth: 1,
                                //     borderColor: defaultBordersColor
                                // }}
                                />
                            </Wrapper>
                        )
                    })
                }
            </Wrapper>
            {
                data?.length > 4 ?
                    <Wrapper isAbsolute style={{ right: -countMargin }}>
                        <Icons.Button
                            text={`+${data?.length - 5}`}
                            buttonColor={defaultCountBackgroundColor}
                            buttonSize={image_size}
                            isRound
                            textStyle={[
                                //{fontSize:image_size/3},
                                appStyles.textRegular,
                                appStyles.textWhite
                            ]}
                        // buttonStyle={{
                        //     borderWidth: 1,
                        //     borderColor: defaultBordersColor
                        // }}
                        />
                    </Wrapper>
                    :
                    null
            }
        </Wrapper>
        // <Wrapper>
        //     {
        //         data?.length > 3 ?
        //             <Wrapper isAbsolute style={{ right: 0 }}>
        //                 <Icons.Button
        //                     text={`+${data?.length - 3}`}
        //                     buttonColor={colors.appBgColor3}
        //                     buttonSize={image_size}
        //                     isRound
        //                     textStyle={[appStyles.textTiny, appStyles.textGray]}
        //                 />
        //             </Wrapper>
        //             :
        //             null
        //     }

        //     {
        //         _data.map((item, index) => {
        //             return (
        //                 <Wrapper key={index} isAbsolute style={{ right: (index + 1) * (index != 0 ? index != 1 ? image_size / 1.5 : image_size / 1.5 : image_size / 1.3) }}>
        //                     <Images.Round
        //                         source={{ uri: item }}
        //                         size={image_size}
        //                         style={{ borderWidth: 1, borderColor: colors.appTextColor6 }}
        //                     />
        //                 </Wrapper>
        //             )
        //         })
        //     }

        // </Wrapper>
    )
}

export const IconTitleText = ({ iconName, iconType, iconSize, ...props }) => {
    return (
        <Wrapper>
            <Icons.WithText
                icon={
                    <Icons.Button
                        iconName={iconName}
                        iconType={iconType}
                        buttonColor={colors.appBgColor4}
                        iconColor={colors.appBgColor1}
                        iconSize={iconSize || totalSize(2.5)}
                        buttonStyle={{ borderRadius: sizes.cardRadius / 4 }}
                    />
                }
                textStyle={[appStyles.textRegular, appStyles.fontSemiBold]}
                titleStyle={[appStyles.textSmall, appStyles.textLightGray]}
                containerStyle={{ alignItems: '' }}
                textContainerStyle={[appStyles.justifyContentSpaceBetween, { paddingBottom: 2.5 }]}
                {...props}
            />
        </Wrapper>
    )
}

export const WaypointsPrimary = ({ data, currentIndex, showDate, showTime }) => {
    const defaultCurrentIndex = currentIndex >= 0 ? currentIndex : 0
    const isStarted = currentIndex >= 0
    return (
        <Wrapper>
            <Wrapper isAbsoluteFill >
                <Wrapper flex={1} flexDirectionRow x>
                    <Wrapper alignItemsCenter style={{ width: width(15), paddingVertical: height(5) }} >
                        <Lines.Vertical color={colors.appBgColor4} style={{ flex: 1 }} />
                    </Wrapper>
                    <Wrapper flex={1} />
                </Wrapper>
            </Wrapper>
            {
                data.map((item, index) => {
                    const { type, label, date, time } = item
                    const isCurrentPoint = defaultCurrentIndex === index
                    const { isStart, isWay, isDestination } = HelpingMethods.getWaypointTypes(type)
                    const typeTitle = isStart ? 'Starting Location'
                        :
                        isWay ? 'Waypoint ' + index
                            :
                            isDestination ? 'Destination'
                                :
                                ''
                    return (
                        <Wrapper flexDirectionRow alignItemsCenter paddingVerticalSmall>
                            <Wrapper
                                alignItemsCenter
                                style={{ width: width(15) }}
                            >
                                <Wrapper isCenter>
                                    <Icons.Button
                                        buttonSize={width(7)}
                                        iconName={'circle'}
                                        iconSize={5}
                                        //iconSize={width(7)-(3+1)}
                                        iconColor={isCurrentPoint ? colors.appBgColor1 : colors.appBgColor2}
                                        buttonStyle={[
                                            isCurrentPoint ?
                                                {
                                                    borderWidth: 3,
                                                    borderColor: colors.appColor1,
                                                    backgroundColor: colors.appBgColor1
                                                }
                                                :
                                                {
                                                    borderWidth: 1,
                                                    borderColor: colors.appBgColor3,
                                                    backgroundColor: colors.appBgColor2
                                                }
                                        ]}
                                        isRound
                                    />
                                    {
                                        isStarted && isCurrentPoint ?
                                            <Wrapper isAbsolute>
                                                <Icons.Button
                                                    buttonSize={width(7) - 10}
                                                    iconSize={5}
                                                    iconColor={colors.appColor1}
                                                    buttonColor={colors.appColor1}
                                                    isRound

                                                />
                                            </Wrapper>
                                            :
                                            null

                                    }
                                </Wrapper>
                            </Wrapper>
                            <Wrapper flex={1}>
                                <Wrapper isColored background1 marginHorizontalZero paddingVerticalSmall style={{ borderRadius: sizes.cardRadius / 4, marginRight: sizes.marginHorizontal }}>
                                    <Wrapper flexDirectionRow alignItemsCenter>
                                        <Wrapper flex={1}>
                                            <Text isSmall isMediumFont isLightGray>{typeTitle}</Text>
                                            <Spacer isTiny />
                                            <Text isRegular isSemiBoldFont>{label}</Text>
                                        </Wrapper>
                                        <Wrapper>
                                            <Text isSmall isGray isMedium>{date}</Text>
                                            <Text isSmall isGray isMedium>{time}</Text>
                                        </Wrapper>
                                    </Wrapper>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                    )
                })
            }
        </Wrapper>
    )
}

export const UserPrimary = ({ onPress, image, title, subTitle, right, containerStyle, subContainerStyle }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[{flexDirection:'row'},containerStyle]}
        >
                <Wrapper flex={1} style={subContainerStyle}>
                    <Icons.WithText
                        icon={
                            <Images.Round
                                source={{ uri: image }}
                                size={totalSize(4)}
                            />
                        }
                        title={title}
                        text={subTitle}
                        titleStyle={[appStyles.textRegular, appStyles.fontSemiBold]}
                        textStyle={[appStyles.textSmall, appStyles.textLightGray]}
                        containerStyle={{ alignItems: '' }}
                        textContainerStyle={[appStyles.justifyContentSpaceBetween, { paddingBottom: 2.5 }]}
                    />
                </Wrapper>
                {
                    right ? right : null
                }
        </Pressable>
    )
}



export const IconTitleColored = ({
    onPress, right, left, icon, title, titleStyle, iconSize, iconColor, titleColor,

    containerStyle, titleContainerStyle, iconContainer }) => {
    return (
        <Pressable
            onPress={onPress}
        >
            <Wrapper
                isColored
                //paddingVerticalSmall
                paddingVerticalZero
                paddingHorizontalZero
                marginHorizontalSmall
                justifyContentCenter
                style={[{ height: height(7), borderRadius: sizes.cardRadius / 2 }, containerStyle]}
            >
                {/* <Icons.WithText
                customIcon={icon}
                text={title}
                tintColor={isErrorType ? colors.error : colors.appTextColor1}
                iconSize={defaultIconSize}
                textStyle={[appStyles.textMedium, { color: isErrorType ? colors.error : colors.appTextColor1 }]}
                textContainerStyle={[{ marginHorizontal: width(3) }]}
            /> */}
                <Wrapper flexDirectionRow alignItemsCenter>
                    {
                        left ? left :
                            icon ?
                                <Wrapper
                                    alignItemsCenter
                                    style={[{ width: width(15) }, iconContainer]}>
                                    <Icons.Custom
                                        icon={icon}
                                        size={iconSize || totalSize(4)}
                                        color={iconColor || null}
                                    />
                                </Wrapper>
                                :
                                null
                    }

                    <Wrapper flex={1} style={titleContainerStyle}>
                        <Text isLarge isMediumFont style={[{ color: titleColor || colors.appTextColor1 }, titleStyle]}>{title}</Text>
                    </Wrapper>
                    {
                        right ? right : null
                    }
                </Wrapper>
            </Wrapper>
        </Pressable>
    )
}


export * from './buttonGroups'