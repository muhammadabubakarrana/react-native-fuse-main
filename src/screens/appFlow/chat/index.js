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
import {Text, TextInputs, Wrapper} from '../../../components';
import CustomStatusBar from '../../../components/statusBars/customStatusBar';
import {SvgIcons} from '../../../services/constants/svg';
import {height, totalSize} from 'react-native-dimension';
import {useNavigation} from '@react-navigation/native';
import {baseStyle, colors, sizes} from '../../../services';
import Carousel from 'react-native-snap-carousel';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import {Icon} from '@rneui/base';

const dropdownData = [
  {id: '2', name: 'Inbox'},
  {id: '3', name: 'New Fuses'},
  {id: '4', name: 'Active Fuses'},
  {id: '5', name: 'Hidden Fuses'},
  {id: '6', name: 'Team'},
];

function Chat() {
  const navigation = useNavigation();
  const [dropdownActive, setDropdownActive] = useState(false);
  const [chatType, setChatType] = useState(dropdownData[0]?.name);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const hideMenu = () => setMenuVisible(false);
  const showMenu = () => setMenuVisible(true);

  return (
    <Wrapper isMain>
      <CustomStatusBar barStyle={'dark'} backgroundColor={'#FFF'} />
      <Wrapper marginHorizontalBase marginVerticalBase>
        <Spacer isBasic />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setDropdownActive(!dropdownActive)}
          style={{
            flexDirection: 'row',
            backgroundColor: colors.black,
            //borderBottomColor: '#DEE1E1',
            borderBottomWidth: dropdownActive ? 1 : 0,
            borderBottomLeftRadius: dropdownActive ? 0 : 24,
            borderBottomRightRadius: dropdownActive ? 0 : 24,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            paddingVertical: totalSize(2),
            paddingHorizontal: totalSize(2),
          }}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text
              style={{
                color: '#B5C6C4',
                fontSize: baseStyle.fontSize(12),
                fontWeight: '400',
              }}>
              Chat with
            </Text>
            <Text
              style={{
                color: colors.snow,
                fontSize: baseStyle.fontSize(16),
                fontWeight: '900',
              }}>
              {chatType}
            </Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Icon type="feather" name="chevron-down" color={'#B5C6C4'} />
          </View>
        </TouchableOpacity>
        {dropdownActive && (
          <View
            style={{
              backgroundColor: colors.black,
              paddingVertical: totalSize(1),
              borderBottomLeftRadius: 24,
              borderBottomRightRadius: 24,
              paddingHorizontal: totalSize(2),
            }}>
            {/* <Text
              style={{
                color: '#B5C6C4',
                fontSize: baseStyle.fontSize(12),
                fontWeight: '400',
              }}>
              Chat With
            </Text> */}
            {dropdownData?.map((val, key) => {
              return (
                <TouchableOpacity
                  key={key}
                  activeOpacity={0.7}
                  style={{flexDirection: 'row', paddingBottom: totalSize(1)}}
                  onPress={() => {
                    setDropdownActive(!dropdownActive);
                    setChatType(val?.name);
                  }}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text
                      style={{
                        color: colors.snow,
                        fontSize: baseStyle.fontSize(16),
                        fontWeight: '900',
                      }}>
                      {val?.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
        <Spacer isBasic />
        {chatType === 'New Fuses' ? null : (
          <Wrapper style={{}}>
            <TextInputs.Underlined
              placeholder={'Search Chat'}
              iconNameRight={'search'}
              iconTypeRight={'feather'}
              iconColorRight={colors.black}
              placeholderTextColor={colors.black}
            />
          </Wrapper>
        )}
      </Wrapper>
      {chatType === 'New Fuses' ? (
        <Wrapper marginHorizontalBase marginVerticalBase>
          <Spacer isDoubleBase />
          <Spacer isDoubleBase />
          <Text
            style={{
              color: '#383838',
              fontSize: 30,
              fontWeight: '900',
              lineHeight: 36,
              textAlign: 'center',
            }}>
            Your profile isn’t set{`\n`}up to be fused yet!
          </Text>
          <Spacer isDoubleBase />
          <TouchableOpacity
            style={{
              backgroundColor: '#CA2D30',
              width: '80%',
              alignSelf: 'center',
              borderRadius: 8,
              paddingVertical: totalSize(1.5),
              paddingHorizontal: totalSize(3),
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 14,
                fontWeight: '400',
                textAlign: 'center',
              }}>
              Create your profile
            </Text>
          </TouchableOpacity>
        </Wrapper>
      ) : (
        <ScrollView>
          <Spacer isBasic />
          <TouchableOpacity
            onPress={() => navigation.navigate('Inbox')}
            style={{borderTopColor: '#DEE1E1', borderTopWidth: 1}}>
            <Wrapper
              marginHorizontalBase
              style={{flexDirection: 'row', paddingVertical: totalSize(1)}}>
              <View
                style={{justifyContent: 'center', paddingRight: totalSize(2)}}>
                <View style={{position: 'relative'}}>
                  <Image
                    source={require('../../../assets/images/main/user-2.png')}
                    style={{
                      height: 52,
                      width: 52,
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
              </View>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text
                  style={{
                    color: '#3F3F46',
                    fontSize: 16,
                    fontWeight: '400',
                    paddingBottom: totalSize(1),
                  }}>
                  Amy
                </Text>
                <Text
                  style={{
                    color: '#3F3F46',
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 18,
                    paddingBottom: totalSize(1),
                  }}>
                  Yoo, you look awes ome wanna hang out? Did you meet my friend
                  btw she...
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 0.4, justifyContent: 'center'}}>
                    <Text
                      style={{
                        color: '#7E8C8B',
                        fontSize: 8,
                        fontWeight: '400',
                      }}>
                      04.12.2024
                    </Text>
                  </View>
                  <View style={{flex: 0.4, justifyContent: 'center'}}>
                    <Text
                      style={{
                        color: '#7E8C8B',
                        fontSize: 8,
                        fontWeight: '400',
                      }}>
                      10:24 AM
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={showMenu}
                style={{
                  flex: 0.2,
                  alignItems: 'flex-end',
                }}>
                <Icon type="material-community" name="dots-horizontal" />
              </TouchableOpacity>
              {
                <Menu
                  style={{
                    width: 'auto',
                    paddingHorizontal: baseStyle.paddingHorizontal(5),
                    paddingVertical: baseStyle.paddingVertical(5),
                    backgroundColor: colors.black,
                  }}
                  visible={isMenuVisible}
                  onRequestClose={hideMenu}>
                  <MenuItem onPress={hideMenu}>
                    <Text isMedium isWhite>
                      Delete
                    </Text>
                  </MenuItem>
                  <MenuItem onPress={hideMenu}>
                    <Text isMedium isWhite>
                      Report
                    </Text>
                  </MenuItem>
                </Menu>
              }
            </Wrapper>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Inbox')}
            style={{borderTopColor: '#DEE1E1', borderTopWidth: 1}}>
            <Wrapper
              marginHorizontalBase
              style={{flexDirection: 'row', paddingVertical: totalSize(1)}}>
              <View
                style={{justifyContent: 'center', paddingRight: totalSize(2)}}>
                <Image
                  source={require('../../../assets/images/main/user-4.png')}
                  style={{
                    height: 52,
                    width: 52,
                    resizeMode: 'cover',
                    borderRadius: 100,
                  }}
                />
              </View>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text
                  style={{
                    color: '#3F3F46',
                    fontSize: 16,
                    fontWeight: '400',
                    paddingBottom: totalSize(1),
                  }}>
                  Emma
                </Text>
                <Text
                  style={{
                    color: '#3F3F46',
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 18,
                    paddingBottom: totalSize(1),
                  }}>
                  Yoo, you look awes ome wanna hang out? Did you meet my friend
                  btw she...
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 0.4, justifyContent: 'center'}}>
                    <Text
                      style={{
                        color: '#7E8C8B',
                        fontSize: 8,
                        fontWeight: '400',
                      }}>
                      04.12.2024
                    </Text>
                  </View>
                  <View style={{flex: 0.4, justifyContent: 'center'}}>
                    <Text
                      style={{
                        color: '#7E8C8B',
                        fontSize: 8,
                        fontWeight: '400',
                      }}>
                      10:24 AM
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  flex: 0.2,
                  alignItems: 'flex-end',
                }}>
                <Icon type="material-community" name="dots-horizontal" />
              </TouchableOpacity>
            </Wrapper>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Inbox')}
            style={{
              borderTopColor: '#DEE1E1',
              borderTopWidth: 1,
              backgroundColor: '#F8F9F9',
            }}>
            <Wrapper
              marginHorizontalBase
              style={{flexDirection: 'row', paddingVertical: totalSize(1)}}>
              <View
                style={{justifyContent: 'center', paddingRight: totalSize(2)}}>
                <Image
                  source={require('../../../assets/images/main/user-5.png')}
                  style={{
                    height: 52,
                    width: 52,
                    resizeMode: 'cover',
                    borderRadius: 100,
                  }}
                />
              </View>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text
                  style={{
                    color: '#3F3F46',
                    fontSize: 16,
                    fontWeight: '400',
                    paddingBottom: totalSize(1),
                  }}>
                  Samira
                </Text>
                <Text
                  style={{
                    color: '#3F3F46',
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 18,
                    paddingBottom: totalSize(1),
                  }}>
                  Yoo, you look awes ome wanna hang out? Did you meet my friend
                  btw she...
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 0.4, justifyContent: 'center'}}>
                    <Text
                      style={{
                        color: '#7E8C8B',
                        fontSize: 8,
                        fontWeight: '400',
                      }}>
                      04.12.2024
                    </Text>
                  </View>
                  <View style={{flex: 0.4, justifyContent: 'center'}}>
                    <Text
                      style={{
                        color: '#7E8C8B',
                        fontSize: 8,
                        fontWeight: '400',
                      }}>
                      10:24 AM
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  flex: 0.2,
                  alignItems: 'flex-end',
                }}>
                <Icon type="material-community" name="dots-horizontal" />
              </TouchableOpacity>
            </Wrapper>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Inbox')}
            style={{
              borderTopColor: '#DEE1E1',
              borderTopWidth: 1,
              borderBottomColor: '#DEE1E1',
              borderBottomWidth: 1,
              backgroundColor: '#F8F9F9',
            }}>
            <Wrapper
              marginHorizontalBase
              style={{flexDirection: 'row', paddingVertical: totalSize(1)}}>
              <View
                style={{justifyContent: 'center', paddingRight: totalSize(2)}}>
                <Image
                  source={require('../../../assets/images/main/user-6.png')}
                  style={{
                    height: 52,
                    width: 52,
                    resizeMode: 'cover',
                    borderRadius: 100,
                  }}
                />
              </View>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text
                  style={{
                    color: '#3F3F46',
                    fontSize: 16,
                    fontWeight: '400',
                    paddingBottom: totalSize(1),
                  }}>
                  Leo
                </Text>
                <Text
                  style={{
                    color: '#3F3F46',
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 18,
                    paddingBottom: totalSize(1),
                  }}>
                  Yoo, you look awes ome wanna hang out? Did you meet my friend
                  btw she...
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 0.4, justifyContent: 'center'}}>
                    <Text
                      style={{
                        color: '#7E8C8B',
                        fontSize: 8,
                        fontWeight: '400',
                      }}>
                      04.12.2024
                    </Text>
                  </View>
                  <View style={{flex: 0.4, justifyContent: 'center'}}>
                    <Text
                      style={{
                        color: '#7E8C8B',
                        fontSize: 8,
                        fontWeight: '400',
                      }}>
                      10:24 AM
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  flex: 0.2,
                  alignItems: 'flex-end',
                }}>
                <Icon type="material-community" name="dots-horizontal" />
              </TouchableOpacity>
            </Wrapper>
          </TouchableOpacity>
          <Spacer isDoubleBase />
          <Spacer isDoubleBase />
          <Spacer isDoubleBase />
        </ScrollView>
      )}
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: Dimensions.get('window').width - 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  image: {
    width: Dimensions.get('window').width - 80,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 40,
  },
  activeImage: {
    height: 316,
  },
});

export default Chat;
