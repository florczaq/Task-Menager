import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from './elements/general/Header';
import TaskList from './elements/taskList/TaskList';
import { general } from './styles/Styles';




const MyTasks = () => {
  return (
    <SafeAreaView style={general.container}>
      <Header text="My Tasks" />
      <TaskList />
    </SafeAreaView>
  );
};

export default MyTasks;
