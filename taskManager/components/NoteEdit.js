import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Header from './elements/Header';
import {general, noteEdit as styles} from './styles/Styles';

const TextArea = props => {
  const updateText = v => props.setNote({title: props.note.title, text: v});
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

const ActionButtons = props => {
  const buttons = [
    {content: '❌', func: props.onCancel},
    {content: '✔', func: props.onSubmit},
  ];

  return (
    <View style={styles.buttonContainer}>
      {buttons.map((button, i) => (
        <TouchableOpacity style={styles.button} key={i} onPress={button.func}>
          <Text style={styles.buttonText}>{button.content}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const NoteEdit = ({navigation}, props) => {
  const [note, setNote] = useState({title: 'New Note', text: ''});
  const titleUpdate = v => setNote({title: v, text: note.text});
  const goBack = () => navigation.goBack();
  const saveNote = () => navigation.navigate('Notes List');

  return (
    <SafeAreaView style={general.container}>
      <Header state={note.title} stateUpdate={titleUpdate} />
      <TextArea note={note} setNote={setNote} />
      <ActionButtons onSubmit={saveNote} onCancel={goBack} />
    </SafeAreaView>
  );
};

export default NoteEdit;
