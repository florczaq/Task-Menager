import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {NotesGenerator} from './examples/ExampleData';
const notes = NotesGenerator(9);

const NotesList = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.upperBackroundRect}></View>
        <View style={styles.upperRect}>
          <Text style={styles.title}>My Notes</Text>
        </View>
      </View>
      <ScrollView style={{}}>
        <View
          style={{
            width: '100%',
            marginVertical: 20,
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          {notes.map((note, i) => (
            <TouchableOpacity
              style={{
                width: '40%',
                height: 250,
                backgroundColor: 'lightgrey',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10,
                marginBottom: 15,
                borderRadius: 10,
                borderWidth: 3,
                borderColor: 'grey',
              }}
              key={i}
            >
              <Text>{note.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
  upperContainer: {
    width: '100%',
    height: '15%',
    marginBottom: 10,
  },
  upperRect: {
    width: '100%',
    height: '80%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '90%',
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
    margin: 0,
  },
  upperBackroundRect: {
    position: 'absolute',
    backgroundColor: 'blue',
    top: '0%',
    width: '150%',
    height: '100%',
    rotation: 3,
    borderWidth: 2,
  },
  underline: {
    width: '90%',
    height: 2,
    backgroundColor: '#fff',
    opacity: 0.7,
  },
});

export default NotesList;
