import React, {useState} from 'react';
import {View, Dimensions, TouchableOpacity, Image} from 'react-native';
import Wrapper from '../wrapper';
import Text from '../text';
import ImagePicker from 'react-native-image-crop-picker';
import Spacer from '../spacer';
import {SvgIcons} from '../../services/constants/svg';
import {totalSize, height, width} from 'react-native-dimension';
import {colors} from '../../services';

const PhotosSwitch = () => {
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const [imageThree, setImageThree] = useState(null);
  const [imageFour, setImageFour] = useState(null);
  const [imageFive, setImageFive] = useState(null);
  const [imageSix, setImageSix] = useState(null);

  //handle Images
  const selectImageHandle = value => {
    try {
      const options = {
        title: 'Select Image',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };

      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        const URL = image?.path;
        console.log(image);
        switch (value) {
          case 'one':
            setImageOne(URL);
            break;
          case 'two':
            setImageTwo(URL);
            break;
          case 'three':
            setImageThree(URL);
            break;
          case 'four':
            setImageFour(URL);
            break;
          case 'five':
            setImageFive(URL);
            break;
          case 'six':
            setImageSix(URL);
            break;
          default:
          // code block
        }
      });
    } catch (error) {
      console.log(error?.message);
    }
  };

  return (
    <View style={{flex: 1, width: Dimensions.get('window').width}}>
      <Wrapper marginHorizontalLarge marginVerticalLarge>
        <View style={{flexDirection: 'row'}}>
          {imageOne !== null ? (
            <TouchableOpacity
              onPress={() => selectImageHandle('one')}
              style={{
                flex: 1,
                justifyContent: 'center',
                height: height(14),
                width: width(15),
                borderColor: '#DEE1E1',
                borderWidth: 1,
                borderRadius: 8,
                marginRight: totalSize(1),
              }}>
              <Image
                source={{uri: imageOne}}
                style={{
                  height: '100%',
                  width: '100%',
                  resizeMode: 'cover',
                  borderRadius: 8,
                }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => selectImageHandle('one')}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: height(14),
                width: width(15),
                backgroundColor: '#FFF',
                borderColor: '#DEE1E1',
                borderWidth: 1,
                borderRadius: 8,
                marginRight: totalSize(1),
              }}>
              <SvgIcons.PlusIcon fillColor={colors.appColor1} />
            </TouchableOpacity>
          )}
          {imageTwo !== null ? (
            <TouchableOpacity
              onPress={() => selectImageHandle('two')}
              style={{
                flex: 1,
                justifyContent: 'center',
                height: height(14),
                width: width(15),
                borderColor: '#DEE1E1',
                borderWidth: 1,
                borderRadius: 8,
                marginRight: totalSize(1),
              }}>
              <Image
                source={{uri: imageTwo}}
                style={{
                  height: '100%',
                  width: '100%',
                  resizeMode: 'cover',
                  borderRadius: 8,
                }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => selectImageHandle('two')}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: height(14),
                width: width(15),
                backgroundColor: '#FFF',
                borderColor: '#DEE1E1',
                borderWidth: 1,
                borderRadius: 8,
                marginRight: totalSize(1),
              }}>
              <SvgIcons.PlusIcon fillColor={colors.appColor1} />
            </TouchableOpacity>
          )}
          {imageThree !== null ? (
            <TouchableOpacity
              onPress={() => selectImageHandle('three')}
              style={{
                flex: 1,
                justifyContent: 'center',
                height: height(14),
                width: width(15),
                borderColor: '#DEE1E1',
                borderWidth: 1,
                borderRadius: 8,
              }}>
              <Image
                source={{uri: imageThree}}
                style={{
                  height: '100%',
                  width: '100%',
                  resizeMode: 'cover',
                  borderRadius: 8,
                }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => selectImageHandle('three')}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: height(14),
                width: width(15),
                backgroundColor: '#FFF',
                borderColor: '#DEE1E1',
                borderWidth: 1,
                borderRadius: 8,
              }}>
              <SvgIcons.PlusIcon fillColor={colors.appColor1} />
            </TouchableOpacity>
          )}
        </View>
        <Spacer isBasic />
        <View style={{flexDirection: 'row'}}>
          {imageFour !== null ? (
            <TouchableOpacity
              onPress={() => selectImageHandle('four')}
              style={{
                flex: 1,
                justifyContent: 'center',
                height: height(14),
                width: width(15),
                borderColor: '#DEE1E1',
                borderWidth: 1,
                borderRadius: 8,
                marginRight: totalSize(1),
              }}>
              <Image
                source={{uri: imageFour}}
                style={{
                  height: '100%',
                  width: '100%',
                  resizeMode: 'cover',
                  borderRadius: 8,
                }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => selectImageHandle('four')}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: height(14),
                width: width(15),
                backgroundColor: '#FFF',
                borderColor: '#DEE1E1',
                borderWidth: 1,
                borderRadius: 8,
                marginRight: totalSize(1),
              }}>
              <SvgIcons.PlusIcon fillColor={colors.appColor1} />
            </TouchableOpacity>
          )}
          {imageFive !== null ? (
            <TouchableOpacity
              onPress={() => selectImageHandle('five')}
              style={{
                flex: 1,
                justifyContent: 'center',
                height: height(14),
                width: width(15),
                borderColor: '#DEE1E1',
                borderWidth: 1,
                borderRadius: 8,
                marginRight: totalSize(1),
              }}>
              <Image
                source={{uri: imageFive}}
                style={{
                  height: '100%',
                  width: '100%',
                  resizeMode: 'cover',
                  borderRadius: 8,
                }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => selectImageHandle('five')}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: height(14),
                width: width(15),
                backgroundColor: '#FFF',
                borderColor: '#DEE1E1',
                borderWidth: 1,
                borderRadius: 8,
                marginRight: totalSize(1),
              }}>
              <SvgIcons.PlusIcon fillColor={colors.appColor1} />
            </TouchableOpacity>
          )}
          {imageSix !== null ? (
            <TouchableOpacity
              onPress={() => selectImageHandle('six')}
              style={{
                flex: 1,
                justifyContent: 'center',
                height: height(14),
                width: width(15),
                borderColor: '#DEE1E1',
                borderWidth: 1,
                borderRadius: 8,
              }}>
              <Image
                source={{uri: imageSix}}
                style={{
                  height: '100%',
                  width: '100%',
                  resizeMode: 'cover',
                  borderRadius: 8,
                }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => selectImageHandle('six')}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: height(14),
                width: width(15),
                backgroundColor: '#FFF',
                borderColor: '#DEE1E1',
                borderWidth: 1,
                borderRadius: 8,
              }}>
              <SvgIcons.PlusIcon fillColor={colors.appColor1} />
            </TouchableOpacity>
          )}
        </View>
      </Wrapper>
    </View>
  );
};

export default PhotosSwitch;
