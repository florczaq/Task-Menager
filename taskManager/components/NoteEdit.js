import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const NoteEdit = props => {
  const [note, setNote] = useState({title: '', text: ''});

  const onSubmit = () => {};
  const onCancel = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.upperBackroundRect}></View>
        <View style={styles.upperRect}>
          <TextInput
            editable
            style={styles.title}
            placeholder="Title"
            placeholderTextColor="lightgrey"
            autoFocus={false}
            value={note.title}
            onChange={v => {
              setNote({title: v});
            }}
          />
          <View style={styles.underline} />
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
          value={note.text}
          onChange={v => {
            setNote({text: v});
          }}
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
  title: {
    width: '90%',
    fontSize: 30,
    color: '#fff',
    textAlign: 'left',
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
  textarea: {
    width: '95%',
    height: '100%',
    borderWidth: 0.3,
    textAlignVertical: 'top',
    padding: 10,
    borderColor: 'grey',
    fontSize: 15,
  },
  textareaContainer: {
    width: '100%',
    height: '70%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 2,
  },
  buttonContainer: {
    paddingHorizontal: 0,
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  underline: {
    width: '90%',
    height: 2,
    backgroundColor: '#fff',
    opacity: 0.7,
  },
});

export default NoteEdit;
