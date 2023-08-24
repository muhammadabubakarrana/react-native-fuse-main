import React from 'react'
import {appStyles, colors, fontSize, sizes} from '../../services'
import * as Icons from '../icons';
import Wrapper from '../wrapper';
import Text from '../text';
import {height, totalSize} from 'react-native-dimension'
import {Image, Platform, Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const CustomHeader = (props) => {
    const navigation = useNavigation();
    const {customStyle, notification, toggle, headerType, title, subTtitle, subTtitleStyle, backButton, leftOnPress, rightOnPress} = props;

    return (
        <Wrapper style={[styles.headerStyle, customStyle]}>
            {headerType === "main" ? 
                <>
                    <Wrapper style={{flex:1,justifyContent:"center",paddingLeft:totalSize(2)}}>
                        <Image
                            style={{height:40,width:200,resizeMode:"contain"}}
                            source={require('../../assets/images/main-logo-green.png')}
                        />
                    </Wrapper>
                    {notification && 
                        <TouchableOpacity
                            activeOpacity={.7}
                            onPress={() => navigation.navigate("Notifications")}
                            style={{justifyContent:"center",position:"relative",paddingLeft:totalSize(2),paddingRight:totalSize(2)}}>
                            <Image
                                source={require('../../assets/images/bell.png')}
                                style={{height:24,width:24,resizeMode:"contain"}}
                            />
                            <View style={styles.circleStyle}>
                                <Text style={{color:"#FFF"}} isSmall>
                                    12
                                </Text>
                            </View>
                        </TouchableOpacity>
                    }
                    {toggle && 
                        <TouchableOpacity
                            activeOpacity={.7}
                            onPress={() => navigation.navigate("Menu")}
                            style={{justifyContent:"center",paddingLeft:totalSize(2),paddingRight:totalSize(2)}}>
                            <Image
                                source={require('../../assets/images/menu.png')}
                                style={{height:30,width:30,resizeMode:"contain"}}
                            />
                        </TouchableOpacity>
                    }
                </>
            :
                <>
                    <Wrapper style={{flex:.3,justifyContent:"center",paddingLeft:totalSize(2)}}>
                        {backButton === "close icon" ? 
                            <TouchableOpacity
                                activeOpacity={.7}
                                onPress={leftOnPress}>
                                <Image
                                    source={require('../../assets/images/close-gray.png')}
                                    style={{height:35,width:35,resizeMode:"contain",tintColor:"#000"}}
                                />
                            </TouchableOpacity>
                        : backButton === "back icon" ?
                            <TouchableOpacity
                                activeOpacity={.7}
                                onPress={leftOnPress}>
                                <Image
                                    source={require('../../assets/images/angle-left.png')}
                                    style={{height:35,width:35,resizeMode:"contain",tintColor:"#000"}}
                                />
                            </TouchableOpacity>
                        :null}
                    </Wrapper>
                    <Wrapper style={{flex:1,justifyContent:"center"}}>
                        {title !== undefined && 
                            <Text style={{textAlign:"center",textTransform:"capitalize"}} isLarge >
                                {title}
                            </Text>
                        }
                    </Wrapper>
                    <Wrapper style={{flex:.3,justifyContent:"center",paddingRight:totalSize(2)}}>
                        {subTtitle !== undefined && 
                            <TouchableOpacity
                                activeOpacity={.7}
                                onPress={rightOnPress}>
                                <Text style={[{textAlign:"right",textTransform:"capitalize"}, subTtitleStyle]} isMedium >
                                    {subTtitle}
                                </Text>
                            </TouchableOpacity>
                        }
                    </Wrapper>
                </>
            }
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: "row",
        backgroundColor: "#FFF",
        paddingVertical: totalSize(1.5),
        shadowColor: Platform.OS === "ios" ? "#CCC" : "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    circleStyle: {
        position: 'absolute',
        top: 0,
        right: totalSize(1.5),
        height: 20,
        width: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FE2905",
        borderRadius: 100,
    }
})
