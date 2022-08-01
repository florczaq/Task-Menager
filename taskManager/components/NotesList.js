import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from './elements/Header';
import {general, noteList} from './styles/Styles';
import {NotesGenerator} from './examples/ExampleData';

const notes = NotesGenerator(9);

const NoteList = props => {
  return (
    <ScrollView>
      <View style={noteList.noteContainer}>
        {notes.map((note, i) => (
          <TouchableOpacity style={noteList.note} key={i}>
            <Text>{note.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const MyNotes = props => {
  return (
    <SafeAreaView style={general.container}>
      <Header text="My Notes" />
      <NoteList />
    </SafeAreaView>
  );
};

export default MyNotes;
