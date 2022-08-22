import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Header from './elements/general/Header';
import Buttons from './elements/noteEdit/Buttons';
import TextArea from './elements/noteEdit/TextArea';
import { general } from './styles/Styles';

const NoteEdit = ({ navigation }) => {
  const [note, setNote] = useState({ title: 'New Note', text: '' });
  const titleUpdate = v => setNote({ ...note, title: v });

  return (
    <SafeAreaView style={general.container}>
      <Header state={note.title} stateUpdate={titleUpdate} />
      <TextArea note={note} setNote={setNote} />
      <Buttons navigation={navigation} />
    </SafeAreaView>
  );
};

export default NoteEdit;
