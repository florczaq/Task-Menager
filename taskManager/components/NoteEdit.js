import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Header from './elements/general/Header';
import PickColor from './elements/general/PickColor';
import Buttons from './elements/noteEdit/Buttons';
import TextArea from './elements/noteEdit/TextArea';
import { colors } from './properties/colors';
import { general } from './styles/Styles';
import { readData, saveData, KEYS } from '../storage/LocalDataStorage';

const NoteEdit = ({ navigation }) => {
  const [note, setNote] = useState({
    title: 'New Note',
    text: '',
    themeColor: colors.primary
  });
  const [colorPickerVisible, setColorPickerVisible] = useState(false);

  const saveNote = () =>{
    const saveNoteInMemory=(arr)=>{
      saveData({key: KEYS.NOTES, data: arr})
    }

    readData({key:  KEYS.NOTES}).then(res=>{
      let temp = res;
      temp.push(note);
      saveNoteInMemory(temp);
    }).catch(
      err =>{
        saveNoteInMemory([note])
      }
    )
  }

  const titleUpdate = v => setNote({ ...note, title: v });
  const themeColorUpdate = v => setNote({ ...note, themeColor: v });
  const textUpdate = v => setNote({ ...note, text: v });
  return (
    <SafeAreaView style={general.container}>
      <Header state={note.title} stateUpdate={titleUpdate} themeColor={note.themeColor}/>
      <TextArea note={note} setNote={textUpdate} />
      <Buttons navigation={navigation} openColorPicker={() => setColorPickerVisible(true)} saveNote={saveNote}/>
      <PickColor visible={colorPickerVisible} onSave={themeColorUpdate} onClose={() => { setColorPickerVisible(false) }} />
    </SafeAreaView>
  );
};

export default NoteEdit;
