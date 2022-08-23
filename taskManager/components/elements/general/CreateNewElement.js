import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { newElementButton as styles } from '../../styles/Styles'

const CreateNewElement = (props, { destination, navigation }) => {
  const onPress = () => {
    navigation.navigate(destination);
  }

  return (
    props.selectionMode ?
      <>
        <TouchableOpacity
          onPress={props.closeSelectionMode}
          style={[styles.newElementButton, styles.closeSelectedMode]}
        >
          <Text style={[styles.newElementButtonText, { fontSize: 15 }]} >CLOSE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.closeSelectionMode}
          style={[styles.newElementButton, styles.deleteSelectedItems]}
        >
          <Text style={[styles.newElementButtonText, { fontSize: 15 }]} >DELETE</Text>
        </TouchableOpacity>
      </>
      :
      <TouchableOpacity onPress={onPress} style={styles.newElementButton}>
        <Text style={styles.newElementButtonText} >+</Text>
      </TouchableOpacity>
  )
}

export default CreateNewElement;