import React, { useRef, useState } from 'react';
import { View, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Text, Wrapper } from '../../../components';
import CustomStatusBar from '../../../components/statusBars/customStatusBar';

import { height, totalSize } from 'react-native-dimension'
import { useNavigation } from '@react-navigation/native';
import { sizes } from '../../../services';


function Spark() {
  const navigation = useNavigation();

  return (
    <Wrapper isMain >
      <CustomStatusBar
        barStyle={"dark"}
        backgroundColor={"#FFF"}
      />
    </Wrapper>
  );
}

export default Spark;
