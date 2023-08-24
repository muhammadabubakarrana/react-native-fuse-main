import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Wrapper from '../wrapper';
import Text from '../text';
import * as Lines from '../lines';
import {colors} from '../../services';
import {width, totalSize, height} from 'react-native-dimension';

export default TouchableLines = ({text}) => {
  return (
    <Wrapper>
      <TouchableOpacity>
        <Wrapper marginVerticalBase>
          <Text style={styles.txt}>{text}</Text>
        </Wrapper>
      </TouchableOpacity>
      <Lines.Horizontal width="100%" height={0.8} />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  txt: {
    color: colors.black,
    marginLeft: width(7),
    fontSize: totalSize(1.9),
  },
});
