import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import Welcome from './components/Welcome';
import NoteEdit from './components/NoteEdit';
import TaskEdit from './components/TaskEdit';
import TasksList from './components/TasksList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Welcome /> */}
      {/* <NoteEdit /> */}
      {/* <TaskEdit /> */}
      <TasksList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
