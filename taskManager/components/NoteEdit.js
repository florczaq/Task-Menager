import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const NoteEdit = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.upperBackroundRect}></View>
        <View style={styles.upperRect}>
          <TextInput
            editable
            style={styles.upperText}
            placeholder="Title"
            placeholderTextColor="lightgrey"
            autoFocus={false}
          />
        </View>
      </View>
      <View style={styles.textareaContainer}>
        <TextInput
          numberOfLines={40}
          scrollEnabled
          editable
          spellCheck
          multiline
          autoCorrect
          style={styles.textarea}
          placeholder={'Text'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>OK</Text>
        </TouchableOpacity>
      </View>
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
  },
  upperRect: {
    width: '100%',
    height: '80%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperText: {
    width: '95%',
    fontSize: 30,
    textDecorationLine: 'underline',
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
  textarea: {
    width: '98%',
    height: '100%',
    borderWidth: 1,
    textAlignVertical: 'top',
    padding: 10,
  },
  textareaContainer: {
    width: '100%',
    height: '70%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 2,
  },
  buttonContainer: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'green',
  },
});

export default NoteEdit;
