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
//import {useNavigation} from '@react-navigation/native';
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
  // const navigation = useNavigation();
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
     
    
        <Spacer isDoubleBase />
       
        <Spacer isBasic />
        <View style={styles.container}>
          <Carousel
            vertical={true}
            data={sliderData}
            layout={'default'}
            renderItem={renderItem}
          //  sliderWidth={Dimensions.get('window').width}
            sliderHeight={Dimensions.get('window').height/1.7}
            itemWidth={Dimensions.get('window').width - 80}
            itemHeight={Dimensions.get('window').height / 1.7}
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
