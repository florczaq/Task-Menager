import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { noteList as styles } from '../../styles/Styles';

const MAX_LENGTH = {
  title: 11,
}

const IMAGES = {
  SELECTED: require('../../../resources/images/noteList/selectedNote.png'),
  UNSELECTED: require('../../../resources/images/noteList/unselectedNote.png'),
}

const NoteContent = props => {

  const compressText = (txt, length) => {
    return String(txt).length > length ? `${String(txt).slice(0, length)}...` : txt;
  }

  return (
    <>
      <View style={styles.noteTitle}>
        <Text style={styles.noteTitleText}>
          {compressText(props.title, MAX_LENGTH.title)}
        </Text>
      </View>
      <View style={styles.noteText}>
        <Text style={styles.noteTextText}>
          {props.text}
        </Text>
      </View>
    </>
  )
}

const Note = props => {

  const switchSelection = () => props.onSelection(props.id);
  const longPressAction = () => props.openSelectionMode(props.id)
  const onPress = () => props.selectionMode
    ? switchSelection()
    : props.navigation.navigate('Note Edit', { noteId: props.id });


  return (
    <TouchableOpacity
      style={[styles.note, { backgroundColor: props.themeColor }, props.selectionMode && styles.selectedNote]}
      key={props.id}
      onPress={onPress}
      onLongPress={longPressAction}
    >
      {props.selectionMode && (props.selected
        ? <Image
          source={IMAGES.SELECTED}
          style={styles.selectionImg}
        />
        : <Image
          source={IMAGES.UNSELECTED}
          style={styles.selectionImg}
        />
      )}
      <NoteContent {...props} />
    </TouchableOpacity>
  )
}
export default Note;