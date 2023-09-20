import React from 'react';
import {appIcons, appImages} from '../../services';
import * as Icons from '../icons';
import {Image} from 'react-native';

export const Primary = ({size}) => {
  return (
    <Image
      style={{height: size, width: size, resizeMode: 'contain'}}
      source={appImages.welcomeFusing}
    />
  );
};
