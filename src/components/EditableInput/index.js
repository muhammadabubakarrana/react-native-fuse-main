import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/base';
import * as TextInputs from '../textInput';
import {appStyles, colors, fontSize} from '../../services';
import {totalSize, height, width} from 'react-native-dimension';

const EditableTextInput = ({title, initialValue}) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(initialValue);

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleTextChange = newText => {
    setText(newText);
    // Automatically save the text when it's changed
    // You can perform the save operation here
  };

  return (
    <View style={styles.container}>
      {editing ? (
        <TextInputs.Colored
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          value={text}
          title={title}
          titleStyle={[appStyles.textMedium, styles.title]}
          onChangeText={handleTextChange}
          onBlur={handleEditToggle}
          autoFocus={true}
        />
      ) : (
        <View>
          <TextInputs.Colored
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            value={text}
            title={title}
            editable={false}
            titleStyle={[appStyles.textMedium, styles.title]}
            iconTypeRight={'material-community'}
            iconNameRight={'pencil'}
            onPressIconRight={handleEditToggle}
          />
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
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
});

export default EditableTextInput;
