import React from 'react'
import {  appIcons } from '../../services';
import * as Icons  from '../icons';
import { Image } from 'react-native';

export const Primary = ({ size }) => {
  return (
    <Image
      style={{height:size,width:size,resizeMode:"contain"}}
      source={require('../../assets/images/main/main-logo.png')}
    />
  );
}