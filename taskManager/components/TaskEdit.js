import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View, TextInput} from 'react-native';

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
              setNote({title: v});
            }}
          />
          <View style={styles.underline} />
        </View>
      </View>
      <Text>Task Edit</Text>
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
  underline: {
    width: '90%',
    height: 2,
    backgroundColor: '#fff',
    opacity: 0.7,
  },
});

export default TaskEdit;
