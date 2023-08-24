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
import {Modals, Text, Wrapper} from '../../../components';
import CustomStatusBar from '../../../components/statusBars/customStatusBar';
import {height, totalSize} from 'react-native-dimension';
import {useNavigation} from '@react-navigation/native';
import {colors, sizes} from '../../../services';
import Spacer from '../../../components/spacer';
import {SvgIcons} from '../../../services/constants/svg';
import {Icon} from '@rneui/base';

const tabData = [
  {id: 1, title: 'Compatible'},
  {id: 2, title: 'Active Today'},
  {id: 3, title: 'Reccomended'},
  {id: 4, title: 'Recent'},
];
const DATA = [
  {
    id: '1',
    title: 'Janice Cammeron',
    image: require('../../../assets/images/main/user-7.png'),
  },
  {
    id: '2',
    title: 'Maria Johnes',
    image: require('../../../assets/images/main/user-8.png'),
  },
  {
    id: '3',
    title: 'Monika Mozer',
    image: require('../../../assets/images/main/user-9.png'),
  },
  {
    id: '4',
    title: 'Anna Crab',
    image: require('../../../assets/images/main/user-10.png'),
  },
  {
    id: '5',
    title: 'Jade Edwards',
    image: require('../../../assets/images/main/user-11.png'),
  },
  {
    id: '6',
    title: 'Jessica Oneil',
    image: require('../../../assets/images/main/user-12.png'),
  },
];

function Search() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [activeTab, setActivetab] = useState(0);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const renderItem = ({item, index}) => {
    const even = index % 2 === 0;
    return (
      <View
        style={{
          flex: 1,
          marginBottom: totalSize(3),
          marginRight: even ? totalSize(2) : 0,
        }}>
        <View style={{height: 170, width: '100%', borderRadius: 10}}>
          <Image
            source={item?.image}
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'cover',
              borderRadius: 10,
            }}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: totalSize(0.8)}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{color: '#3F3F46', fontSize: 14, fontWeight: '400'}}>
              {item?.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={toggleModal}
            style={{justifyContent: 'center'}}>
            <SvgIcons.DotIconHorizontal />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Wrapper isMain style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <CustomStatusBar barStyle={'dark'} backgroundColor={'#FFFFFF'} />
      <ScrollView>
        <Wrapper marginHorizontalBase marginVerticalBase>
          <Text style={{color: '#586160', fontSize: 14, fontWeight: '400'}}>
            Search by Phone Number
          </Text>
          <Spacer isBasic />
          <Wrapper
            style={{
              flexDirection: 'row',
              borderColor: '#DEE1E1',
              borderWidth: 1,
              padding: totalSize(1),
              borderRadius: 8,
            }}>
            <Wrapper style={{flex: 1}}>
              <TextInput placeholder="" style={{padding: 0}} />
            </Wrapper>
            <SvgIcons.SearchTabIcon
              strokeColor={'#383838'}
              fillColor={'#FFF'}
            />
          </Wrapper>
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
                    fontSize: 14,
                    fontWeight: '400',
                    textAlign: 'center',
                  }}>
                  {val?.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <Spacer isBasic />
        <Wrapper marginHorizontalBase>
          <FlatList
            data={DATA}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </Wrapper>
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
      </ScrollView>

      {/* Modal Component */}
      <Modals.PopupPrimary visible={modalVisible} toggle={toggleModal}>
        <Wrapper marginVerticalBase marginHorizontalBase>
          <TouchableOpacity onPress={toggleModal}>
            <Wrapper alignItemsFlexStart>
              <Icon
                size={totalSize(5)}
                type="material-community"
                name="arrow-left"
              />
            </Wrapper>
          </TouchableOpacity>
          <Wrapper marginVerticalBase alignItemsCenter>
            <TouchableOpacity>
              <Text style={[colors.appTextColor9]} isMediumTitle isExtraBold>
                Fuse this profile
              </Text>
            </TouchableOpacity>
            <Spacer isTiny />
            <TouchableOpacity>
              <Text style={[colors.appTextColor9]} isMediumTitle isExtraBold>
                Share this profile
              </Text>
            </TouchableOpacity>
            <Spacer isTiny />
            <TouchableOpacity>
              <Text style={[colors.appTextColor9]} isMediumTitle isExtraBold>
                Nudge this profile
              </Text>
            </TouchableOpacity>
          </Wrapper>
        </Wrapper>
      </Modals.PopupPrimary>
    </Wrapper>
  );
}

export default Search;
