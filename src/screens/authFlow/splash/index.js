import React, { useEffect } from "react";
import { Dimensions, Image } from "react-native";
import { Wrapper } from "../../../components";
import { colors } from "../../../services";
import { useNavigation } from "@react-navigation/native";
import CustomStatusBar from "../../../components/statusBars/customStatusBar";

function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    hideSplashScreen();
  }, []);
  const hideSplashScreen = async () => {
    // const token = await AsyncStorage.getItem("token");
    setTimeout(() => {
      navigation.replace("Welcome");
      // navigation.replace("BottomTab");
      // if (token === "1") {
      // navigation.replace("Welcome");
      // } else {
      //     navigation.replace("SignIn");
      // }
    }, 2000);
  };
  return (
    <Wrapper isMain isCenter style={{backgroundColor:colors.appColor1}}>
      <CustomStatusBar
        barStyle={"light"}
        backgroundColor={colors.appColor1}
      />
      <Image
        source={require("../../../assets/images/main/splash-main.png")}
        style={{height:Dimensions.get("window").height,width:"100%",resizeMode:"cover"}}
      />
    </Wrapper>
  );
}

export default Splash;
