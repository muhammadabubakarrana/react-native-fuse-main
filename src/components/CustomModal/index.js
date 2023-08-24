import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {colors} from '../../services';

export default function CustomModal({visible, onRequestClose, BackPress}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 10,
          width: '80%',
        }}>
        {/* Back arrow */}
        <TouchableOpacity onPress={BackPress}>
          <Text style={{color: 'white', fontSize: 18}}>{'< Back'}</Text>
        </TouchableOpacity>

        {/* Options */}
        <TouchableOpacity>
          <Text style={{color: 'white', fontSize: 18}}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color: 'white', fontSize: 18}}>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color: 'white', fontSize: 18}}>Option 3</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
