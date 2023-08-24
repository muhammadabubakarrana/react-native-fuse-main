import React from 'react'
import { View,  } from 'react-native'
import { colors } from '../../services';

export const Horizontal = ({style ,height,color,width}) => {
    return (
        <View style={[{height:height?height:0.5,width:width||null,backgroundColor:color?color:colors.appTextColor5},style]}/>
    );
}

export const Vertical = ({ style, height, width, color }) => {
    return (
        <View style={[{ height: height || null, width: width || 1, backgroundColor: color ? color : colors.appBgColor3 }, style]} />
    );
}