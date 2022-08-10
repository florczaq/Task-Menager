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

const ActionButtons = ({navigation}, props) => {
  const buttons = [
    {content: '❌', func: () => navigation.goBack()},
    // {content: 'Atch', func: () => navigation.goBack()},
    {content: '✔', func: () => navigation.navigate('Notes List')},
  ];

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.preferences}>
        <Text style={styles.buttonText}>Preferences</Text>
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

const NoteEdit = ({navigation}, props) => {
  const [note, setNote] = useState({title: 'New Note', text: ''});
  const titleUpdate = v => setNote({...note, title: v});

  return (
    <SafeAreaView style={general.container}>
      <Header state={note.title} stateUpdate={titleUpdate} />
      <TextArea note={note} setNote={setNote} />
      <ActionButtons navigation={navigation} />
    </SafeAreaView>
  );
};

export default NoteEdit;
