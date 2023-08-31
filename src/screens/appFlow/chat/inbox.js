import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Text, Wrapper} from '../../../components';
import CustomStatusBar from '../../../components/statusBars/customStatusBar';
import {SvgIcons} from '../../../services/constants/svg';
import {height, totalSize} from 'react-native-dimension';
import {useNavigation} from '@react-navigation/native';
import {baseStyle, sizes} from '../../../services';
import Carousel from 'react-native-snap-carousel';

function Inbox() {
  const navigation = useNavigation();

  return (
    <Wrapper isMain style={{backgroundColor: '#F8F9F9'}}>
      <CustomStatusBar barStyle={'dark'} backgroundColor={'#FFFFFF'} />
      <Wrapper
        style={{
          backgroundColor: '#FFFFFF',
          borderBottomColor: '#DEE1E1',
          borderBottomWidth: 1,
          paddingHorizontal: totalSize(2),
          paddingVertical: totalSize(3),
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={() => navigation.goBack()}>
            <SvgIcons.LeftArrowIcon />
          </TouchableOpacity>
          <View style={{justifyContent: 'center'}}>
            <SvgIcons.DotIconHorizontal />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{position: 'relative'}}>
            <Image
              source={require('../../../assets/images/main/user-5.png')}
              style={{
                height: baseStyle.height(52),
                width: baseStyle.width(52),
                resizeMode: 'cover',
                borderRadius: 100,
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: -6,
                right: -6,
                height: 9,
                width: 9,
                borderRadius: 50,
                backgroundColor: '#4FD7A6',
              }}></View>
          </View>
          <View style={{justifyContent: 'center', paddingLeft: totalSize(2)}}>
            <Text
              style={{
                color: '#3F3F46',
                fontSize: baseStyle.fontSize(16),
                fontWeight: '400',
              }}>
              Amy
            </Text>
          </View>
        </View>
      </Wrapper>
      <ScrollView style={{paddingHorizontal: totalSize(2)}}>
        <>
          <View
            style={{
              alignSelf: 'flex-end',
              minWidth: 40,
              maxWidth: 300,
              backgroundColor: '#000000',
              borderRadius: 20,
              borderBottomRightRadius: 0,
              paddingVertical: totalSize(2),
              paddingHorizontal: totalSize(2),
              marginTop: totalSize(3),
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: baseStyle.fontSize(14),
                fontWeight: '400',
                lineHeight: 22,
                textAlign: 'right',
              }}>
              Yoo, you look awesome wanna hang out? Did you meet my friend btw
              she...
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              marginTop: totalSize(1),
            }}>
            <View
              style={{justifyContent: 'center', paddingRight: totalSize(1)}}>
              <Text
                style={{
                  color: '#B5C6C4',
                  fontSize: baseStyle.fontSize(10),
                  fontWeight: '400',
                }}>
                04.12.2024
              </Text>
            </View>
            <View style={{justifyContent: 'center', paddingLeft: totalSize(1)}}>
              <Text
                style={{
                  color: '#B5C6C4',
                  fontSize: baseStyle.fontSize(10),
                  fontWeight: '400',
                }}>
                10:24 AM
              </Text>
            </View>
          </View>
        </>
        <View style={{flexDirection: 'row'}}>
          <View style={{justifyContent: 'center', marginRight: totalSize(2)}}>
            <Image
              source={require('../../../assets/images/main/user-5.png')}
              style={{
                height: baseStyle.height(40),
                width: baseStyle.width(40),
                resizeMode: 'cover',
                borderRadius: 100,
              }}
            />
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <View
              style={{
                alignSelf: 'flex-start',
                minWidth: 40,
                maxWidth: 300,
                backgroundColor: '#FFFFFF',
                borderRadius: 20,
                borderBottomLeftRadius: 0,
                paddingVertical: totalSize(2),
                paddingHorizontal: totalSize(2),
                marginTop: totalSize(3),
              }}>
              <Text
                style={{
                  color: '#3F3F46',
                  fontSize: baseStyle.fontSize(14),
                  fontWeight: '400',
                  lineHeight: 22,
                  textAlign: 'right',
                }}>
                Nah tbh 😋 !
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-start',
                marginTop: totalSize(1),
              }}>
              <View
                style={{justifyContent: 'center', paddingRight: totalSize(1)}}>
                <Text
                  style={{
                    color: '#B5C6C4',
                    fontSize: baseStyle.fontSize(10),
                    fontWeight: '400',
                  }}>
                  04.12.2024
                </Text>
              </View>
              <View
                style={{justifyContent: 'center', paddingLeft: totalSize(1)}}>
                <Text
                  style={{
                    color: '#B5C6C4',
                    fontSize: baseStyle.fontSize(10),
                    fontWeight: '400',
                  }}>
                  10:24 AM
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBox}>
        <TextInput
          style={{padding: 0, paddingBottom: totalSize(2)}}
          placeholder="Message"
          multiline={true}
          placeholderTextColor="#3F3F46"
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#CA2D30',
            alignSelf: 'flex-end',
            borderRadius: 5,
            paddingVertical: totalSize(1),
            paddingHorizontal: totalSize(3),
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: baseStyle.fontSize(10),
              fontWeight: '400',
              textAlign: 'center',
            }}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  bottomBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: totalSize(2),
    paddingVertical: totalSize(2),
    marginHorizontal: totalSize(3),
    marginBottom: totalSize(4),
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
});

export default Inbox;
