import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Switch, View} from 'react-native';
import Wrapper from '../wrapper';
import Text from '../text';
import * as Lines from '../lines';
import {baseStyle, colors} from '../../services';
import {width, totalSize, height} from 'react-native-dimension';

export default TouchableLines = ({text, onPress, showSwitch}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);
  return (
    <Wrapper>
      <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
        <TouchableOpacity onPress={onPress}>
          <Wrapper marginVerticalBase>
            <Text style={styles.txt}>{text}</Text>
          </Wrapper>
        </TouchableOpacity>
        {showSwitch && (
          <View style={{marginRight: baseStyle.marginRight(25)}}>
            <Switch
              trackColor={{false: colors.snow, true: colors.snow}}
              thumbColor={isEnabled ? '#383838' : '#D0D8D6'}
              ios_backgroundColor={colors.snow}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        )}
      </Wrapper>
      <Lines.Horizontal
        color={'#D0D8D6'}
        style={{alignSelf: 'flex-end'}}
        width="93%"
        height={1}
      />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  txt: {
    color: '#3F3F46',
    marginLeft: width(7),
    fontSize: baseStyle.fontSize(16),
    fontWeight: 400,
  },
});
