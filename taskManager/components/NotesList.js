import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from './elements/general/Header';
import { NotesGenerator } from './examples/ExampleData';
import { general, noteList } from './styles/Styles';

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
