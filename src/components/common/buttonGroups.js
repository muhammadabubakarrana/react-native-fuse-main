import * as Images from "../images";
import * as Icons from "../icons";
import Wrapper from "../wrapper";
import {
  HelpingMethods,
  appImages,
  appStyles,
  colors,
  sizes,
} from "../../services";
import { totalSize, height, width } from "react-native-dimension";
import * as Lines from "../lines";
import Text from "../text";
import Spacer from "../spacer";
import * as Buttons from "../buttons";
import { Pressable, StyleSheet } from "react-native";

export const ButtonGroupAnimatedPrimary = ({
  data,
  mainWidth,
  containerStyle,
  inActiveButtonStyle,
  activeButtonStyle,
  inActiveTextStyle,
  activeTextStyle,
  ...props
}) => {
  const numberOfButtons = data?.length || 1;
  const defaultMainWidth = mainWidth || width(85);
  return (
    <Wrapper>
      <Buttons.ButtonGroupAnimated
        data={data}
        scrollEnabled={false}
        containerStyle={[
          {
            backgroundColor: colors.appBgColor3,
            borderRadius: sizes.buttonRadius / 3,
            padding: totalSize(0.75),
          },
          appStyles.marginHorizontalBase,
          // appStyles.paddingVerticalTiny,
          // appStyles.paddingHorizontalSmall,
          containerStyle,
        ]}
        inActiveButtonStyle={[
          {
            marginLeft: 0,
            marginRight: 0,
            width: defaultMainWidth / numberOfButtons,
            backgroundColor: colors.transparent,
          },
          appStyles.paddingVerticalSmall,
          appStyles.paddingHorizontalZero,
          appStyles.alignItemsCenter,
          inActiveButtonStyle,
        ]}
        activeButtonStyle={[
          {
            borderRadius: sizes.buttonRadius / 3,
            backgroundColor: colors.appBgColor1,
          },
          activeButtonStyle,
        ]}
        inActiveTextStyle={[
          {},
          appStyles.textRegular,
          appStyles.fontSemiBold,
          inActiveTextStyle,
        ]}
        activeTextStyle={[
          {},
          appStyles.textRegular,
          appStyles.fontSemiBold,
          appStyles.textPrimaryColor,
          activeTextStyle,
        ]}
        {...props}
      />
    </Wrapper>
  );
};

export const ButtonGroupPrimary = ({
  data,
  mainWidth,
  containerStyle,
  inActiveButtonStyle,
  activeButtonStyle,
  inActiveTextStyle,
  activeTextStyle,
  ...props
}) => {
  const numberOfButtons = data?.length || 1;
  const defaultMainWidth = mainWidth || width(84);
  const defaultButtonWidth = defaultMainWidth / numberOfButtons;
  return (
    <Wrapper>
      <Buttons.ButtonGroup
        data={data}
        scrollEnabled={false}
        containerStyle={[
          {
            backgroundColor: colors.appBgColor3,
            borderRadius: sizes.buttonRadius / 3,
            padding: width(2),
          },
          appStyles.marginHorizontalBase,
          // appStyles.paddingVerticalTiny,
          // appStyles.paddingHorizontalSmall,
          containerStyle,
        ]}
        inActiveButtonStyle={[
          styles.buttonGroupPrimaryInactiveButtonStyle,
          { width: defaultButtonWidth },
          inActiveButtonStyle,
        ]}
        activeButtonStyle={[
          styles.buttonGroupPrimaryInactiveButtonStyle,
          { width: defaultButtonWidth },
          styles.buttonGroupPrimaryActiveButtonStyle,
          activeButtonStyle,
        ]}
        inActiveTextStyle={[
          {},
          appStyles.textRegular,
          appStyles.fontSemiBold,
          inActiveTextStyle,
        ]}
        activeTextStyle={[
          {},
          appStyles.textRegular,
          appStyles.fontSemiBold,
          appStyles.textPrimaryColor,
          activeTextStyle,
        ]}
        {...props}
      />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  buttonGroupPrimaryInactiveButtonStyle: [
    { marginLeft: 0, marginRight: 0, backgroundColor: colors.transparent },
    appStyles.paddingVerticalSmall,
    appStyles.paddingHorizontalZero,
    appStyles.alignItemsCenter,
  ],
  buttonGroupPrimaryActiveButtonStyle: [
    {
      borderRadius: sizes.buttonRadius / 3,
      backgroundColor: colors.appBgColor1,
    },
  ],
});
