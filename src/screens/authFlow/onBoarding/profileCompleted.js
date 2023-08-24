import React, { useState, useRef } from 'react';
import {  Buttons, Wrapper, Spacer, Text } from '../../../components';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomStatusBar from '../../../components/statusBars/customStatusBar';
import { colors } from '../../../services';
import { totalSize } from 'react-native-dimension';

const ProfileCompleted = (props) => {
    const navigation = useNavigation();
    const {profileImage} = props.route.params;

    return (
        <Wrapper isMain style={{flex:1,backgroundColor:colors.appColor1}}>
            <CustomStatusBar
                barStyle={"dark"}
                backgroundColor={"#f8f9f9"}
            />
            <View style={{position:"relative",alignItems:"center"}}>
                <Image
                    style={{height:260,width:"100%",resizeMode:"cover"}}
                    source={require('../../../assets/images/main/ellipse.png')}
                />
                <View style={{position:"absolute",bottom:-60}}>
                    <View style={{height:180,width:180,borderRadius:100,alignItems:"center",justifyContent:"center",backgroundColor:"#f8f9f9"}}>
                        <Image
                            source={profileImage === null ? 
                                require('../../../assets/images/main/user-1.png')
                            :
                                {uri: profileImage}
                            }
                            style={{height:150,width:150,borderRadius:100,resizeMode:"cover"}}
                        />
                    </View>
                </View>
            </View>
            <Wrapper marginHorizontalLarge marginVerticalLarge>
                <Wrapper marginHorizontalBase marginVerticalLarge>
                    <Spacer isBasic />
                    <Text style={{fontSize:42,fontWeight:"900",color:"#FFFFFF",textAlign:"left"}}>
                        James
                    </Text>
                    <Spacer isBasic />
                    <Text style={{fontSize:42,fontWeight:"900",color:"#FFFFFF",textAlign:"left"}}>
                        You are ready to be fused!
                    </Text>
                </Wrapper>
            </Wrapper>
            <Wrapper marginHorizontalLarge style={{position:"absolute",bottom:totalSize(3),left:0,right:0}}>
                <Buttons.Colored
                    text="Get Started"
                    textStyle={{color:"#383838"}}
                    onPress={() => navigation.navigate("BottomTab")}
                    buttonStyle={{marginHorizontal:0,backgroundColor:"#FFFFFF"}}
                />
            </Wrapper>
        </Wrapper>
    );
}

export default ProfileCompleted;
