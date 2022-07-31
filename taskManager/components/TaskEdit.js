import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const buttons = ['Set date', 'Set reminder', 'Preferences'];

const TaskEdit = props => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    date: '',
    reminder: '',
  });
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
            value={task.title}
            onChange={v => {
              setTask({title: v});
            }}
          />
          <View style={styles.underline} />
        </View>
      </View>
      <View style={styles.content}>
        <TextInput
          placeholder="Description"
          style={styles.description}
          onChange={v => {
            setTask({description: v});
          }}
        />
        <View style={styles.buttonContainer}>
          {buttons.map((element, i) => (
            <TouchableOpacity key={i} style={styles.button}>
              <Text style={styles.buttonText}>{element}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.confirmButtonContainer}>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={{fontSize: 15}}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={{fontSize: 15}}>OK</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 40,
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
  underline: {
    width: '90%',
    height: 2,
    backgroundColor: '#fff',
    opacity: 0.7,
  },
  description: {
    width: '80%',
    fontSize: 20,
    height: '10%',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  button: {
    width: '70%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'grey',
  },
  content: {
    width: '100%',
    height: '80%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 25,
  },
  confirmButtonContainer: {
    height: '10%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  confirmButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'grey',
  },
});

export default TaskEdit;
