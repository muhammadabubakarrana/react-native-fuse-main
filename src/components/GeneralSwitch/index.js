import React from 'react';
import {StyleSheet, View} from 'react-native';
import Wrapper from '../wrapper';
import Text from '../text';
import * as TextInputs from '../textInput';
import {totalSize, height, width} from 'react-native-dimension';
import {appStyles, colors, fontSize, sizes} from '../../services';
import Spacer from '../spacer';
import EditableTextInput from '../EditableInput';

const GeneralSwitch = () => {
  return (
    <Wrapper alignItemsCenter marginVerticalBase>
      <Wrapper style={{width: '100%'}}>
        <EditableTextInput
          title={'Relationship Goals'}
          initialValue="Goal One"
        />
        <EditableTextInput
          title={'Childrens'}
          initialValue="Have 3 Children's"
        />
        <EditableTextInput
          title={'Family Plans'}
          initialValue="Open to children"
        />
        <EditableTextInput title={'Gender'} initialValue="Female" />
        <EditableTextInput title={'Ethnicity'} initialValue="Ethnicity" />
        <EditableTextInput title={'Religion'} initialValue="Muslim" />
        <EditableTextInput title={'Hometown'} initialValue="London" />
        <EditableTextInput title={'Occupation'} initialValue="Web Designer" />
        <EditableTextInput title={'Politics'} initialValue="Active" />
      </Wrapper>
      {/* 

    
      <Wrapper style={{width: '100%'}}>
        <TextInputs.Colored
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          value={'Active'}
          title={'Politics'}
          titleStyle={[appStyles.textMedium, styles.title]}
          iconTypeRight={'material-community'}
          iconNameRight={'pencil'}
        />
      </Wrapper> */}
      {/* <Wrapper style={{width: '90%'}}>
        <Text style={styles.title} isMedium>
          Consume
        </Text>
        <Wrapper marginVerticalSmall flexDirectionRow style={styles.card}>
          <Wrapper>
            <Text isMedium style={{color: colors.appTextColor10}}>
              Heigh
            </Text>
            <Text isTinyTitle style={{color: colors.appTextColor9}}>
              178cm
            </Text>
          </Wrapper>
          <Wrapper>
            <Text isMedium style={{color: colors.appTextColor10}}>
              Drink
            </Text>
            <Text isTinyTitle style={{color: colors.appTextColor9}}>
              Sometimes
            </Text>
          </Wrapper>
          <Wrapper>
            <Text isMedium style={{color: colors.appTextColor10}}>
              Smoke
            </Text>
            <Text isTinyTitle style={{color: colors.appTextColor9}}>
              No
            </Text>
          </Wrapper>
          <Wrapper>
            <Text isMedium style={{color: colors.appTextColor10}}>
              Drugs
            </Text>
            <Text isTinyTitle style={{color: colors.appTextColor9}}>
              Yes
            </Text>
          </Wrapper>
        </Wrapper>
      </Wrapper> */}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.snow,
    borderRadius: 8,
    paddingLeft: width(1.3),
  },
  input: {
    fontSize: fontSize.input,
    color: colors.black,
  },
  title: {
    marginTop: height(1),
    color: colors.black,
  },
  card: {
    padding: totalSize(2),
    borderRadius: sizes.cardRadius,
    backgroundColor: colors.appBgColor7,
    justifyContent: 'space-between',
  },
});

export default GeneralSwitch;
