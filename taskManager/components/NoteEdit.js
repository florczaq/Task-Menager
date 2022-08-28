import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { KEYS, readData, saveData } from '../storage/LocalDataStorage';
import Header from './elements/general/Header';
import PickColor from './elements/general/PickColor';
import Buttons from './elements/noteEdit/Buttons';
import TextArea from './elements/noteEdit/TextArea';
import { colors } from './properties/colors';
import { general } from './styles/Styles';

const NoteEdit = ({ route, navigation }) => {
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [note, setNote] = useState({
    title: 'New Note',
    text: '',
    themeColor: colors.primary
  });

  const validateNoteId = () => {
    try { return route.params.noteId; }
    catch (e) { return undefined; }
  }

  const selectedNoteId = validateNoteId();

  const loadNoteFromMemory = (id) => {
    readData({ key: KEYS.NOTES })
      .then(res => setNote(res[id]))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    selectedNoteId && loadNoteFromMemory(selectedNoteId);
  }, [])

  const saveNote = () => {
    const saveNoteInMemory = (arr) =>
      saveData({ key: KEYS.NOTES, data: arr })

    readData({ key: KEYS.NOTES })
      .then(
        res => {
          let temp = res;
          selectedNoteId
            ? temp[selectedNoteId] = note
            : temp.push(note);
          saveNoteInMemory(temp);
        })
      .catch(
        () => saveNoteInMemory([note])
      )
  }

  const titleUpdate = v => setNote({ ...note, title: v });
  const themeColorUpdate = v => setNote({ ...note, themeColor: v });
  const textUpdate = v => setNote({ ...note, text: v });

  return (
    <SafeAreaView style={general.container}>
      <Header state={note.title} stateUpdate={titleUpdate} themeColor={note.themeColor} />
      <TextArea note={note} setNote={textUpdate} />
      <Buttons navigation={navigation} openColorPicker={() => setColorPickerVisible(true)} saveNote={saveNote} />
      <PickColor visible={colorPickerVisible} onSave={themeColorUpdate} onClose={() => { setColorPickerVisible(false) }} />
    </SafeAreaView>
  );
};

export default NoteEdit;
