import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { noteEdit as styles } from '../../styles/Styles';
import PickColor from '../general/PickColor';


const Buttons = ({ navigation }) => {
  const buttons = [
    { content: '❌', func: () => navigation.goBack() },
    { content: '✔', func: () => navigation.navigate('Notes List') },
  ];

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.themeColor}>
        <Text style={styles.buttonText}>Theme color</Text>
      </TouchableOpacity>
      <View style={styles.confirmationButtonsContainer}>
        {buttons.map((button, i) => (
          <TouchableOpacity style={styles.button} key={i} onPress={button.func}>
            <Text style={styles.buttonText}>{button.content}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Buttons;