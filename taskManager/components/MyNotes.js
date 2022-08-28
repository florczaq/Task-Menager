import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { KEYS, readData, saveData } from "../storage/LocalDataStorage";
import CreateNewElement from './elements/general/CreateNewElement';
import Header from './elements/general/Header';
import Note from './elements/noteList/Note';
import { general, noteList as styles } from './styles/Styles';

const EmptyListText = () => {
  return (
    <View style={styles.emptyList}>
      <Text style={styles.emptyListText}>No note created.</Text>
    </View>
  )
}

const MyNotes = ({ navigation }) => {
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [notes, setNotes] = useState([]);

  const reloadNotes = () => {
    readData({ key: KEYS.NOTES })
      .then(res => setNotes(res))
      .catch(err => console.log(err))
  }

  useEffect(() => { reloadNotes(); }, []);

  const openSelectionMode = (id) => {
    !selectionMode && setSelectionMode(true);
    setSelectedItems([id]);
  }

  const onSelection = (selectedNoteId) => {
    let index = selectedItems.indexOf(selectedNoteId);
    setSelectedItems(prev => index == -1
      ? [...prev, selectedNoteId]
      : selectedItems.filter(
        (value) => {
          return value !== selectedNoteId
        }
      ));
  }

  const closeSelectionMode = () => {
    setSelectionMode(false);
    setSelectedItems([]);
  }

  const deleteSelectedItems = () => {
    readData({ key: KEYS.NOTES }).then(res => {
      saveData({
        key: KEYS.NOTES, data: res.filter(
          (value, index) => { return selectedItems.indexOf(index) == -1; }
        )
      })
      closeSelectionMode();
      reloadNotes();
    }).catch(err => {
      console.warn(err);
    })
  }

  const itemIsSelected = (itemId) =>{
    return selectedItems.indexOf(itemId) != -1;
  }

  const renderItems = notes.map((note, i) => (
    <Note
      {...note}
      id={i}
      key={i}
      openSelectionMode={openSelectionMode}
      selectionMode={selectionMode}
      selected={itemIsSelected(i)}
      onSelection={onSelection}
      selectedItems={selectedItems}
      navigation={navigation}
    />
  ))

  const myList = (
    <ScrollView>
      <View style={styles.noteContainer}>
        {
          notes.length
            ? renderItems
            : <EmptyListText />
        }
      </View>
    </ScrollView>
  )

  return (
    <SafeAreaView style={general.container}>
      <Header text="My Notes" />
      {myList}
      <CreateNewElement
        destination='Note Edit'
        navigation={navigation}
        selectionMode={selectionMode}
        closeSelectionMode={closeSelectionMode}
        deleteSelectedItems={deleteSelectedItems}
      />
    </SafeAreaView>
  );
};

export default MyNotes;
