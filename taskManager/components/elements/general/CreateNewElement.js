import React from "react"
import { TouchableOpacity, Text } from "react-native"
import { newElementButton as styles } from '../../styles/Styles'

const CreateNewElement = ({ destination, navigation }) => {
  const onPress = () => {
    navigation.navigate(destination);
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.newElementButton}>
      <Text style={styles.newElementButtonText} >+</Text>
    </TouchableOpacity>
  )
}

export default CreateNewElement;