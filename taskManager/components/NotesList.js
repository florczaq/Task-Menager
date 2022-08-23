import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { KEYS, readData } from "../storage/LocalDataStorage";
import Header from './elements/general/Header';
import Note from './elements/noteList/Note';
import { general, noteList as styles } from './styles/Styles';

const EmptyListText = () => {
  return (
    <View style={styles.emptyList}>
      <Text style={styles.emptyListText}>No notes created.</Text>
    </View>
  )
}

const NoteList = props => {
  const [notes, setNotes] = React.useState([]);
  React.useEffect(() => {
    readData({ key: KEYS.NOTES }).then(res => {
      setNotes(res);
    }).catch(err => {
      console.log(err);
    })
  }, []);

  const renderItems = notes.map((note, i) => (
    <Note {...note} id={i} key={i} />
  ))

  return (
    <ScrollView>
      <View style={styles.noteContainer}>
        {
          notes.length
            ? renderItems
            : <EmptyListText />
        }
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
