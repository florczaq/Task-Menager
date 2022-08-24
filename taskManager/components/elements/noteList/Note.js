import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { noteList as styles } from '../../styles/Styles';

const MAX_LENGTH = {
  title: 15,
}

const IMAGES = {
  selected: '../../../resources/images/noteList/selectedNote.png',
  unselected: "../../../resources/images/noteList/unselectedNote.png",
}

const Note = props => {
  const [selected, setSelected] = useState(false);

  const switchSelection = () => {
    setSelected(selected ? false : true)
    props.onSelection(props.id);
  }

  const compressText = (txt, length) => {
    return txt.length > length ? `${String(txt).slice(0, length)}...` : txt;
  }

  useEffect(() => {
    if (!props.selectionMode) setSelected(false);
  })

  const longPressAction = () => {
    props.openSelectionMode(props.id)
    setSelected(true);
  }

  return (
    <TouchableOpacity
      style={[styles.note, { backgroundColor: props.themeColor }, props.selectionMode && styles.selectedNote]}
      key={props.id}
      onPress={
        () => {
          props.selectionMode && switchSelection()
        }
      }
      onLongPress={longPressAction}
    >
      {
        props.selectionMode && (selected
          ? <Image
            source={require('../../../resources/images/noteList/selectedNote.png')}
            style={styles.selectionImg}
          />
          : <Image
            source={require('../../../resources/images/noteList/unselectedNote.png')}
            style={styles.selectionImg}
          />)
      }
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
    </TouchableOpacity>
  )
}
export default Note;