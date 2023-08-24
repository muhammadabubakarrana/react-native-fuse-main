import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { totalSize } from 'react-native-dimension';
import { Logos, Toasts, Icons, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Text } from '../../../components';
import { appStyles, colors, routes, sizes, } from '../../../services';
import { useNavigation } from '@react-navigation/native';
import CustomStatusBar from '../../../components/statusBars/customStatusBar';
import { SvgIcons } from '../../../services/constants/svg';

const Signin = () => {
    const navigation = useNavigation();

    return (
      <Wrapper isMain style={{flex:1,backgroundColor:"#F8F9F9",justifyContent:"center"}}>
        <CustomStatusBar
          barStyle={"dark"}
          backgroundColor={"#F8F9F9"}
        />
        <ScrollViews.KeyboardAvoiding>
          <View style={{height:Dimensions.get("window").height,justifyContent:"center"}}>
            <Wrapper marginHorizontalBase marginVerticalBase alignItemsCenter>
              <Text style={{fontSize:30,fontWeight:"900",color:"#383838"}}>
                Sign In
              </Text>
              <Spacer isBasic />
              <Text style={{color:"#586160",fontSize:14,fontWeight:"400",textAlign:"center",lineHeight:22.4}}>
                Some sort of wellcome message{`\n`}explaing app in few lines
              </Text>
            </Wrapper>
            <Spacer isBasic />
            <Wrapper marginHorizontalBase>
              <Wrapper marginHorizontalLarge>
                <TextInputs.Colored
                  title={"Email"}
                  placeholder={""}
                  containerStyle={{marginHorizontal:0,width:"100%"}}
                  inputStyle={{backgroundColor:"#FFF",borderColor:"#DEE1E1",borderWidth:1,borderRadius:8}}
                />
                <Spacer isBasic />
                <View style={{position:"relative"}}>
                  <TextInputs.Colored
                    title={"Password"}
                    placeholder={""}
                    containerStyle={{marginHorizontal:0,width:"100%"}}
                    inputStyle={{backgroundColor:"#FFF",borderColor:"#DEE1E1",borderWidth:1,borderRadius:8}}
                  />
                  <View style={{position:"absolute",right:12,zIndex:99999,top:20,bottom:0,justifyContent:"center"}}>
                    <SvgIcons.EyeShowIcon />
                  </View>
                </View>
                <Spacer isBasic />
                <Text onPress={() => navigation.navigate("ForgotPassword")} 
                style={{fontSize:14,fontWeight:"400",textAlign:"left",lineHeight:16.94}}>
                  Forgot password?
                </Text>
                <Spacer isBasic />
                <Buttons.Colored
                  text="Sign In"
                  buttonStyle={{marginHorizontal:0}}
                  onPress={() => navigation.navigate("BottomTab")}
                />
                <Spacer isBasic />
                <Spacer isDoubleBase />
                <Text style={{fontSize:14,fontWeight:"400",textAlign:"center",lineHeight:16.94}}>
                  Sign up with social
                </Text>
              </Wrapper>
              <Spacer isDoubleBase />
              <View style={{flexDirection:"row"}}>
                <TouchableOpacity
                  activeOpacity={.7}
                  onPress={() => {}}
                  style={{flex:1,flexDirection:"row",marginRight:6,justifyContent:"center",borderColor:"#DEE1E1",borderWidth:1,backgroundColor:"#FFF",borderRadius:8,paddingHorizontal:12,paddingVertical:12}}>
                  <View style={{justifyContent:"center"}}>
                    <SvgIcons.GoogleIcon />
                  </View>
                  <View style={{flex:1,justifyContent:"center",paddingLeft:12}}>
                    <Text style={{fontSize:10,fontWeight:"400"}}>
                      Sign In with
                    </Text>
                    <Text style={{fontSize:14,fontWeight:"400"}}>
                      Google
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={.7}
                  onPress={() => {}}
                  style={{flex:1,flexDirection:"row",marginLeft:6,justifyContent:"center",borderColor:"#DEE1E1",borderWidth:1,backgroundColor:"#FFF",borderRadius:8,paddingHorizontal:12,paddingVertical:12}}>
                  <View style={{justifyContent:"center"}}>
                    <SvgIcons.TwitterIcon />
                  </View>
                  <View style={{flex:1,justifyContent:"center",paddingLeft:12}}>
                    <Text style={{fontSize:10,fontWeight:"400"}}>
                      Sign In with
                    </Text>
                    <Text style={{fontSize:14,fontWeight:"400"}}>
                      Twitter
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Wrapper>
            <TouchableOpacity
              activeOpacity={.7}
              onPress={() => navigation.navigate("SignUp")}
              style={{flexDirection:"row",justifyContent:"center",position:"absolute",left:0,right:0,bottom:totalSize(2)}}>
              <View style={{justifyContent:"center"}}>
                <Text style={{color:"#6C7473",fontSize:14,fontWeight:"400"}}>
                  Don’t have account?
                </Text>
              </View>
              <View style={{justifyContent:"center"}}>
                <Text style={{color:"#000000",fontSize:14,fontWeight:"400"}}>
                  {" Create Account"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollViews.KeyboardAvoiding>
      </Wrapper>
    );
}

export default Signin;
