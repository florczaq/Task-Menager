import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { ColorPicker } from 'react-native-btr';
import { colors } from '../../properties/colors';
import { colorPicker as styles } from '../../styles/Styles';

const PickColor = props => {
  const [selectedColor, setSelectedColor] = useState(colors.primary);
  const saveColor = color => {
    setSelectedColor(color);
    props.onSave(color);
  };

  return (
    <Modal transparent visible={props.visible}>
      <View style={styles.centerDiv}>
        <View style={[styles.container]}>
          <ColorPicker selectedColor={selectedColor} onSelect={saveColor} />
          <TouchableOpacity style={styles.saveButton} onPress={props.onClose}>
            <Text style={styles.saveButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PickColor;
