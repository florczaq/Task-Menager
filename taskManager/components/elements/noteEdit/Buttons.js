import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { noteEdit as styles } from '../../styles/Styles';

const ThemeColorButton = ({openColorPicker}) => {
  return (
    <TouchableOpacity style={styles.themeColor} onPress={openColorPicker}>
      <Text style={styles.buttonText}>Theme color</Text>
    </TouchableOpacity>
  )
}

const Buttons = ({ navigation, openColorPicker, saveNote }) => {
  const buttons = [
    { content: '❌', func: () => navigation.goBack() },
    {
      content: '✔', func: () => {
        saveNote();
        navigation.navigate('Home')
      }
    }
  ];

  return (
    <View style={styles.buttonContainer}>
      <ThemeColorButton openColorPicker={openColorPicker}/>
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