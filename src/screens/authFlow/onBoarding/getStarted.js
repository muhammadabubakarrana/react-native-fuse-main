import React, { useState, useRef } from 'react';
import {  Buttons, Wrapper, Spacer, Text } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import CustomStatusBar from '../../../components/statusBars/customStatusBar';
import { colors } from '../../../services';

const GetStarted = () => {
    const navigation = useNavigation();

    return (
        <Wrapper isMain style={{flex:1,backgroundColor:colors.appColor1}}>
            <CustomStatusBar
                barStyle={"light"}
                backgroundColor={colors.appColor1}
            />
            <Wrapper marginHorizontalLarge marginVerticalLarge>
                <Wrapper marginHorizontalBase marginVerticalLarge>
                    <Text style={{color:"#FFFFFF",fontSize:14,fontWeight:"400",textAlign:"left",lineHeight:22.4}}>
                        Keep moving!
                    </Text>
                    <Spacer isBasic />
                    <Text style={{fontSize:30,fontWeight:"900",color:"#FFFFFF",textAlign:"left"}}>
                        Let’s Finish your Dater Profile
                    </Text>
                    <Spacer isDoubleBase />
                    <Buttons.Colored
                        text="Get Started"
                        textStyle={{color:"#383838"}}
                        onPress={() => navigation.navigate("Profile")}
                        buttonStyle={{marginHorizontal:0,backgroundColor:"#FFFFFF"}}
                    />
                </Wrapper>
            </Wrapper>
        </Wrapper>
    );
}

export default GetStarted;
