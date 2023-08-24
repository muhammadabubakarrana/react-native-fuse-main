import React, { useRef, useState } from 'react';
import { View, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Text, Wrapper } from '../../../components';
import CustomStatusBar from '../../../components/statusBars/customStatusBar';
import { SvgIcons } from '../../../services/constants/svg';
import { height, totalSize } from 'react-native-dimension'
import { useNavigation } from '@react-navigation/native';
import { sizes } from '../../../services';
import Carousel from 'react-native-snap-carousel';

const dropdownData = [
  { id: '1', name: "Marriam M.", image: require('../../../assets/images/main/user-4.png') },
  { id: '2', name: "Janna S.", image: require('../../../assets/images/main/user-5.png') },
  { id: '3', name: "Danny L.", image: require('../../../assets/images/main/user-6.png') },
];
const tabData = [
  {id: 1, title: "Compatible"},
  {id: 2, title: "Active Today"},
  {id: 3, title: "Reccomended"},
  {id: 4, title: "Recent"},
];
const sliderData = [
  { id: '1', name: "Nicole", image: require('../../../assets/images/main/user-7.png') },
  { id: '2', name: "Janna S.", image: require('../../../assets/images/main/user-8.png') },
  { id: '3', name: "Danny L.", image: require('../../../assets/images/main/user-9.png') },
  { id: '4', name: "Marriam M.", image: require('../../../assets/images/main/user-10.png') },
  { id: '5', name: "Janna S.", image: require('../../../assets/images/main/user-11.png') },
  { id: '6', name: "Danny L.", image: require('../../../assets/images/main/user-12.png') },
];

function ScrollDetail(props) {
  const scrollViewRef = useRef(null);
  const navigation = useNavigation();
  const {userDetail} = props.route.params;

  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
  };
  
  return (
    <Wrapper isMain >
      <CustomStatusBar
        barStyle={"dark"}
        backgroundColor={"#FFF"}
      />
      <Wrapper marginHorizontalBase marginVerticalBase>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SvgIcons.LeftArrowIcon />
        </TouchableOpacity>
      </Wrapper>
      <ScrollView ref={scrollViewRef}>
        <Wrapper marginHorizontalBase>
          <Spacer isBasic />
          <View style={{flexDirection:"row"}}>
            <View style={{justifyContent:"center"}}>
              <View style={{backgroundColor:"#DB353533",height:38,width:38,borderRadius:100,alignItems:"center",justifyContent:"center"}}>
                <SvgIcons.CloseRedIcon />
              </View>
            </View>
            <View style={{flex:1,justifyContent:"center"}}>
              <Text style={{color:"#383838",fontSize:30,fontWeight:"900",textAlign:"center"}}>
                {userDetail?.name}
              </Text>
            </View>
            <View style={{justifyContent:"center"}}>
              <View style={{backgroundColor:"#E7EBEA",height:38,width:38,borderRadius:100,alignItems:"center",justifyContent:"center"}}>
                <SvgIcons.SparkIcon strokeColor={"#383838"} fillColor={"#FFF"} />
              </View>
            </View>
          </View>
          <Spacer isDoubleBase />
          <Wrapper>
            <Image
              style={styles.image} 
              source={require('../../../assets/images/main/user-7.png')}
            />
          </Wrapper>
          <Spacer isBasic />
          <Wrapper style={{flexDirection:"row",backgroundColor:"#B5C6C41A",borderRadius:24,paddingVertical:totalSize(2),paddingHorizontal:totalSize(2)}}>
            <Wrapper style={{flex:.7,justifyContent:"center"}}>
              <Text style={{color:"#3F3F46",fontSize:10,fontWeight:"400"}}>
                Heigh
              </Text>
              <Text style={{color:"#3F3F46",fontSize:14,fontWeight:"400"}}>
                178cm
              </Text>
            </Wrapper>
            <Wrapper style={{flex:1,justifyContent:"center"}}>
              <Text style={{color:"#3F3F46",fontSize:10,fontWeight:"400"}}>
                Drink
              </Text>
              <Text style={{color:"#3F3F46",fontSize:14,fontWeight:"400"}}>
                Sometimes
              </Text>
            </Wrapper>
            <Wrapper style={{flex:.7,justifyContent:"center"}}>
              <Text style={{color:"#3F3F46",fontSize:10,fontWeight:"400"}}>
                Smoke
              </Text>
              <Text style={{color:"#3F3F46",fontSize:14,fontWeight:"400"}}>
                No
              </Text>
            </Wrapper>
            <Wrapper style={{flex:.7,justifyContent:"center"}}>
              <Text style={{color:"#3F3F46",fontSize:10,fontWeight:"400"}}>
                Drugs
              </Text>
              <Text style={{color:"#3F3F46",fontSize:14,fontWeight:"400"}}>
                Yes
              </Text>
            </Wrapper>
          </Wrapper>
          <Spacer isBasic />
          <Wrapper>
            <Image
              style={styles.image} 
              source={require('../../../assets/images/main/user-8.png')}
            />
          </Wrapper>
          <Spacer isBasic />
          <Wrapper style={{backgroundColor:"#B5C6C41A",borderRadius:24,paddingVertical:totalSize(2),paddingHorizontal:totalSize(2)}}>
            <Wrapper style={{marginBottom:totalSize(1)}}>
              <Text style={{color:"#3F3F46",fontSize:10,fontWeight:"400"}}>
                From
              </Text>
              <Text style={{color:"#3F3F46",fontSize:14,fontWeight:"400"}}>
                New York
              </Text>
            </Wrapper>
            <Wrapper style={{marginBottom:totalSize(1)}}>
              <Text style={{color:"#3F3F46",fontSize:10,fontWeight:"400"}}>
                Relationship Goals
              </Text>
              <Text style={{color:"#3F3F46",fontSize:14,fontWeight:"400"}}>
                Affection and Romance
              </Text>
            </Wrapper>
            <Wrapper style={{}}>
              <Text style={{color:"#3F3F46",fontSize:10,fontWeight:"400"}}>
                Politicly Status
              </Text>
              <Text style={{color:"#3F3F46",fontSize:14,fontWeight:"400"}}>
                Politicly active
              </Text>
            </Wrapper>
          </Wrapper>
          <Spacer isBasic />
          <Wrapper>
            <Image
              style={styles.image} 
              source={require('../../../assets/images/main/user-9.png')}
            />
          </Wrapper>
          <Spacer isBasic />
          <Wrapper style={{backgroundColor:"#B5C6C41A",borderRadius:24,paddingVertical:totalSize(2),paddingHorizontal:totalSize(2)}}>
            <Wrapper style={{}}>
              <Text style={{color:"#3F3F46",fontSize:10,fontWeight:"400",marginBottom:totalSize(1)}}>
                Typical Sunday
              </Text>
              <Text style={{color:"#3F3F46",fontSize:14,fontWeight:"400"}}>
                Running 🏃 from 06AM to 08PM and rest of the day enjoys 🎉 partying with friends 🥳
              </Text>
            </Wrapper>
          </Wrapper>
          <Spacer isBasic />
          <Wrapper>
            <Image
              style={styles.image} 
              source={require('../../../assets/images/main/user-10.png')}
            />
          </Wrapper>
          <Spacer isBasic />
          <Wrapper style={{backgroundColor:"#B5C6C41A",borderRadius:24,paddingVertical:totalSize(2),paddingHorizontal:totalSize(2)}}>
            <Wrapper style={{marginBottom:totalSize(1)}}>
              <Text style={{color:"#3F3F46",fontSize:10,fontWeight:"400"}}>
                Children
              </Text>
              <Text style={{color:"#3F3F46",fontSize:14,fontWeight:"400"}}>
                Yes 2
              </Text>
            </Wrapper>
            <Wrapper style={{marginBottom:totalSize(1)}}>
              <Text style={{color:"#3F3F46",fontSize:10,fontWeight:"400"}}>
                Gender
              </Text>
              <Text style={{color:"#3F3F46",fontSize:14,fontWeight:"400"}}>
                Fmale
              </Text>
            </Wrapper>
            <Wrapper style={{marginBottom:totalSize(1)}}>
              <Text style={{color:"#3F3F46",fontSize:10,fontWeight:"400"}}>
                Ethnicity
              </Text>
              <Text style={{color:"#3F3F46",fontSize:14,fontWeight:"400"}}>
                Politicly active
              </Text>
            </Wrapper>
            <Wrapper>
              <Text style={{color:"#3F3F46",fontSize:10,fontWeight:"400"}}>
                Religion
              </Text>
              <Text style={{color:"#3F3F46",fontSize:14,fontWeight:"400"}}>
                Hinduism
              </Text>
            </Wrapper>
          </Wrapper>
          <Spacer isBasic />
          <Wrapper>
            <Image
              style={styles.image} 
              source={require('../../../assets/images/main/user-11.png')}
            />
          </Wrapper>
          <Spacer isBasic />
          <Wrapper style={{backgroundColor:"#B5C6C41A",borderRadius:24,paddingVertical:totalSize(2),paddingHorizontal:totalSize(2)}}>
            <Wrapper style={{marginBottom:totalSize(1)}}>
              <Text style={{color:"#3F3F46",fontSize:10,fontWeight:"400"}}>
                Highest Degree
              </Text>
              <Text style={{color:"#3F3F46",fontSize:14,fontWeight:"400"}}>
                Associate degree
              </Text>
            </Wrapper>
            <Wrapper>
              <Text style={{color:"#3F3F46",fontSize:10,fontWeight:"400"}}>
                Current Occupation
              </Text>
              <Text style={{color:"#3F3F46",fontSize:14,fontWeight:"400"}}>
                Web Designer
              </Text>
            </Wrapper>
          </Wrapper>
          <Spacer isBasic />
          <Wrapper>
            <Image
              style={styles.image} 
              source={require('../../../assets/images/main/user-12.png')}
            />
          </Wrapper>
          <Spacer isBasic />
          <Wrapper style={{backgroundColor:"#B5C6C41A",borderRadius:24,paddingVertical:totalSize(2),paddingHorizontal:totalSize(2)}}>
            <Wrapper style={{}}>
              <Text style={{color:"#3F3F46",fontSize:10,fontWeight:"400",marginBottom:totalSize(1)}}>
                Typical Sunday
              </Text>
              <Text style={{color:"#3F3F46",fontSize:14,fontWeight:"400"}}>
                Running 🏃 from 06AM to 08PM and rest of the day enjoys 🎉 partying with friends 🥳
              </Text>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
        <TouchableOpacity 
          onPress={scrollToTop}
          style={{alignItems:"center"}}>
          <SvgIcons.TopArrowIcon />
          <Spacer isBasic />
          <Text style={{color:"#3F3F46",fontSize:14,fontWeight:"400"}}>
            Back to Top
          </Text>
        </TouchableOpacity>
        <Spacer isDoubleBase />
      </ScrollView>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 370,
    resizeMode: 'cover',
    borderRadius: 40,
  },
});

export default ScrollDetail;
