import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {baseStyle, colors} from '../../services';
import {SvgIcons} from '../../services/constants/svg';
import Text from '../text';

const CirclesWithinCircle = ({style,onPress}) => {
  return (
    <View style={[style]}>
      <View style={styles.outerCircle}>
        {/* First inner circle */}
        <View style={styles.innerCircle}></View>

        {/* Second inner circle */}
        <View style={styles.innerCircle1}></View>

        {/* Third inner circle */}
        <View style={styles.innerCircle2}></View>
        {/* button inner circle */}
        {/* <TouchableOpacity
              onPress={onPress}
              style={{alignItems: 'center'}}>
              <View style={styles.innerCircle3}>
                <View
                  style={{
                    alignItems: 'center',
                  }}>
                  <SvgIcons.HeartIcon
                    width={baseStyle.width(54)}
                    height={baseStyle.height(48)}
                    fillColor={'#3F3F46'} // '#F8F9F9'
                  />
                  <Text
                    style={{
                      fontSize: baseStyle.fontSize(24),
                      fontWeight: 900,
                      color: '#030810',
                    }}>
                    Get Fused
                  </Text>
                </View>
              </View>
            </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={()=>console.log("a")}>
          <View style={styles.innerCircle3}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <SvgIcons.HeartIcon
                width={baseStyle.width(54)}
                height={baseStyle.height(48)}
                fillColor={'#3F3F46'} // '#F8F9F9'
              />
              <Text
                style={{
                  fontSize: baseStyle.fontSize(24),
                  fontWeight: 900,
                  color: '#030810',
                }}>
                Get Fused
              </Text>
            </View>
          </View>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    width: 700, // Adjust the size of the outer circle
    height: 700, // Same as width for a perfect circle
    borderRadius: 350, // Half of the width/height for a circle
    borderWidth: 1, // Border width for the outer circle
    borderColor: '#4A5458', // Border color for the outer circle
    alignItems: 'center', // Center the inner circles horizontally
    justifyContent: 'center', // Center the inner circles vertically
  },
  innerCircle: {
    width: 550, // Adjust the size of the inner circles
    height: 550, // Same as width for perfect circles
    borderRadius: 550 / 2, // Half of the width/height for a circle
    borderWidth: 1, // Border width for the inner circles
    borderColor: '#4A5458', // Border color for the inner circles
    position: 'absolute', // Position the inner circles relative to the outer circle
  },
  innerCircle1: {
    width: 300, // Adjust the size of the inner circles
    height: 300, // Same as width for perfect circles
    borderRadius: 300 / 2, // Half of the width/height for a circle
    borderWidth: 1, // Border width for the inner circles
    borderColor: '#4A5458', // Border color for the inner circles
    position: 'absolute', // Position the inner circles relative to the outer circle
  },
  innerCircle2: {
    width: 440, // Adjust the size of the inner circles
    height: 440, // Same as width for perfect circles
    borderRadius: 440 / 2, // Half of the width/height for a circle
    borderWidth: 1, // Border width for the inner circles
    borderColor: '#4A5458', // Border color for the inner circles
    position: 'absolute', // Position the inner circles relative to the outer circle
  },
  innerCircle3: {
    width: 220, // Adjust the size of the inner circles
    height: 220, // Same as width for perfect circles
    borderRadius: 220 / 2, // Half of the width/height for a circle
    borderWidth: 1, // Border width for the inner circles
    borderColor: '#4A5458', // Border color for the inner circles
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.appBgColor12,
  },
});

export default CirclesWithinCircle;
