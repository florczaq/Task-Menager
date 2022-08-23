import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from './elements/general/Header';
import CreateNewElement from './elements/general/CreateNewElement';
import TaskList from './elements/taskList/TaskList';
import { general } from './styles/Styles';

const MyTasks = ({navigation}) => {
  return (
    <SafeAreaView style={general.container}>
      <Header text="My Tasks" />
      <CreateNewElement destination={'Task Edit'} navigation={navigation}/>
      <TaskList />
    </SafeAreaView>
  );
};

export default MyTasks;
