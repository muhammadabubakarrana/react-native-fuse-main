import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {ScrollViews, Text, Wrapper} from '../../../components';
import CustomStatusBar from '../../../components/statusBars/customStatusBar';
import {height, totalSize} from 'react-native-dimension';
import {useNavigation} from '@react-navigation/native';
import {colors, routes, sizes} from '../../../services';
import Spacer from '../../../components/spacer';
import Carousel from 'react-native-snap-carousel';
import {SvgIcons} from '../../../services/constants/svg';
import CaptainsPage from './captainsPage';

const sliderData = [
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
  {
    id: '4',
    name: 'Marriam M.',
    image: require('../../../assets/images/main/user-1.png'),
  },
  {
    id: '5',
    name: 'Janna S.',
    image: require('../../../assets/images/main/user-2.png'),
  },
  {
    id: '6',
    name: 'Danny L.',
    image: require('../../../assets/images/main/user-3.png'),
  },
  {
    id: '7',
    name: 'Marriam M.',
    image: require('../../../assets/images/main/user-4.png'),
  },
  {
    id: '8',
    name: 'Janna S.',
    image: require('../../../assets/images/main/user-5.png'),
  },
  {
    id: '9',
    name: 'Danny L.',
    image: require('../../../assets/images/main/user-6.png'),
  },
];
const CustomSlide = ({items}) => (
  <View style={styles.slideContainer}>
    {items.map(item => (
      <View key={item.id} style={styles.slideItem}>
        <Image source={item.image} style={styles.image} />
        <Text
          style={{
            fontSize: 13,
            color: '#383838',
            fontWeight: '400',
            paddingTop: totalSize(2),
          }}>
          {item.name}
        </Text>
      </View>
    ))}
  </View>
);

function ProfileHome() {
  const navigation = useNavigation();
  const itemsPerSlide = 3;
  const [activeSlide, setActiveSlide] = useState(0);

  const groupedData = sliderData.reduce((resultArray, item, index) => {
    if (index % itemsPerSlide === 0) {
      resultArray.push([]);
    }
    const groupIndex = Math.floor(index / itemsPerSlide);
    resultArray[groupIndex].push(item);
    return resultArray;
  }, []);
  const renderCustomSlide = ({item}) => <CustomSlide items={item} />;
  const Pagination = () => (
    <View style={styles.paginationContainer}>
      {groupedData.map((_, index) => (
        <View
          key={`pagination-dot-${index}`}
          style={[
            styles.paginationDot,
            index === activeSlide && styles.activeDot,
          ]}
        />
      ))}
    </View>
  );

  return (
    <Wrapper isMain style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <CustomStatusBar barStyle={'dark'} backgroundColor={'#FFFFFF'} />
      <ScrollView>
        <Spacer isBasic />
        <Wrapper marginHorizontalBase>
          <Wrapper style={{flexDirection: 'row'}}>
            <Wrapper
              style={{justifyContent: 'center', paddingRight: totalSize(1.5)}}>
              <Image
                source={require('../../../assets/images/main/user-1.png')}
                style={{
                  height: 60,
                  width: 60,
                  resizeMode: 'cover',
                  borderRadius: 100,
                }}
              />
            </Wrapper>
            <Wrapper style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{fontSize: 20, color: '#383838', fontWeight: '400'}}>
                Michael Wawrick
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(routes.profileScreen)}>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#383838',
                    fontWeight: '400',
                    paddingTop: totalSize(0.4),
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
            </Wrapper>
          </Wrapper>
          <Spacer isBasic />
          <Wrapper
            style={{
              backgroundColor: '#B5C6C41A',
              paddingVertical: totalSize(2),
              borderRadius: 24,
            }}>
            <Wrapper style={{paddingHorizontal: totalSize(2)}}>
              <Text style={{fontSize: 13, color: '#383838', fontWeight: '400'}}>
                Fusers@
              </Text>
              <Text style={{fontSize: 24, color: '#383838', fontWeight: '900'}}>
                glance
              </Text>
            </Wrapper>
            <Spacer isDoubleBase />
            <Wrapper style={styles.container}>
              <Carousel
                data={groupedData}
                layout={'default'}
                inactiveSlideOpacity={1}
                renderItem={renderCustomSlide}
                onSnapToItem={index => setActiveSlide(index)}
                onBeforeSnapToItem={index => setActiveSlide(index)}
                itemWidth={Dimensions.get('window').width - totalSize(8)}
                sliderWidth={Dimensions.get('window').width - totalSize(8)}
              />
              <Spacer isDoubleBase />
              <Pagination />
            </Wrapper>
          </Wrapper>
          <Spacer isDoubleBase />
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.captainpage)}
            style={{flexDirection: 'row', paddingTop: totalSize(0)}}>
            <View
              style={{
                justifyContent: 'center',
                height: 38,
                width: 38,
                alignItems: 'center',
                backgroundColor: '#B5C6C41A',
              }}>
              <SvgIcons.CrownIcon />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                paddingLeft: totalSize(1.5),
              }}>
              <Text style={{fontSize: 16, color: '#383838', fontWeight: '400'}}>
                Captains page
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', paddingTop: totalSize(2)}}>
            <View
              style={{
                justifyContent: 'center',
                height: 38,
                width: 38,
                alignItems: 'center',
                backgroundColor: '#B5C6C41A',
              }}>
              <SvgIcons.FilterIcon />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                paddingLeft: totalSize(1.5),
              }}>
              <Text style={{fontSize: 16, color: '#383838', fontWeight: '400'}}>
                Dating Preferences
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.settings)}
            style={{flexDirection: 'row', paddingTop: totalSize(2)}}>
            <View
              style={{
                justifyContent: 'center',
                height: 38,
                width: 38,
                alignItems: 'center',
                backgroundColor: '#B5C6C41A',
              }}>
              <SvgIcons.SettingIcon />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                paddingLeft: totalSize(1.5),
              }}>
              <Text style={{fontSize: 16, color: '#383838', fontWeight: '400'}}>
                Settings
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', paddingTop: totalSize(2)}}>
            <View
              style={{
                justifyContent: 'center',
                height: 38,
                width: 38,
                alignItems: 'center',
                backgroundColor: '#B5C6C41A',
              }}>
              <SvgIcons.HelpIcon />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                paddingLeft: totalSize(1.5),
              }}>
              <Text style={{fontSize: 16, color: '#383838', fontWeight: '400'}}>
                Help Center
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', paddingTop: totalSize(2)}}>
            <View
              style={{
                justifyContent: 'center',
                height: 38,
                width: 38,
                alignItems: 'center',
                backgroundColor: '#B5C6C41A',
              }}>
              <SvgIcons.StarIcon />
            </View>
            <View
              style={{justifyContent: 'center', paddingLeft: totalSize(1.5)}}>
              <Text style={{fontSize: 16, color: '#B5C6C4', fontWeight: '400'}}>
                Subsripction
              </Text>
            </View>
            <View style={{justifyContent: 'center', marginLeft: totalSize(1)}}>
              <View
                style={{
                  backgroundColor: '#8683F433',
                  paddingVertical: totalSize(0.6),
                  paddingHorizontal: totalSize(1.2),
                  borderRadius: 50,
                }}>
                <Text
                  style={{
                    fontSize: 6,
                    color: '#6B6BDC',
                    fontWeight: '400',
                    textAlign: 'center',
                  }}>
                  coming soon
                </Text>
              </View>
            </View>
          </View>
        </Wrapper>
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
  slideContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slideItem: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 76,
    height: 76,
    resizeMode: 'cover',
    borderRadius: 40,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#B5C6C4',
    backgroundColor: '#FFF',
    marginHorizontal: 5,
  },
  activeDot: {
    borderColor: colors.appColor1,
  },
});

export default ProfileHome;
