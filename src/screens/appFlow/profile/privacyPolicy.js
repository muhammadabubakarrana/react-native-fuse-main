import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {
  Wrapper,
  CustomStatusBar,
  Text,
  Spacer,
} from '../../../components';
import {Icon} from '@rneui/themed';
import {baseStyle, colors, fontFamily, routes} from '../../../services';
import {totalSize} from 'react-native-dimension';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {goBack} from '../../../navigation/rootNavigation';

export default function PrivacyPolicy() {
  return (
    <Wrapper style={{flex: 1, backgroundColor: colors.appBgColor14}}>
      <CustomStatusBar barStyle={'dark'} backgroundColor={colors.appBgColor9} />
      <ScrollView>
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
            onPress={goBack}>
            <Icon
              size={totalSize(3.5)}
              type="material-icons"
              name="keyboard-backspace"
            />
          </TouchableOpacity>
          <Spacer isTiny />
          {/* Texts */}
          <Text style={styles.delText}>Privacy{`\n`}Policy</Text>
          <Spacer isBasic />
          <Text style={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            {`\n`}
            {`\n`}
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.{`\n`}
            {`\n`} Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur?
          </Text>
          <Spacer isDoubleBase />
        </Wrapper>
      </ScrollView>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  delText: {
    fontSize: baseStyle.fontSize(42),
    fontWeight: 900,
    color: colors.black,
  },
  para: {
    fontSize: baseStyle.fontSize(16),
    fontWeight: 400,
    color: colors.black,
    fontfamily: fontFamily.appTextRegular,
    lineHeight: baseStyle.lineHight(24),
  },
});
