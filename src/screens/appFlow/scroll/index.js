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

const dropdownData = [
  {
    id: '1',
    name: 'Marriam M.',
    image: require('../../../assets/images/main/user-4.png'),
  },
  {
    id: '2',
    name: 'Janna S.',
    image: require('../../../assets/images/main/user-5.png'),
  },
  {
    id: '3',
    name: 'Danny L.',
    image: require('../../../assets/images/main/user-6.png'),
  },
];
const tabData = [
  {id: 1, title: 'Compatible'},
  {id: 2, title: 'Active Today'},
  {id: 3, title: 'Reccomended'},
  {id: 4, title: 'Recent'},
];
const sliderData = [
  {
    id: '1',
    name: 'Nicole',
    image: require('../../../assets/images/main/user-7.png'),
  },
  {
    id: '2',
    name: 'Janna S.',
    image: require('../../../assets/images/main/user-8.png'),
  },
  {
    id: '3',
    name: 'Danny L.',
    image: require('../../../assets/images/main/user-9.png'),
  },
  {
    id: '4',
    name: 'Marriam M.',
    image: require('../../../assets/images/main/user-10.png'),
  },
  {
    id: '5',
    name: 'Janna S.',
    image: require('../../../assets/images/main/user-11.png'),
  },
  {
    id: '6',
    name: 'Danny L.',
    image: require('../../../assets/images/main/user-12.png'),
  },
];

function Scroll() {
  const navigation = useNavigation();
  const [dropdownActive, setDropdownActive] = useState(false);
  const [userName, setUserName] = useState(dropdownData[0]?.name);
  const [userImage, setUserImage] = useState(dropdownData[0]?.image);
  const [activeTab, setActivetab] = useState(0);

  const renderItem = ({item, index}) => {
    const isActive = index === 0;
    return (
      <View style={styles.slide}>
        <Image
          source={item?.image}
          style={[styles.image, isActive && styles.activeImage]}
        />
        <Spacer isBasic />
        <TouchableOpacity
          activeOpacity={0.7}
          style={{flexDirection: 'row'}}
          // onPress={() =>
          //   navigation.navigate('ScrollDetail', {
          //     userDetail: item,
          //   })
          // }
          >
          <View
            style={{justifyContent: 'center', marginHorizontal: totalSize(1)}}>
            <Image
              source={require('../../../assets/images/main/user-5.png')}
              style={{
                height: 48,
                width: 48,
                resizeMode: 'cover',
                borderRadius: 100,
              }}
            />
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text
              style={{
                color: '#383838',
                fontSize: baseStyle.fontSize(30),
                fontWeight: '900',
              }}>
              {item?.name}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Wrapper isMain>
      <CustomStatusBar barStyle={'dark'} backgroundColor={'#FFF'} />
      <ScrollView>
        <Wrapper marginHorizontalBase marginVerticalBase>
          <Text style={{color: '#586160', fontSize: baseStyle.fontSize(30), fontWeight: '900'}}>
            Let’s Scroll
          </Text>
          <Spacer isBasic />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setDropdownActive(!dropdownActive)}
            style={{
              flexDirection: 'row',
              backgroundColor: '#B5C6C41A',
              borderBottomLeftRadius: dropdownActive ? 0 : 24,
              borderBottomRightRadius: dropdownActive ? 0 : 24,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              paddingVertical: totalSize(2),
              paddingHorizontal: totalSize(2),
            }}>
            <View style={{justifyContent: 'center'}}>
              <Text style={{color: '#3F3F46', fontSize: baseStyle.fontSize(14), fontWeight: '400'}}>
                Fusing for
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                marginHorizontal: totalSize(1),
              }}>
              <Image
                source={userImage}
                style={{
                  height: baseStyle.height(40),
                  width: baseStyle.width(40),
                  resizeMode: 'cover',
                  borderRadius: 100,
                }}
              />
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{color: '#3F3F46', fontSize: baseStyle.fontSize(14), fontWeight: '400'}}>
                {userName}
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <SvgIcons.DropdownRedIcon />
            </View>
          </TouchableOpacity>
          {dropdownActive && (
            <View
              style={{
                backgroundColor: '#B5C6C41A',
                borderBottomLeftRadius: 24,
                borderBottomRightRadius: 24,
                paddingHorizontal: totalSize(2),
              }}>
              {dropdownData?.map((val, key) => {
                return (
                  <TouchableOpacity
                    key={key}
                    activeOpacity={0.7}
                    style={{flexDirection: 'row', paddingBottom: totalSize(1)}}
                    onPress={() => {
                      setDropdownActive(!dropdownActive);
                      setUserName(val?.name);
                      setUserImage(val?.image);
                    }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        marginRight: totalSize(1),
                      }}>
                      <Image
                        source={val?.image}
                        style={{
                          height: baseStyle.height(40),
                          width: baseStyle.width(40),
                          resizeMode: 'cover',
                          borderRadius: 100,
                        }}
                      />
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                      <Text
                        style={{
                          color: '#3F3F46',
                          fontSize: baseStyle.fontSize(14),
                          fontWeight: '400',
                        }}>
                        {val?.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </Wrapper>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tabData?.map((val, key) => {
            return (
              <TouchableOpacity
                key={key}
                onPress={() => setActivetab(key)}
                style={{
                  backgroundColor:
                    activeTab === key ? '#383838' : 'transparent',
                  marginLeft: key === 0 ? totalSize(2) : 0,
                  marginRight: tabData?.length - 1 === key ? totalSize(2) : 0,
                  borderRadius: 100,
                  paddingVertical: totalSize(1),
                  paddingHorizontal: totalSize(1.5),
                }}>
                <Text
                  style={{
                    color: activeTab === key ? '#FFF' : '#383838',
                    fontSize: baseStyle.fontSize(14),
                    fontWeight: '400',
                    textAlign: 'center',
                  }}>
                  {val?.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <Spacer isDoubleBase />
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={{justifyContent: 'center'}}>
            <View
              style={{
                backgroundColor: '#DB353533',
                height: baseStyle.height(38),
                width: baseStyle.width(38),
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <SvgIcons.CloseRedIcon />
            </View>
          </View>
          <View style={{justifyContent: 'center'}}>
            <View
              style={{
                backgroundColor: '#E7EBEA',
                height: baseStyle.height(38),
                width: baseStyle.width(38),
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <SvgIcons.SparkIcon strokeColor={'#383838'} fillColor={'#FFF'} />
            </View>
          </View>
        </View>
        <Spacer isBasic />
        <View style={styles.container}>
          <Carousel
            data={sliderData}
            layout={'default'}
            renderItem={renderItem}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width - 80}
          />
        </View>
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
      </ScrollView>
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
    height: baseStyle.height(300),
    resizeMode: 'cover',       
    borderRadius: 40,
  },
  activeImage: {
    height: baseStyle.height(316),
  },
});

export default Scroll;
