import React from 'react';
import { TextInput, View } from 'react-native';
import { noteEdit as styles } from '../../styles/Styles';

const TextArea = props => {
  const updateText = v => props.setNote({ title: props.note.title, text: v });
  return (
    <View style={styles.textareaContainer}>
      <TextInput
        style={styles.textarea}
        value={props.note.text}
        placeholder="Text"
        onChangeText={updateText}
        scrollEnabled
        multiline
      />
    </View>
  );
};

export default TextArea;