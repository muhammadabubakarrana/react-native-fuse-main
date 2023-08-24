import React, { useState, useRef } from 'react';
import { View, Dimensions, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { totalSize } from 'react-native-dimension';
import { Text } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../services';
import { SvgIcons } from '../../services/constants/svg';

const Tiles = (props) => {
    const navigation = useNavigation();
    const {plusIcon, activeIndex, index, onPress, title} = props;

    return (
        <TouchableOpacity
            activeOpacity={.7}
            onPress={() => onPress(index)}
            style={{flexDirection:"row",backgroundColor:activeIndex===index?"#CA2D301A":"#FFF",
            borderColor:activeIndex===index?colors.appColor1:"#DEE1E1",borderWidth:1,borderRadius:8,
            paddingHorizontal:totalSize(2),paddingVertical:totalSize(1),marginBottom:totalSize(1)}}>
            <View style={{flex:1,justifyContent:"center"}}>
                <Text style={{color:activeIndex===index?colors.appColor1:"#3F3F46",fontSize:14,fontWeight:"400"}}>
                    {title}
                </Text>
            </View>
            {plusIcon?
                <View style={{justifyContent:"center"}}>
                    <SvgIcons.PlusIcon fillColor={colors.appColor1} />
                </View>
            :activeIndex===index&&
                <View style={{justifyContent:"center"}}>
                    <SvgIcons.CircleCheckRound fillColor={colors.appColor1} />
                </View>
            }
        </TouchableOpacity>
    );
}

export default Tiles;
