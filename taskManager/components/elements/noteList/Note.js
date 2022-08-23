import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { noteList as styles } from '../../styles/Styles';

const MAX_LENGTH = {
  title: 10,
}

const Note = props => {

  const compressText = (txt, length) => {
    return txt.length > length ? `${String(txt).slice(0, length)}...` : txt;
  }

  return (
    <TouchableOpacity style={[styles.note, { backgroundColor: props.themeColor }]} key={props.id}>
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